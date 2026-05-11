---
id: installation
title: Installation
sidebar_position: 2
---

# Installation and Setup Guide

This guide will walk you through the process of setting up the DISC Workshop Series Website locally for development.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (LTS version 18.x or later)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A code editor (we recommend VS Code)

## System Requirements

- **Operating System**: Windows 10+, macOS, or Linux
- **Memory**: 4GB RAM minimum (8GB recommended)
- **Disk Space**: At least 1GB of free space
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## Installation Steps

### 1. Clone the Repository

First, clone the project repository from GitHub:

```bash
git clone https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website.git
cd disc-fall-2024-workshop-series-website
```

### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

Or if you prefer using yarn:

```bash
yarn install
```

### 3. Start Development Server

Start the local development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The website should now be running at `http://localhost:3000`

## Verification

After installation, verify that everything is working correctly:

1. Open your browser and navigate to `http://localhost:3000`
2. Verify that the home page loads correctly
3. Check that navigation works
4. Confirm that MDX content renders properly

## Common Issues and Solutions

### Build Errors

If you encounter build errors:

1. Clear your node_modules and reinstall:

```bash
rm -rf node_modules
npm install
```

2. Clear Next.js cache:

```bash
rm -rf .next
```

### Port Already in Use

If port 3000 is already in use:

1. Kill the process using the port:

```bash
lsof -i :3000
kill -9 <PID>
```

2. Or start the server on a different port:

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

If you see TypeScript errors:

1. Ensure TypeScript is installed:

```bash
npm install typescript @types/react @types/node --save-dev
```

2. Reset TypeScript configuration:

```bash
rm -rf tsconfig.json
npm run dev
```

## Development Tools

We recommend installing these tools for better development experience:

- **VS Code Extensions**:

  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - MDX
  - GitHub Copilot (optional)

- **Browser Extensions**:
  - React Developer Tools
  - Redux DevTools (if using Redux)

## Next Steps

Now that you have the project set up locally, you can:

1. Review the [Project Structure](/workshop-series/project-structure) documentation
2. Learn about [how to quickly start working on our project](/workshop-series/quick-start)
3. Check out our [Contributing Guidelines](/workshop-series/contributing)

## Need Help?

If you encounter any issues during installation:

- Create an issue on GitHub
- Reach out to the development team:
  - [Ethan Pineda](mailto:ethanpineda2025@u.northwestern.edu)
