---
id: website-layout
title: Frontend/Website Layout
sidebar_position: 3
---

# Website Layout Guide
Our crowdsourcing platform uses one top-level layout for every page: header, main content, then footer. Login state picks the header (`UserHeader` vs `AdminHeader`); route guards in `ProtectedRoutes.jsx` control which pages are reachable.

## NavLayout

`NavLayout` (`src/common/layouts/NavLayout.jsx`) is the shared wrapper for all pages. It is registered as the parent route in `src/App.jsx`, so every route renders inside it.

```bash
NavLayout
├── Header (UserHeader or AdminHeader)
├── <main> → <Outlet />   
└── SiteFooter
```

`NavLayout` checks `UserContext` and picks one header:

- **Guest (not signed in):** `UserHeader` — Home, Browse Ideas, Submit Proposal  
  (`src/common/components/navigation/UserHeader.jsx`)
- **Admin (signed in):** `AdminHeader` — Home, Browse Ideas, Dashboard, Audit Log, and logout  
  (`src/common/components/navigation/AdminHeader.jsx`)


The middle section shows whichever page matches the URL. React Router renders it through `<Outlet />`.

`SiteFooter` (`src/common/components/layout/SiteFooter.jsx`) appears on every page. It shows RSAE branding and contact info. Guests also see **RSAE Admin Login**, which links to `/login`.

## Routes and Access

All routes are defined in `src/App.jsx` and nested under `NavLayout`. They fall into three groups:

| Group | Guard | Behavior |
| ----- | ----- | -------- |
| Standard | — | Anyone can visit (`/`, `/browse`, `/submit`) |
| Private | `PrivateRoute` | Admins only; everyone else is sent to `/login` (`/dashboard`, `/audit-log`) |
| Public only | `PublicOnlyRoute` | Admin login at `/login` (Google sign-in); signed-in admins are sent to `/` |


## Key Files

| File | Purpose |
| ---- | ------- |
| `src/common/layouts/NavLayout.jsx` | Header, main content area, and footer |
| `src/App.jsx` | Route definitions |
| `src/common/components/routes/ProtectedRoutes.jsx` | `PrivateRoute` and `PublicOnlyRoute` guards |
| `src/common/contexts/UserContext.jsx` | Tracks whether an admin is signed in |
| `src/common/components/navigation/UserHeader.jsx` | Header for guests |
| `src/common/components/navigation/AdminHeader.jsx` | Header for signed-in admins |
| `src/common/components/layout/SiteFooter.jsx` | Shared footer |

See [Frontend Project Structure](./project-structure.md) for folder conventions.
