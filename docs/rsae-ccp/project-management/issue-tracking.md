---
id: issue-tracking
title: Issue Tracking Guide
sidebar_position: 3
---

# Issue Tracking with GitHub Projects

## Overview

:::info
This guide explains how to use GitHub Projects for managing your team's tasks and issues. Proper issue tracking is crucial for project organization and team coordination.

_Every team member should be actively involved in creating, updating, and managing issues._
:::

## Setting Up Your Project Board

GitHub Projects provides a flexible way to organize and track your team's work. Here's how to get started:

### Creating Your Board

1. Navigate to your repository
2. Click on "Projects" in the top navigation
3. Select "New project"
4. Choose a template (Table or Board view recommended)
5. Name your project meaningfully (e.g., "Team Development Board")

### Basic Board Structure

Your board should have these essential columns:

- **Backlog**: New and upcoming work
- **To Do**: Tasks planned for current sprint
- **In Progress**: Active work
- **Review**: Items needing review
- **Done**: Completed work

:::tip
Start simple with these basic columns. You can always add more complexity later as your team's needs evolve.
:::

## Creating and Managing Issues

### Writing Good Issues

Every issue should clearly communicate what needs to be done. Here's a standard format:

```markdown
Title: [Feature/Bug/Task] Brief, descriptive title

Description:
Clear explanation of what needs to be done and why

Acceptance Criteria:

- [ ] Specific requirement 1
- [ ] Specific requirement 2
- [ ] Specific requirement 3

Additional Context:

- Design links (if applicable)
- Technical considerations
- Dependencies
```

:::warning
**Always** include acceptance criteria in your issues. This helps prevent confusion and ensures everyone understands when a task is complete.
:::

### Essential Issue Labels

Use these standard labels to categorize your work:

- `bug`: Something isn't working
- `feature`: New functionality
- `enhancement`: Improvements to existing features
- `documentation`: Documentation updates
- `blocked`: Issues that cannot proceed
- `priority`: High-priority items

## Daily Workflow

### Managing Your Board

1. Update issue status daily:

   - Move cards to appropriate columns
   - Add progress comments
   - Link related PRs
   - Update assignees

2. Use keyboard shortcuts for efficiency:
   - `#` to reference issues
   - `@` to mention team members
   - `[` to add labels

:::note
Regular updates are crucial. Your board should always reflect the current state of your project.
:::

### Sprint Planning

When planning your sprint:

1. Move relevant items from Backlog to To Do
2. Assign team members to tasks
3. Set clear priorities
4. Ensure issues have acceptance criteria

### Code Review Integration

Connect your issues to your code:

1. Reference issues in PR descriptions using `#`
2. Use "Closes #123" in PRs to auto-close issues
3. Move cards to appropriate columns as work progresses

## Best Practices

1. Write clear, specific issue titles
2. Break large tasks into smaller issues
3. Always include acceptance criteria
4. Keep the board updated daily
5. Link related issues and PRs
6. Document important decisions in comments

:::note
Remember: A well-maintained issue board makes planning easier and helps everyone stay aligned on project progress.
:::

## Common Questions

### Issue Organization

Q: How should we organize large features?
A: Use parent issues with checklists, then create linked child issues for each component.

Q: How detailed should issues be?
A: Detailed enough that any team member can understand and work on them.

### Views and Filtering

You can create different views based on:

- Assignee
- Label
- Status
- Milestone

:::tip
Save custom views for common filters you use frequently!
:::

## Getting Started

1. Create your team's project board today
2. Set up the basic columns
3. Create a few sample issues
4. Practice daily updates
5. Review and adjust your process after one week

:::note
Don't worry about getting everything perfect immediately. Start with the basics and refine your process as you learn what works best for your team.
:::
