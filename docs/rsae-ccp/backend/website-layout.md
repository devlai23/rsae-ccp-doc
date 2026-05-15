---
id: website-layout
title: Website Layout
sidebar_position: 3
---

# Backend Website Layout

## Overview

The RSAE CCP backend is an Express.js (ES Modules) application that pairs Firebase Authentication with a swappable SQL database. Every request flows through a fixed sequence of layers, keeping HTTP handling, business logic, and data access cleanly separated. The data layer is intentionally split into a **repository** and a **provider** so the underlying database can be switched between Supabase (PostgreSQL) and AWS RDS (MySQL) by changing a single import.

## Architectural Layers

**Routes**
Located in `src/routes/`. Each file is an Express router scoped to a feature (`authRoutes`, `auditLogsRoutes`, `commentsRoutes`, `dashboardRoutes`, `proposalsRoutes`). Routes wire HTTP method + path to a controller and apply any required middleware. They are mounted in `src/server.js` at feature prefixes (`/auth`, `/audit-logs`, `/comments`, `/dashboard`, `/proposals`).

**Middleware**
Located in `src/middleware/`. Runs before controllers to enforce request-level rules:

- `authMiddleware.js` — verifies the Firebase ID token from the `Authorization: Bearer ...` header and attaches `req.user`.
- `requireAdmin.js` — checks that the authenticated user has an admin role/claim.
- `voteRateLimit.js` — throttles voting endpoints to prevent abuse.

**Controllers**
Located in `src/controllers/`. Translate HTTP requests into repository/service calls, then shape the response. Controllers contain no SQL and no direct database access — they only orchestrate. One controller per feature (`authController`, `proposalsController`, `commentsController`, etc.).

**Services**
Located in `src/services/`. Hold cross-cutting application logic that doesn't fit neatly into a single controller — e.g., `auditLogService` for recording audit events, `dashboardService` for aggregating dashboard data. Controllers call into services when they need this shared behavior.

**Repositories**
Located in `src/repositories/`. Thin adapters that expose a stable data-access API to the rest of the app. Each repository delegates to a provider:

```javascript
// src/repositories/userRepository.js
// Switch this import to swap between Supabase (Postgres) and AWS (MySQL)
// import provider from '../providers/postgresProvider.js';
import provider from '../providers/mysqlProvider.js';

const userRepository = {
  createUser: (userData) => provider.createUser(userData),
  findByUid: (uid) => provider.findByUid(uid),
  getAll: () => provider.getAll(),
  upsertUser: (userData) => provider.upsertUser(userData),
};
```

**Providers**
Located in `src/providers/`. Database-specific implementations of the queries a repository needs. `postgresProvider.js` targets Supabase; `mysqlProvider.js` targets AWS RDS. Providers are the only layer that issues SQL — they use parameterized queries through `pg` or `mysql2` connection pools defined in `src/config/database.js`.

**Config**
Located in `src/config/`. Initializes external clients:

- `firebase.js` — Firebase Admin SDK, used by `authMiddleware` to verify ID tokens.
- `database.js` — Connection pool for the active SQL database.

**SQL**
Located in `sql/`. Schema files for each supported database: `create_tables.sql` (PostgreSQL) and `create_tables_mysql.sql` (MySQL), plus migration scripts.

## Request Flow

A typical authenticated request travels through the stack as follows:

```
Route → Middleware → Controller → Service / Repository → Provider → Database
```

1. Express matches the URL and HTTP method to a route in `src/routes/`.
2. Middleware runs in order: CORS, cookie parsing, JSON body parsing, path normalization (in `server.js`), then any route-level middleware (`authMiddleware`, `requireAdmin`, `voteRateLimit`).
3. The controller validates the request, calls the appropriate repository (and any services it needs), and returns a JSON response.
4. The repository forwards the call to its provider.
5. The provider runs a parameterized SQL query against the configured database.
6. Errors propagate to the global error handler in `server.js`, which returns a sanitized message in production and the full message in development.

## Authentication Layout

Authentication is handled by Firebase Auth, not by the backend itself:

1. The frontend signs the user in with Firebase (email/password or Google OAuth) and obtains an ID token.
2. The frontend sends the token on every protected request via the `Authorization: Bearer <token>` header.
3. `authMiddleware` verifies the token against Firebase Admin SDK and attaches the decoded token to `req.user`.
4. `requireAdmin` (where applied) checks the user's role/claims for admin-only routes.

User records are synced into the database through `POST /auth/token`, which upserts the Firebase user into the `users` table via `userRepository.upsertUser`.

## Database Swap

The repository–provider split is the key extension point. To migrate the entire backend from Supabase to AWS RDS (or vice versa):

1. Update `src/config/database.js` to point at the new database.
2. In each file under `src/repositories/`, swap the provider import from `postgresProvider.js` to `mysqlProvider.js` (or vice versa).
3. Apply the corresponding schema from `sql/`.

No controller, service, route, or middleware needs to change.

## Adding a New Feature

When adding a new feature to the backend:

1. Add the schema to `sql/create_tables.sql` (and the MySQL equivalent if you intend to support both databases).
2. Implement the queries in `src/providers/postgresProvider.js` (and the MySQL provider, if applicable). Keep them as small, parameterized functions.
3. Create a repository in `src/repositories/` that exposes the operations the rest of the app will use, delegating to the provider.
4. Add a controller in `src/controllers/` that handles request parsing, calls the repository (and any services), and shapes the response.
5. Define routes in `src/routes/`, applying `authMiddleware`, `requireAdmin`, or rate-limit middleware as needed.
6. Mount the new router in `src/server.js` under an appropriate prefix.

Keeping changes inside these layers preserves the separation of concerns and keeps the Supabase ↔ RDS swap working.
