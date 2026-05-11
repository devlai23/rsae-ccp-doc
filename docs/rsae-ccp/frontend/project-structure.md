---
id: project-structure
title: Frontend Project Structure
sidebar_position: 2
---

# Frontend Project Structure

The frontend template follows a modular React architecture designed for scalability and maintainability. This document explains the organization of the project and the purpose of each directory.

## Directory Overview

```bash
frontend/
├── public/           # Static files
├── src/             # Source code
│   ├── assets/      # Static assets
│   │   └── icons/   # SVG icons
│   ├── common/      # Shared resources
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   └── utils/
│   ├── pages/       # Page components
│   │   ├── account/
│   │   ├── home/
│   │   └── not-found/
│   ├── App.css      # Global styles
│   └── App.jsx      # Root component
└── README.md        # Documentation
```

## Core Directories

### `src/` Directory

The source directory contains all application code, organized into specific subdirectories based on functionality.

### `assets/`

Contains static files that are not code. You will create this folder:

- `icons/`: SVG icon files used throughout the application
- Images, fonts, and other media files

### `common/`

Houses shared resources used across multiple pages:

- `components/`: Reusable React components
- `contexts/`: React context providers and consumers
- `hooks/`: Custom React hooks
- `layouts/`: Page layout components for routing
- `utils/`: Helper functions and utilities

### `pages/`

Contains components and logic for each unique page or set of related pages:

- `account/`: User account-related pages (login, signup, profile)
- `home/`: Homepage components
- `not-found/`: 404 error page

### Root Files

- `App.jsx`: Application entry point, contains:
  - Global context providers
  - Routing configuration
  - Top-level layout
- `App.css`: Global stylesheet

## Protected Files

The following files should not be modified directly:

```bash
├── .vscode/           # VSCode settings
├── build/            # Production build output
├── node_modules/     # Project dependencies
├── eslint.config.mjs # Linting configuration
├── jsconfig.json     # JS compilation settings
├── package-lock.json # Dependency lock file
└── package.json      # Project metadata
```

These files are essential for project configuration:

- `.vscode/`: Editor-specific settings (e.g., format on save)
- `build/`: Generated during production builds
- `node_modules/`: Managed by npm
- Configuration files: Maintain consistent code style and behavior

## Adding New Features

When adding new features to the frontend:

1. Create a new directory in `pages/` for page-specific components
2. Add shared components to `common/components/`
3. Create custom hooks in `common/hooks/` if needed
4. Add new contexts in `common/contexts/` for state management
5. Update routing in `App.jsx`

## Component Organization

Each component should:

- Have its own directory if it has associated files
- Use `.jsx` extension if it contains JSX
- Include any component-specific styles, tests, or utilities
- Define PropTypes for all props

Example component structure:

```bash
ComponentName/
├── index.jsx         # Main component file
├── styles.js         # Styled components
├── utils.js          # Component-specific utilities
└── ComponentName.test.jsx
```

## Best Practices

- Keep components focused and single-purpose
- Follow the established directory structure
- Use absolute imports from `src/` directory
- Group imports according to the specified order:
  1. React imports
  2. Third-party modules
  3. Absolute paths from `src/`
  4. Relative paths
- Maintain consistent code formatting using provided ESLint and Prettier configs

## Dependencies

The project uses several key dependencies:

- [React Router DOM](https://reactrouter.com/) for routing
- [styled-components](https://styled-components.com/) for styling
- [prop-types](https://www.npmjs.com/package/prop-types) for type checking
- Prettier and ESLint for code formatting

These dependencies are pre-configured for the DISCover Program's needs and ensure consistency across all projects.
