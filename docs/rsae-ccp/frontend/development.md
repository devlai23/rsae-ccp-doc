---
id: development
title: Development Guide
sidebar_position: 4
---

# Frontend Development Guide

Learn how to develop, test, and maintain the frontend application for the DISCover Program template.

## Overview

The frontend application is built with:

- React for UI components
- React Router for client-side routing
- styled-components for styling
- ESLint and Prettier for code formatting
- PropTypes for type checking

## Development Environment

### Code Editor Setup

1. Install VSCode extensions:

```bash
- Prettier ESLint
- ESLint
```

2. Configure VSCode settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
}
```

### Code Formatting Rules

Our ESLint and Prettier configurations enforce:

1. JSX Rules:

   - Only `.jsx` files can contain JSX
   - All `.jsx` files must contain JSX
   - Empty files are allowed

2. Syntax Rules:

   - Semicolons required
   - Single quotes for strings
   - 80 character line width
   - 2-space indentation

3. Import Organization:

   ```javascript
   // 1. React imports
   import React from "react";
   import { useState } from "react";

   // 2. Third-party modules
   import styled from "styled-components";
   import PropTypes from "prop-types";

   // 3. Absolute paths from src/
   import { useAuth } from "common/hooks/useAuth";
   import Button from "common/components/Button";

   // 4. Relative paths
   import { StyledContainer } from "./styles";
   ```

## Component Development

### Component Structure

Create components following this template:

```jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledComponent = styled.div`
  // styles
`;

const ComponentName = ({ prop1, prop2 }) => {
  return <StyledComponent>{/* component content */}</StyledComponent>;
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

ComponentName.defaultProps = {
  prop2: 0,
};

export default ComponentName;
```

### Styling Guidelines

1. Use styled-components for component styling:

```jsx
const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  // ...
`;
```

2. Global styles go in `App.css`
3. Use semantic HTML elements
4. Maintain responsive design principles

### State Management

1. Local State:

```jsx
const [count, setCount] = useState(0);
```

2. Context for shared state:

```jsx
// In context file
export const ThemeContext = React.createContext();

// In component
const theme = useContext(ThemeContext);
```

3. Custom hooks for reusable logic:

```jsx
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
```

## Development Process

### Git Workflow

1. Create feature branch:

```bash
git checkout -b feature/your-feature
```

2. Review and stage changes:

```bash
# Recommended: Review changes in chunks with -p flag
git add -p  # This lets you review each change individually

# Alternative: Stage all changes
git add .
```

The `-p` (or `--patch`) flag is highly recommended as it:

- Helps you review your own code before committing
- Allows you to stage specific parts of files
- Reduces accidental commits of debugging code
- Makes for cleaner, more focused commits

3. Commit your changes:

```bash
git commit -m "feat: description of changes"
```

4. Push and create PR:

```bash
git push origin feature/your-feature
```

### Running the Application

Development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

### Common Issues

1. Styling Issues

   - Check styled-components syntax
   - Verify component class names
   - Inspect CSS specificity

2. Routing Problems

   - Confirm route definitions
   - Check navigation props
   - Verify path parameters

3. State Management
   - Debug React DevTools
   - Check context providers
   - Verify state updates

## Best Practices

1. Component Guidelines:

   - Keep components focused and single-purpose
   - Use PropTypes for all props
   - Implement error boundaries
   - Memoize expensive computations

2. Performance Tips:

   - Lazy load routes
   - Use React.memo for pure components
   - Optimize re-renders
   - Monitor bundle size

3. Code Organization:
   - Follow directory structure
   - Use meaningful file names
   - Keep related files together
   - Document complex logic

## Resources

- [React Documentation](https://reactjs.org/)
- [styled-components Documentation](https://styled-components.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Project Repository](https://github.com/disc-template/frontend)
