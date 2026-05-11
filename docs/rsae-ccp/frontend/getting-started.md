---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) version 18.0 or higher
- [Git](https://git-scm.com/) for version control
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))
- NPM (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/disc-template/frontend.git
cd frontend
```

2. Install dependencies:

```bash
npm i
```

## Development Environment Setup

### Code Editor Configuration

We strongly recommend using Visual Studio Code with the following extensions:

1. [Prettier ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
2. [ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

After installing the extensions:

1. Restart VSCode completely (quit app and reopen)
2. The project's `.vscode` settings will automatically enable format-on-save

### Code Formatting Setup

Our project uses ESLint and Prettier for consistent code formatting. The configuration is already set up in:

- `eslint.config.mjs`
- `.prettierrc.json`

All code must follow these formatting rules:

- JSX must be in `.jsx` files only
- Single quotes for strings
- Semicolons required
- 80 character line width
- 2-space indentation
- Structured import ordering (see [Development Guide](./development.md) for details)

## Running the Application

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Additional Scripts

Run tests:

```bash
npm test
```

Create production build:

```bash
npm run build
```

## Project Structure Overview

```
├── public          # Static files
├── src
│   ├── assets     # Icons, images, etc.
│   ├── common     # Shared components and utilities
│   ├── pages      # Page components
│   ├── App.css    # Global styles
│   └── App.jsx    # Root component
└── README.md      # Project documentation
```

See [Project Structure](./project-structure.md) for detailed information.

## Next Steps

- Review the [Project Structure](./project-structure.md)
- Read the [Development Guide](./development.md)
- Check the [Contributing Guidelines](./contributing.md)
- Learn about [Deployment](./deployment.md)
