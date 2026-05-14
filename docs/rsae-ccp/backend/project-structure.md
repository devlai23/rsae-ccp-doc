---
id: project-structure
title: Backend Project Structure
sidebar_position: 2
---

# Backend Project Structure

The RSAE CCP backend is organized by responsibility: routes define endpoints, controllers handle request/response logic, repositories choose a data provider, and providers execute SQL.

## Directory Overview

```bash
rsae-ccp-be/
├── sql/
│   ├── create_tables.sql                 # PostgreSQL schema
│   ├── create_tables_mysql.sql           # MySQL schema
│   └── migrate_add_proposal_votes_mysql.sql
├── src/
│   ├── config/
│   │   ├── database.js                  # DB pool creation
│   │   └── firebase.js                  # Firebase Admin initialization
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── auditLogsController.js
│   │   ├── commentsController.js
│   │   ├── dashboardController.js
│   │   ├── proposalCommentsController.js
│   │   ├── proposalsController.js
│   ├── lib/
│   │   └── voterCookie.js               # Anonymous voter cookie helpers
│   ├── middleware/
│   │   ├── authMiddleware.js            # Firebase token verification
│   │   ├── requireAdmin.js              # Admin authorization gate
│   │   └── voteRateLimit.js             # Vote endpoint throttling
│   ├── providers/
│   │   ├── auditLogPostgresProvider.js
│   │   ├── mysqlProvider.js
│   │   ├── postgresProvider.js
│   │   ├── proposalCommentsPostgresProvider.js
│   │   └── proposalPostgresProvider.js
│   ├── repositories/
│   │   ├── auditLogRepository.js
│   │   ├── proposalCommentsRepository.js
│   │   ├── proposalRepository.js
│   │   └── userRepository.js
│   ├── routes/
│   │   ├── auditLogsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── commentsRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── proposalsRoutes.js
│   ├── services/
│   │   ├── auditLogService.js
│   │   └── dashboardService.js
│   └── server.js                         # Express app entrypoint
├── .env.example
├── rds-config.ini.example
├── SETUP_GUIDE.md
└── package.json
```

## Core Directories

### Route -> Controller -> Repository -> Provider

The backend follows a layered flow:

1. Route files register endpoint paths and middleware.
2. Controllers validate input and return HTTP responses.
3. Repositories define stable data-access interfaces.
4. Providers run SQL for the selected database engine.

This pattern lets you switch data providers with minimal controller changes.

### `config/`

Contains configuration files for external services and application settings.

- `firebase.js` initializes Firebase Admin from `FIREBASE_SERVICE_ACCOUNT_KEY`.
- `database.js` creates the SQL connection pool used by providers.

### `controllers/`

Implements endpoint behavior, validation, and response formatting.

Examples:

- `authController.js` handles signup/login/logout/token sync.
- `proposalsController.js` supports listing, creation, voting, and status updates.
- `proposalCommentsController.js` handles proposal comment listing/creation.

### `middleware/`

Runs request guards before controller handlers.

- `authMiddleware.js` verifies Firebase ID tokens.
- `requireAdmin.js` enforces admin-only operations.
- `voteRateLimit.js` caps vote requests by IP window.

### `providers/`

Contains raw SQL logic and result mapping.

- `mysqlProvider.js` and `postgresProvider.js` are user-focused providers.
- `proposalPostgresProvider.js`, `proposalCommentsPostgresProvider.js`, and `auditLogPostgresProvider.js` include SQL that supports both MySQL and PostgreSQL syntax paths.

### `repositories/`

Acts as the provider adapter layer.

- Repositories expose stable methods used by controllers.
- Swapping providers is typically a one-line import change in a repository.

### `routes/`

Maps URL paths to controller methods and middleware.

Primary route groups:

- `/auth`
- `/proposals`
- `/comments`
- `/dashboard`
- `/audit-logs`

### `services/`

Provides cross-controller business logic.

- `dashboardService.js` builds dashboard aggregates.
- `auditLogService.js` writes standardized audit events.

### `server.js`

Bootstraps the API application:

- Loads environment variables
- Configures CORS with allowed frontend origins
- Registers JSON/cookie middleware
- Mounts route modules
- Exposes `/health`
- Starts the HTTP server

## Protected Files

The following files should not be modified directly:

```bash
├── node_modules/       # Project dependencies
├── eslint.config.mjs  # Linting configuration
├── package-lock.json  # Dependency lock file
└── package.json       # Project metadata and scripts
```

These files are essential for the project's configuration and dependencies:

- `node_modules/`: Automatically managed by npm
- `eslint.config.mjs`: Maintains consistent code style across all projects
- `package.json` & `package-lock.json`: Managed through npm commands

## Key Root Files

- `.env.example`: baseline environment variable template.
- `rds-config.ini.example`: MySQL connection template.
- `SETUP_GUIDE.md`: implementation notes and migration guidance.
- `eslint.config.js` and `.prettierrc`: code quality standards.
- `package.json`: scripts and dependency manifest.

## Adding New Features

When adding new features to the backend:

1. Add or extend route definitions in `src/routes`.
2. Implement request handling in a controller.
3. Add repository methods that express the needed data operations.
4. Implement provider SQL and normalize returned data shapes.
5. Register new route files in `src/server.js`.

## Best Practices

- Keep files focused and single-purpose
- Follow the established directory structure
- Create new directories only when functionality doesn't fit existing categories
- Use meaningful file names that describe their purpose
- Keep related files close together in the directory structure
- Keep controllers thin and move database logic into providers.
- Prefer repository methods over direct provider imports in controllers.
- Keep SQL parameterized to prevent injection vulnerabilities.
- Ensure response shapes stay stable for frontend consumers.
- Add migration SQL scripts when schema changes are introduced.

## Related Pages

- [Getting Started](./getting-started)
- [Development Guide](./development)
- [Deployment Guide](./deployment)
