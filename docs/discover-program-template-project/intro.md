---
id: intro
title: RSAE Community Compensation Portal
sidebar_position: 1
slug: /
---

# RSAE Community Crowdsourcing Platform

This documentation covers the RSAE Community Crowdsourcing Platform, a web application for collecting, reviewing, and tracking community proposals. The project is split into a frontend application for the user experience and a backend API for authentication, data access, and admin workflows.

## Overview

The portal currently supports a few core flows:

- Community members can submit proposals through the public-facing form
- Visitors can browse submitted ideas
- Logged-in users can access admin-oriented views like the dashboard and audit log
- The backend stores proposal, comment, user, and audit log data in AWS MySQL

At a high level, the frontend handles routing, page rendering, and user interactions, while the backend exposes REST endpoints and connects the app to Firebase authentication and the database.

## Tech Stack

### Frontend

- React
- Vite
- React Router
- styled-components
- Firebase Authentication

### Backend

- Node.js
- Express
- Firebase Admin SDK
- AWS RDS / MySQL

### Documentation

- Docusaurus

## How To Run

To work on the full app locally, run the frontend and backend in separate terminals.

### 1. Start the backend

Open the backend project:

```bash
cd rsae-ccp-be
```

Install dependencies if needed:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

### 2. Start the frontend

Open the frontend project in a second terminal:

```bash
cd rsae-ccp-fe
```

Install dependencies if needed:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

### 3. Verify both apps are running

- The frontend should be available on the Vite dev URL shown in the terminal, usually `http://localhost:5173`
- The backend should be running on the configured API port, commonly `http://localhost:5050`

Make sure both projects have their environment variables configured before starting them.
