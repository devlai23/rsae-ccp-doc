---
id: contributing
title: Contributing Guide
sidebar_position: 6
---

# Contributing Guide

This guide explains how to contribute to the backend template project.

## Getting Started

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/backend.git
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/disc-template/backend.git
```

## Development Workflow

### 1. Create a Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:

- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `refactor/` - for code refactoring

### 2. Make Changes

- Follow the code style guide
- Write meaningful commit messages
- Keep changes focused and atomic

### 3. Code Standards

- Use ESLint and Prettier for formatting
- Follow existing patterns and conventions
- Add comments for complex logic
- Update documentation as needed

### 4. Testing

Before submitting:

- Run all tests: `npm test`
- Run linting: `npm run lint`
- Test your changes locally

### 5. Commit Messages

Follow conventional commits:

```
feat: add new authentication endpoint
fix: resolve CORS issue with cookies
docs: update API documentation
refactor: improve error handling
```

### 6. Create Pull Request

1. Push your changes:

```bash
git push origin feature/your-feature-name
```

2. Create a PR on GitHub
3. Fill out the PR template
4. Request review from CODEOWNERS

## Pull Request Guidelines

Your PR should:

- Have a clear title and description
- Include relevant issue numbers
- Pass all CI/CD checks
- Be scoped to one change/feature
- Include tests if applicable
- Update documentation if needed

## Code Review Process

1. CODEOWNERS will review your PR
2. Address any requested changes
3. Once approved, maintainers will merge
4. Delete your branch after merging

## Important Notes

### Protected Branches

- Direct pushes to `main` are blocked
- All changes must go through PR
- PR requires review from CODEOWNERS

### Repository Maintenance

- Keep your fork updated:

```bash
git fetch upstream
git rebase upstream/main
```

### Getting Help

If you need help:

1. Check existing issues and documentation
2. Ask questions in PR or issue comments
3. Join the DISC Discord for support

## Best Practices

### DO

- Keep changes small and focused
- Test thoroughly
- Update documentation
- Follow code style guidelines
- Ask for help when needed

### DON'T

- Break existing functionality
- Skip tests or linting
- Submit large, unfocused changes
- Ignore review feedback

## Questions or Issues?

- Create an issue in the repository
- Ask in Discord
- Email disc@u.northwestern.edu
