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
├── public/                # Static assets served at the root path 
├── src/                   # Source code
│   ├── assets/            # Static media (images, icons)
│   ├── common/            # Shared React resources
│   │   ├── components/    # Reusable UI categorized by type
│   │   ├── contexts/      # Global state and contexts
│   │   ├── hooks/         # Custom React hooks
│   │   └── layouts/       # Structural layout wrappers
│   ├── pages/             # Route-specific page components
│   ├── utils/             # Global utility functions
│   ├── App.css            # Global styles
│   ├── App.jsx            # Root component and router
│   ├── firebase-config.js # Firebase initialization
│   ├── index.css          # Tailwind/base style imports
│   └── main.jsx           # React DOM rendering entry point
└── README.md              # Documentation
```

## Core Directories

### `src/` Directory

The source directory contains all application code, organized into specific subdirectories based on functionality.

### `assets/`

Contains static files that are not code.

- `icons/`: SVG icon files used throughout the application.
- Images, fonts, and other media files.
- Global branding icons/images (logos, backgrounds, login icons).

### `common/`

Houses shared resources used across multiple pages:

- `components/`: Reusable React components.
  - `atoms/`: Smallest UI elements (base buttons, inputs).
  - `cards/`: UI cards for displaying content (audit log, proposal entries).
  - `filters/`: UI elements for filtering data.
  - `form/`: UI elements for submission forms.
  - `layout/`: UI layout blocks (footer).
  - `modals/`: UI popup dialogs (proposal modal).
  - `navigation/`: Headers, footers, NavBar.
  - `routes/`: Shared routing components (protected routes).
  - `users/`: UI for user list.
  - `utils/`: Helper wrappers (scroll top).
- `contexts/`: React context providers and consumers.
- `hooks/`: Custom React hooks.
- `layouts/`: Page layout components for routing.

### `pages/`

Contains components and logic for each unique page or set of related pages:

- `account/`: User account-related pages (login, signup, profile).
- `audit-log/`: Admin table view audit log for tracking website activity.
- `browse/`: The public feed with submitted project ideas.
- `dashboard/`: Admin data dashboard containing metrics.
- `home/`: Landing page.
- `not-found/`: 404 error page
- `submit/`: The form where users submit new proposals.

### Root Files

- `App.jsx`: Application entry point, contains:
  - Global context providers.
  - Routing configuration.
  - Top-level layout.
- `App.css`: Global stylesheet.
- `firebase-config.js`: Initializes Firebase SDK and exports authentication instance.
- `vite.config.js`: Configures development server, pligins, and build processes.

## Protected Files

The following files should not be modified directly:

```bash
├── .vscode/          # VSCode settings
├── build/            # Production build output
├── .env              # Store environment keys
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
