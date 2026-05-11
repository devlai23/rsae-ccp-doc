---
id: development
title: Development Guide
sidebar_position: 4
---

# Backend Development Guide

Learn how to develop, test, and deploy the backend service for the DISCover Program template.

## Overview

The backend service is built with:

- Express.js for the web server
- Supabase for database and authentication
- Cookie-based session management
- CORS protection for secure client communication

## Project Setup

### Environment Variables

Create a `.env` file with the following variables:

```bash
FRONTEND_URL=your_DEPLOYED_frontend_url_on_vercel
FRONTEND_URL_DEV=localhost:3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
PORT=3000
API_URL=http://localhost:5050
NODE_ENV=development
```

### Authentication Flow

The backend handles these auth routes:

```javascript
POST / auth / signup; // Create new user account
POST / auth / login; // Log in existing user
POST / auth / logout; // Log out user
GET / auth / verify; // Verify email after signup
GET / auth / me; // Get current user details
GET / auth / users; // Get all users (protected route)
GET / auth / google; // Initiate Google OAuth
GET / auth / callback; // Handle OAuth callback
POST / auth / callback; // Process OAuth tokens
```

### Session Management

- Sessions are managed using HTTP-only cookies
- The `authMiddleware` validates sessions by:
  1. Checking for authorization header or cookie
  2. Validating token with Supabase
  3. Attaching user data to request

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

Run tests:

```bash
npm test
```

### Error Handling

Use consistent error responses:

```javascript
// 400 Bad Request
res.status(400).json({
  error: "Specific error message",
});

// 401 Unauthorized
res.status(401).json({
  error: "Authentication failed",
});

// 500 Server Error
res.status(500).json({
  error: "Internal server error",
});
```

### Common Issues

1. CORS errors

   - Check `FRONTEND_URL` in `.env`
   - Ensure credentials are enabled

2. Auth errors

   - Verify Supabase keys
   - Check cookie settings
   - Validate token format

3. Database errors
   - Confirm Supabase connection
   - Check table permissions
   - Validate query syntax

## Deployment

1. Set production environment variables
2. Build the application:

```bash
npm run build
```

3. Start production server:

```bash
npm start
```

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [Project Repository](https://github.com/disc-template/backend)
