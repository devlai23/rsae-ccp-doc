---
id: pull-requests
title: Branch Protections
sidebar_position: 2
---

# Pull Request Review Guide

## Overview

:::info

This guide outlines best practices for writing pull request and reviewing pull requests (PRs) to maintain code quality and promote effective collaboration within your team.

_every member of your team should be both making pull-requests and reviewing PRs_
:::

### Writing PR Descriptions

When writing your PR, you need to make sure that you at least write a description that does the following:

1. States clearly and concisely what your change is. You should also include any links to any relevant issues in your project that are related to this PR. For example, if you PR is implementing authentication, you should link it to the issue for implementing auth.
2. If your PR has any non-trivial implementation details (i.e you needed to modify how something else in the codebase works, or you had to install third-party libraries) then you should also justify _why_ you needed those changes

:::warning

**Do not** just simply install random NPM packages to try and cut corners. Most of the time you don't need a lot of third party packages to do what you're trying to do.

The exception to this being if you need a package for displaying graphs, maps, etc etc.
:::

## Reviewing Pull Requests

If you are assigned to review a pull-requests fro your team, then please follow this guide for reviewing pull-requests for your team.

### Code Quality

As a reviewer, you should be looking at the overall **code quality** of the code that is trying to be committed.

### What is good "code quality?"

What makes code "good quality" is a little bit subjective, but in general, you should be looking for the following things:

1. Does the code follow the project style guidelines? This should be checked by the CI/CD github action workflows that we defined for you. If your team decides to use any other pipelines, then you should ensure that _all_ pipelines are passing before you even begin reviewing the code.
2. Does the code introduce unnecessary complexity? For example:

   - Using nested ternary operators when simple if statements would be clearer
   - Creating complex state management when a simple useState would suffice
   - Over-engineering solutions for simple problems

   ```javascript
   // Bad - Unnecessary complexity
   const isValid = (user) =>
     !!user && !!user.name && user.age
       ? user.age >= 18
         ? true
         : false
       : false;

   // Good - Clear and simple
   const isValid = (user) => {
     if (!user || !user.name) return false;
     return user.age >= 18;
   };
   ```

3. Are functions and variables named clearly and descriptively?

   ```javascript
   // Bad
   const x = data.map((d) => d.v * 2);

   // Good
   const doubledPrices = products.map((product) => product.price * 2);
   ```

4. Is the code properly documented where needed?
   - Complex business logic should have comments explaining the "why"
   - Public APIs should have clear documentation
   - Complex algorithms should be explained
   - Not every line needs a comment, focus on explaining non-obvious decisions

:::note

We understand that for many of you, this will be the first time that you will ever be doing this, so no worries if it takes you some time to get used to this process. In any case, reviewing PRs are **big** portion of software engineering, and so the more you do it, overtime you will get better and faster at it!

:::

### **Implementation Details**

When reviewing a PR, ensure that:

1. The code actually implements what the PR description claims
2. Edge cases are handled appropriately. For example, are the error cases for when the API fails i.e does the code display an error message to the user or was this something that was left out in the original code?
3. Error handling is implemented where necessary (this should have already been defined in your spec sheet regardless)
4. The implementation follows project patterns and best practices. Again, this comes from the formatting and linting pipelines that we've already setup for you.

:::tip
Look for common issues like:

- Unhandled null/undefined cases
- Missing error states in UI components
- Lack of loading states
- Incomplete form validation
- Missing type checks (if using TypeScript)
  :::

### **Security Considerations**

Pay special attention to security-related code:

1. Input validation and sanitization
2. Proper authentication checks
3. Safe handling of sensitive data
4. SQL injection prevention (in backend code)
5. XSS prevention (in frontend code)

:::warning

If you are a project team that is working with HIPPA, this is **especially important for your teams**. If you have any questions about wether your code is safe, you can always refer back to the assigned tech lead for your project

:::

### **Performance**

Consider the performance implications of the changes:

1. Unnecessary re-renders in React components
2. Inefficient database queries
3. Large bundle sizes from new dependencies
4. Proper use of caching where appropriate

:::note

You can optimize for performance later, sometimes it is better to get something pushed and shipped and addressing performance related bottlenecks at a later point. _This doesn't apply if the feature **needs** to be super fast though_

:::

## **Providing Feedback**

### **How to Comment**

1. Be specific and constructive
2. Explain why something should be changed
3. Provide examples where helpful
4. Use a respectful tone

```markdown
// Good comment
Consider using a more descriptive variable name here. Instead of `data`,
maybe `userProfileData` would better indicate what this contains?

// Bad comment
This code is messy, fix it.
```

### **When to Approve**

Approve the PR when:

- All critical issues have been addressed
- Code meets quality standards
- Tests pass (if applicable)
- Documentation is updated

### **When to Request Changes**

Request changes when you see:

- Security vulnerabilities
- Major performance issues
- Broken functionality
- Significant deviation from project standards
- Missing critical tests or documentation

## **Best Practices Summary**

1. Review PRs promptly (within 24 hours if possible)
2. Be thorough but constructive
3. Consider both code quality and functionality
4. Don't approve until all critical issues are resolved
5. Help team members learn and improve through the review process

:::note
Remember: Code review is a collaborative process. So give each other feedback so you can learn and improve faster!

:::
