---
id: deployment
title: Deployment Guide
sidebar_position: 5
---

# Deploying the Backend

The backend is a long-running Express server and works best on platforms that support persistent Node.js services (AWS ECS / EC2).

## Prerequisites
- Access to backend repository and deployment platform
- Firebase project and service account JSON key
- MySQL database (AWS RDS recommended)

## Environment Variables

Set these in your host dashboard (`.env` file or platform secrets):

```env
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
PORT=5050
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
FRONTEND_URL_DEV=http://localhost:5173
API_URL=https://your-backend-domain.com
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
FIREBASE_BYPASS_AUTH=false
```

Also provide a production `rds-config.ini` in the backend root (or via secure file mount) because `src/config/database.js` reads this file at startup.

Example `rds-config.ini`:

```ini
[rds]
endpoint = your-rds-endpoint.region.rds.amazonaws.com
port_number = 3306
region_name = us-east-1
user_name = your_username
user_pwd = your_password
db_name = your_database_name
```

## Database Preparation

Before first production deploy, run schema migrations:

```bash
mysql -h <endpoint> -u <user> -p <database> < sql/create_tables_mysql.sql
```

For existing databases, apply additional migration files in `sql/` as needed.

## Deployment Process

1. Connect your repository to your hosting platform.
2. Set runtime to Node.js 18+.
3. Set install command: `npm install`.
4. Set start command: `node src/server.js`.
5. Add all environment variables and `rds-config.ini`.
6. Deploy and wait for successful startup logs.

### Automatic Deployments

- Each push to `main` triggers a production deployment
- Pull requests create preview deployments
- Failed builds prevent merging to main

### Monitoring

- Monitor process logs for startup and DB connection failures.
- Add uptime checks against `/health`.
- Track API error rates by endpoint.
- Review deployment status in GitHub checks.

### Troubleshooting

Common deployment issues:

- Missing or malformed `FIREBASE_SERVICE_ACCOUNT_KEY`
- Missing `rds-config.ini` in deployment filesystem
- Incorrect DB endpoint/network security groups
- `FRONTEND_URL` mismatch causing CORS errors
- Wrong start command (must run `src/server.js`)

## Resources

- [AWS RDS Documentation](https://aws.amazon.com/rds/)
- [Firebase Admin Setup](https://firebase.google.com/docs/admin/setup)
