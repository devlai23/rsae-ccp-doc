---
id: deployment
title: Deployment Guide
sidebar_position: 5
---

# Deploying the Backend

The backend service is deployed on Vercel for seamless integration with our frontend application.

## Vercel Deployment

### Prerequisites

- A Vercel account
- Access to the project repository
- Your environment variables ready

### Environment Variables

Make sure to set these in your Vercel project settings:

```bash
FRONTEND_URL=your_frontend_url
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
NODE_ENV=production
API_URL=you_api_url
```

### Deployment Process

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Express.js application
3. Configure your environment variables in the Vercel dashboard
4. Deploy!

### Automatic Deployments

- Each push to `main` triggers a production deployment
- Pull requests create preview deployments
- Failed builds prevent merging to main

### Monitoring

- View deployment logs in the Vercel dashboard
- Monitor API endpoints using Vercel Analytics
- Check deployment status in GitHub checks

### Troubleshooting

Common deployment issues:

- Missing environment variables
- Incorrect build settings
- CORS configuration errors

### Rolling Back

To roll back to a previous version:

1. Visit your project on Vercel
2. Go to Deployments
3. Select the desired previous deployment
4. Click "Promote to Production"

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Backend Repository](https://github.com/disc-template/backend)
