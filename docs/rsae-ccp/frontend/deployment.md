---
id: deployment
title: Deployment Guide
sidebar_position: 5
---

# Deploying the Frontend

The frontend application is deployed on Vercel for optimal performance and seamless continuous deployment.

## Vercel Deployment

### Prerequisites

- A Vercel account
- Access to the project repository
- Environment variables ready

### Environment Variables

Configure this environment variable in your Vercel project settings:

```bash
VITE_API_URL=your_backend_api_url
```

Note: All environment variables in React must be prefixed with `REACT_APP_` to be accessible in the application.

### Deployment Process

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React application
3. Configure your environment variable in the Vercel dashboard
4. Deploy!

### Automatic Deployments

- Pushes to `main` trigger production deployments
- Pull requests create preview deployments
- Failed builds block merging to main

### Monitoring

- View deployment logs in Vercel dashboard
- Monitor application performance with Vercel Analytics
- Track build status in GitHub Actions

### Troubleshooting

Common deployment issues:

1. Environment Variables

   - Missing `VITE_` prefix
   - Incorrect API URL format
   - Environment variables not set in Vercel

2. Build Failures

   - Dependency installation errors
   - Linting/formatting violations
   - Invalid JSX file extensions

3. Runtime Issues
   - CORS configuration
   - API connectivity problems
   - Asset loading errors

### Rolling Back

To revert to a previous version:

1. Go to your project on Vercel
2. Navigate to Deployments
3. Locate the desired previous deployment
4. Click "Promote to Production"

## Production Optimization

1. Build Command

```bash
npm run build
```

2. Output

- Creates optimized production build in `build/`
- Minifies all JavaScript and CSS
- Optimizes static assets

3. Performance Considerations

- Enable gzip compression
- Implement code splitting
- Optimize asset loading
- Configure proper caching headers

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Frontend Repository](https://github.com/disc-template/frontend)
