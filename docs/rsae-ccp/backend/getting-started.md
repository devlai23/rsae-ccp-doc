---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) version 18 or higher
- [Git](https://git-scm.com/) for version control
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))
- A [Firebase](https://firebase.google.com/) project with Authentication enabled
- A MySQL-compatible database (AWS RDS MySQL recommended for this repo)

## Installation

0. Setup directories

```bash
cd # wherever you want your code to live in, make sure you can easily access this in the future
mkdir disc-template
```

1. Clone the repositories:

```bash
git clone https://github.com/disc-template/frontend.git
git clone https://github.com/disc-template/backend.git
```

2. Install dependencies for the frontend:

```bash
cd frontend
npm i
```

3. Install dependencie for the backend

```bash
cd backend
npm i
```

4. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

5. Create `env` files (in both frontend and backend repos)

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

Notes:

- `FIREBASE_SERVICE_ACCOUNT_KEY` must be the full JSON key on one line.
- `DATABASE_URL` is currently not used by `src/config/database.js`, but keep it populated for portability.
- CORS allows both `FRONTEND_URL` and `FRONTEND_URL_DEV`.

## Configure Database Connection

This backend currently reads MySQL credentials from `rds-config.ini`.

Copy the template:

```bash
cp rds-config.ini.example rds-config.ini
```

Fill in your database values in `rds-config.ini`:

```ini
[rds]
endpoint = your-rds-endpoint.region.rds.amazonaws.com
port_number = 3306
region_name = us-east-2
user_name = your_username
user_pwd = your_password
db_name = your_database_name
```

## Create Database Tables

Run the MySQL schema file against your database:

```bash
mysql -h <endpoint> -u <user> -p <database> < sql/create_tables_mysql.sql
```

If you are using PostgreSQL/Supabase instead, apply `sql/create_tables.sql` and update providers/config accordingly.

## Configure Firebase Admin

In Firebase Console:

1. Open your project and enable Authentication providers (Email/Password and optionally Google).
2. Go to Project Settings -> Service Accounts.
3. Generate a new private key JSON file.
4. Paste the JSON contents into `FIREBASE_SERVICE_ACCOUNT_KEY` in `.env`.

## Run the Backend

Start the server:

```bash
npm run dev
```

Backend server will start at `http://localhost:5050`.


## Development Tools

### Recommended VS Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

### Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier


## Common Setup Issues

1. Firebase initialization fails on boot

- Check that `FIREBASE_SERVICE_ACCOUNT_KEY` is valid JSON and includes `project_id`.

2. Database connection fails on startup

- Verify `rds-config.ini` exists in the backend root and credentials are correct.

3. Browser CORS errors

- Ensure frontend origin exactly matches `FRONTEND_URL` or `FRONTEND_URL_DEV`.

4. Auth-protected routes return 401

- Send `Authorization: Bearer <firebase-id-token>` header.

## Next Step

After setup is complete, continue to the [Backend Development Guide](./development) for workflow, endpoint details, and coding conventions.