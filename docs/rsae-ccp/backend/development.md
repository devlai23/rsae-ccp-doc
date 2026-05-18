---
id: development
title: Development Guide
sidebar_position: 4
---

# Backend Development Guide

Learn how to develop, test, and deploy the backend service for `rsae-ccp`.

## Overview

The backend service is built with:

- Express.js (API and middleware)
- Firebase Admin SDK (token verification and user creation)
- SQL providers (MySQL active, PostgreSQL compatibility paths present)
- CORS + cookie-parser + JSON body parsing

## Environment Variables

Create a `.env` file with the following variables:

```env
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
PORT=5050
FRONTEND_URL=https://your-frontend-domain.com
FRONTEND_URL_DEV=http://localhost:5173
API_URL=http://localhost:5050
NODE_ENV=development
FIREBASE_BYPASS_AUTH=false
```

Important:

- `FIREBASE_SERVICE_ACCOUNT_KEY` must contain valid JSON with a `project_id`.
- `FRONTEND_URL` and `FRONTEND_URL_DEV` are both used in CORS allowlist checks.
- `NODE_ENV=production` masks detailed server errors in responses.

## Authentication Flow

Authentication is token-first:

1. Frontend authenticates with Firebase client SDK.
2. Frontend sends Firebase ID token to backend.
3. Backend verifies token via Firebase Admin.
4. Backend reads or writes user records in SQL.

### Auth Routes

```javascript
POST /auth/signup    // Create Firebase + DB user
POST /auth/login     // Verify ID token, set session cookie
POST /auth/logout    // Clear session cookie
GET  /auth/me        // Return current user
GET  /auth/profile   // Alias of /auth/me
GET  /auth/users     // Protected route (requires Bearer token)
POST /auth/token     // OAuth token sync/upsert path
```

## Session Management

- `auth/login` and `auth/token` set an HTTP-only `session` cookie.
- Most protected routes use `Authorization: Bearer <firebase-id-token>` and `authMiddleware`.
- `authMiddleware` verifies token and attaches decoded claims to `req.user`.

## Development Process

### Git Workflow

1. Create feature branch from main:

```bash
git checkout -b feature/your-feature
```

2. Make changes and commit:

```bash
git add .
git commit -m "feat: description of changes"
```

3. Push and create PR:

```bash
git push origin feature/your-feature
```

4. Request review from CODEOWNERS

### Code Quality

The repository enforces:

- Linting with ESLint
- Formatting with Prettier
- GitHub Actions for CI/CD
- Protected main branch
- Required PR reviews

### Running Locally

Start development server:

```bash
npm run dev
```

Lint and format:

```bash
npm run lint
npm run format
```

Run tests:

```bash
npm test
```

`npm test` is currently a placeholder script. Use endpoint-level manual testing until an automated suite is added.

## API Surface

### Public Endpoints

- `GET /health`
- `GET /proposals`
- `GET /proposals/tags`
- `GET /proposals/:id`
- `POST /proposals`
- `POST /proposals/:id/vote`
- `GET /proposals/:id/comments`
- `POST /proposals/:id/comments`

### Protected Endpoints

- `PUT /proposals/:id/status` (auth required)
- `GET /dashboard/metrics` (auth required)
- `GET /dashboard/categories` (auth required)
- `GET /audit-logs` (auth required)
- `DELETE /comments/:id` (auth + admin required)

### Voting Behavior

- Vote identity is tracked with a backend-generated cookie voter ID.
- Each voter can vote once per proposal.
- Voting only succeeds when proposal status is `approved`.
- IP-based rate limiting caps vote attempts per 15-minute window.

## Error Handling

Most controllers return:

```javascript
res.status(code).json({ error: 'message' });
```

Common statuses:

- `400` invalid input
- `401` missing or invalid auth token
- `403` insufficient role for action
- `404` entity not found
- `409` duplicate vote
- `429` vote rate limit exceeded
- `500` unhandled internal failure

## Common Issues

1. CORS errors

- Check `FRONTEND_URL` and `FRONTEND_URL_DEV` values in `.env`.
- Verify frontend origin exactly matches one allowlisted origin.

2. Auth errors

- Ensure frontend sends `Authorization: Bearer <firebase-id-token>`.
- Confirm Firebase service account key is valid.
- Check token expiration (`auth/id-token-expired`).

3. Database errors

- Confirm `rds-config.ini` exists and has valid credentials.
- Ensure schema was applied from `sql/create_tables_mysql.sql`.
- Watch for SQL dialect mismatches if supporting both MySQL and PostgreSQL.

4. Admin deletion blocked on comments

- Ensure token claims satisfy the `requireAdmin` middleware checks.

## Making Schema Changes

1. Add migration SQL in `sql/`.
2. Update provider SQL and keep repository interfaces stable.
3. Preserve response shape compatibility for frontend clients.
4. Validate behavior on the target database dialect.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [MySQL 8 Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
