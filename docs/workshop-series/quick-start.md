---
id: quick-start
sidebar_position: 3
---

# Quick Start Guide

Get started with the DISC Workshop Series Website quickly. This guide focuses on common development tasks and content management.

## Quick Setup

If you haven't installed the project yet, follow our [Installation Guide](/workshop-series/installation).

## Website Structure and Routes

> **Future Improvement Note**: The current routing system requires manual updates to both the routes configuration and file structure. This process should be automated in future versions to reduce manual work and potential errors. Possible improvements include:
>
> - Automatic route generation based on file structure
> - CLI tool for creating new content with proper routing
> - Validation system to ensure route and file structure consistency
> - Dynamic route loading without manual configuration

The website follows a specific routing structure defined in `lib/routes-config.ts`. Here's the main navigation structure:

### Getting Started Section

- Base Path: `/content/getting-started`
- Main Route: `/introduction`

### Workshops Section

- Base Path: `/content/workshops`
- Available Routes:
  1. `/workshop-1` - UI/UX
  2. `/workshop-2` - HTML & CSS
  3. `/workshop-3` - VSCode & Git
  4. `/workshop-4` - React Basics
  5. `/workshop-5` - Better React
  6. `/workshop-6` - Best React
  7. `/workshop-7` - Backend Basics
  8. `/workshop-8` - Complex Backends
  9. `/workshop-9` - Bonus Topics

### Assignments Section

- Base Path: `/content/assignments`
- Available Routes:
  - `/project-overview` - Project Overview
  1. `/assignment-1` - Figma
  2. `/assignment-2` - HTML & CSS
  3. `/assignment-3` - Git
  4. `/assignment-4` - Basic React App
  5. `/assignment-5` - Routing & Fetching
  6. `/assignment-6` - Code Improvements
  7. `/assignment-7` - Basic API
  8. `/assignment-8` - Supabase
  9. `/assignment-9` - Deploy & Bonus Feature

## Working with Content

### Adding New Content

When adding new content, ensure it follows the routing structure defined above. Content should be placed in the corresponding directory under `/contents/`.

Example for a new workshop page:

```
contents/
└── content/
    └── workshops/
        └── workshop-1/
            └── index.mdx
```

### MDX File Structure

```mdx
---
title: "Workshop 1: UI/UX"
description: "Introduction to UI/UX Design Principles"
---

# Workshop Content Here
```

### Route Configuration

The routes are configured using TypeScript interfaces. If you need to add new routes, modify the `ROUTES` array in `lib/routes-config.ts`:

```typescript
export type EachRoute = {
  title: string;
  href: string;
  basePath?: string;
  noLink?: true;
  items?: EachRoute[];
};

// Example of adding a new workshop
const ROUTES: EachRoute[] = [
  {
    title: "Workshops",
    href: "/workshops",
    noLink: true,
    basePath: "content",
    items: [
      { title: "1: UI/UX", href: "/workshop-1" },
      // Add new workshop here
    ],
  },
  // ... other routes
];
```

## Development Workflow

### Creating New Pages

1. Add the route to `lib/routes-config.ts`
2. Create the corresponding directory and `index.mdx` file
3. Add your content using MDX format

Example for adding a new workshop:

1. Add to routes configuration:

```typescript
{
  title: "10: Advanced Topics",
  href: "/workshop-10"
}
```

2. Create content file:

```bash
mkdir -p contents/content/workshops/workshop-10
touch contents/content/workshops/workshop-10/index.mdx
```

3. Add content to `index.mdx`:

```mdx
---
title: "Workshop 10: Advanced Topics"
description: "Advanced development concepts and practices"
---

# Workshop Content
```

### Using Components in MDX

Import and use components in your MDX files:

```mdx
import MyComponent from "@/components/MyComponent";

<MyComponent />
```

### Common MDX Components Available

- `Note`: For important callouts
- `ImageComponent`: For optimized images
- `CodeBlock`: For code snippets with syntax highlighting
- `Stepper`: For step-by-step guides

Example usage:

```mdx
<Note type="info">Important information here</Note>

<CodeBlock language="typescript">const example = "Hello World";</CodeBlock>
```

## Content Guidelines

### Workshop Content Structure

1. Introduction/Overview
2. Learning Objectives
3. Prerequisites
4. Main Content
5. Practice Exercises
6. Additional Resources

### Assignment Structure

1. Assignment Overview
2. Requirements
3. Submission Guidelines
4. Grading Criteria
5. Resources/References

## Next Steps

After getting familiar with the basics:

1. Review the complete [Project Structure](/workshop-series/project-structure)
2. Check out our [Contributing Guidelines](/workshop-series/contributing)
