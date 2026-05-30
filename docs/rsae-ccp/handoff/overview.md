---
id: overview
title: Handoff Overview
sidebar_position: 1
---

# Purpose of this Handoff Document

This handoff document gives future RSAE Community Crowdsourcing Platform
developers enough context to continue the project without restarting discovery
from scratch.

Use it as the first stop for understanding:

- what the platform is meant to accomplish;
- what has already been implemented;
- which frontend, backend, and documentation files matter most;
- which follow-up issues should be handled next.

For example, a new developer assigned to secure proposal filtering should be
able to read this handoff section, learn that public proposal visibility is a
known next step, then jump directly to the backend proposal routes and the
frontend browse page instead of reverse-engineering the whole app.

## Statement on Overall Purpose of the RSAE CCP Project

The RSAE Community Crowdsourcing Platform is a web application for collecting,
reviewing, and tracking community proposals from Evanston residents. The project
supports RSAE's community engagement workflow by giving residents a public place
to submit and browse ideas while giving RSAE administrators a protected dashboard
for reviewing submissions and tracking platform activity.

At a high level, the platform is meant to replace scattered proposal intake and
manual review processes with one shared system:

```text
Resident submits idea
        |
        v
Proposal is stored as pending
        |
        v
RSAE admin reviews in dashboard
        |
        v
Approved ideas appear in public browse view
```

The current documentation covers both application repositories:

- `rsae-ccp-fe`: React/Vite frontend for public proposal submission, browsing,
  admin login, dashboards, and audit-log views.
- `rsae-ccp-be`: Express backend for authentication, proposal data, comments,
  votes, dashboard metrics, and audit-log APIs.

## Who This Handoff Is For

This handoff is written for:

- future DISC developers joining the RSAE CCP project;
- RSAE stakeholders who need a plain-language summary of project status;
- tech leads reviewing what still needs to be completed before a client-facing
  release.

## How To Use This Section

Start with [Progress](./progress) to see what already works. Then read
[Next Steps](./next-steps) to choose the next implementation issue. Each next
step names the main frontend, backend, or database files that should be changed.
