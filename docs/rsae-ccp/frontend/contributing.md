---
id: contributing
title: Contributing Guide
sidebar_position: 6
---

# Contributing

This guide will help you contribute to the frontend project effectively.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork:

```bash
git clone https://github.com/your-username/disc-website.git
cd disc-website
```

3. Install dependencies:

```bash
npm install
```

4. Read the `README.md` file and follow the instructions in there
   to set up Prettier and ESLint

## Development Process

1. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following our [coding standards](#coding-standards)

3. Test and lint your changes:

```bash
npm test
npm run lint
npm run format:check
```

4. Submit a pull request

## Branch Protection Rules

The `main` branch is protected with the following rules:

* All PRs must be reviewed by at least one code owner
* All CI/CD checks must pass before merging
* Direct pushes to `main` are not allowed

## Code Owners

The following maintainers are responsible for reviewing changes:

```bash
# Default owners for all files
* @ethanpaneraa @amyzliao @aanandp123
```

All pull requests must be approved by at least one code owner before merging.

## Coding Standards

### File Organization

* Place new components in appropriate directories under `src/`
* Keep files focused and single-purpose
* Follow the established project structure

### Component Guidelines

* Use `.jsx` extension for files containing JSX
* Define PropTypes for all props
* Keep components modular and reusable
* Write meaningful comments for complex logic

### Code Style

See the `README.md` file in the frontend project code for more details.

* Follow ESLint and Prettier configurations
* Use proper import ordering:
  1. React imports
  2. Third-party modules
  3. Absolute paths from `src/`
  4. Relative paths
* Use meaningful variable and function names
* Write clear, concise comments

## Pull Request Guidelines

### PR Title Format

Use clear, descriptive titles that explain the change:

```bash
feat: add user profile component
fix: resolve navigation bug
docs: update installation guide
style: improve button styling
```

### PR Description

The repository includes a PR template that will automatically populate when you create a new PR. The template helps ensure all necessary information is included:

```markdown
# Pull Request Template

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] Any dependent changes have been merged and published
```

Fill out all sections of the template to help reviewers understand and evaluate your changes effectively.

### Review Process

1. Submit your PR
2. Wait for CI checks to complete
3. Address any automated feedback
4. Request review from code owners
5. Address review feedback
6. Wait for approval and merge

## Common Issues

1. Failed CI Checks

   - Run linting locally before pushing
   - Check file extensions match content
   - Verify import order
   - Ensure all tests pass

2. Code Style

   - Run Prettier before committing
   - Follow ESLint rules
   - Use consistent naming conventions

3. Missing Documentation
   - Update relevant docs
   - Include inline comments
   - Add PropTypes definitions

## Getting Help

* Join our [Discord](https://discord.gg/mqRQ7s9CyS)
* Check existing [issues](https://github.com/DISC-NU/disc-website/issues)
* Ask questions in your pull request
* Reach out to code owners for guidance

## Additional Resources

* [Project Structure](./project-structure.md)
* [Development Guide](./development.md)
* [React Documentation](https://reactjs.org/)
* [ESLint Documentation](https://eslint.org/)
* [Prettier Documentation](https://prettier.io/)

## Next Steps

After your first contribution:

* Review our [Deployment Guide](./deployment.md)
* Check out open issues for more ways to help
* Help review other PRs
* Share feedback for improvement
