---
id: features
title: Frontend Features
sidebar_position: 5
---

# Frontend Features

## Features

This page documents the main frontend features in `rsae-ccp-fe`. Most features are page-scoped and live under `src/pages`, while shared building blocks live under `src/common/`.

The app uses one top-level layout (`NavLayout`) and route groups in `src/App.jsx`:

- Standard routes: `/`, `/browse`, `/submit`
- Private routes (admin only): `/dashboard`, `/audit-log`
- Public-only routes: `/login`, `/signup`, `/forgot-password`
- Additional auth routes: `/auth/callback`, `/auth/reset-password`

### Account (`src/pages/account/`)

Authentication and account recovery flows are implemented here. Admin access is Google-based.

- `Login.jsx`: Admin portal login screen with Google sign-in.
- `AuthCallback.jsx`: Handles Firebase redirect sign-in completion and backend token exchange (`POST /auth/token`).
- `RequestPasswordReset.jsx`: Sends Firebase password reset emails.
- `ResetPassword.jsx`: Applies password reset token (`oobCode`) and updates password.
- `SignUp.jsx`: Redirect-only page; currently forwards users to `/login`.
- `EmailVerification.jsx`: Email verification status screen (present in code, not currently routed in `App.jsx`).
- `styles.js`: Shared styled-components helpers for account pages.

### Home (`src/pages/home/`)

Public landing experience for residents.

- `Home.jsx`: Hero section, actions (submit/browse), stats strip, and submission success toast.
- `HowItWorks.jsx`: Four-step explainer section embedded on the home page.

### Browse Ideas (`src/pages/browse/`)

Main proposal feed and details workflow.

- `BrowseIdeas.jsx`: Loads proposals from backend, supports search/filter/sort, opens full details modal, and handles support voting.
- Admins can view all statuses (`pending`, `approved`, `rejected`), while public users only see approved ideas.
- Uses backend endpoints such as `/proposals`, `/proposals/:id`, `/proposals/:id/vote`, and `/proposals/tags`.

### Submit (`src/pages/submit/`)

Public proposal submission form.

- `SubmissionForm.jsx`: Validates form fields client-side and submits `POST /proposals`.
- Captures proposal metadata plus internal contact information and returns users to the home page with a success toast state.

### Dashboard (`src/pages/dashboard/`)

Admin-only metrics and moderation surface.

- `DataDashboard.jsx`: Loads high-level cards (`/dashboard/metrics`), category distribution (`/dashboard/categories`), and proposal table (`/proposals`).
- Allows accepting/rejecting pending proposals via `PUT /proposals/:id/status`.

### Audit Log (`src/pages/audit-log/`)

Admin-only activity tracking.

- `AuditLog.jsx`: Fetches and filters audit logs from `/audit-logs` by category and date range presets.
- Uses `AuditLogEntry` cards to present human-readable activity rows.

### Not Found (`src/pages/not-found/`)

- `NotFound.jsx`: Fallback for unmatched routes.

### Shared Feature Modules (`src/common/`)

These are reused by multiple feature pages and hold core behavior.

- `contexts/UserContext.jsx`: Central auth/session state, Firebase login/logout, Google auth flow, and backend profile sync.
- `components/routes/ProtectedRoutes.jsx`: Route guards (`PrivateRoute`, `PublicOnlyRoute`).
- `layouts/NavLayout.jsx`: Global shell selecting `UserHeader` vs `AdminHeader`, then rendering `<Outlet />` and `SiteFooter`.
- `components/navigation/`: Header and logout modal flows.
- `components/cards/ProposalEntry.jsx`: Proposal summary row with support action.
- `components/modals/ProposalModal.jsx`: Proposal detail modal with comments, posting, and admin delete capabilities.
- `components/cards/AuditLogEntry.jsx`: Reusable audit log card UI.

## Adding New Features

When adding frontend features, keep page-specific logic inside `src/pages/` and promote code to `src/common/` only when it is truly reused.

### Creating a New Feature

1. Create a new folder under `src/pages/` for the feature.
2. Add a page entry component (for example `MyFeature.jsx`) that follows the existing layout pattern (header/main/footer already provided by `NavLayout`).
3. Register a route in `src/App.jsx` and place it in the correct route group: standard, private, or public-only.
4. If the feature needs authentication/session data, consume `useUser()` from `src/common/contexts/UserContext.jsx`.
5. Add shared UI to `src/common/components/` only if at least one other page needs it.
6. If backend calls are introduced, use `VITE_BACKEND_URL`-based URL builders (consistent with existing pages) and pass auth tokens where required.

### Routing and Access Checklist

Before opening a pull request, verify:

- The route exists in `src/App.jsx`.
- Guarding is correct (`PrivateRoute` for admin-only pages).
- Navigation links are added in the correct header (`UserHeader` or `AdminHeader`) when appropriate.
- The page still renders correctly inside `NavLayout`.

### Data and API Checklist

- Handle loading, empty states, and API error states in the page UI.
- Keep request URLs environment-driven with `VITE_BACKEND_URL`.
- Include Firebase ID token headers on protected endpoints.
- Avoid introducing feature-specific logic into `src/common/` unless reused.

## Additional Links

- [Frontend Project Structure](./project-structure.md)
- [Frontend/Website Layout](./layout.md)
- [Development Guide](./development.md)
