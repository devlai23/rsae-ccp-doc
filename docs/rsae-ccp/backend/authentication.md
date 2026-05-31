---
id: authentication
title: Authentication
sidebar_position: 3
---

# Authentication

This page explains **who needs to log in**, **how admin sign-in works**, and **how to give someone admin access**. You do not need to know how the code is built to use the platform.

For initial project setup (Firebase, environment files, and so on), see [Getting Started](../getting-started).

---

## Who needs to log in?

Most people use the site **without an account**.

| Who | Log in required? | What they can do |
|-----|------------------|------------------|
| **Community members** | No | Browse proposals, submit ideas, comment, and support (vote on) proposals |
| **Admins (staff)** | Yes | Review proposals on the dashboard, approve or reject submissions, view the audit log, and manage comments |

There is no public “resident account” today. The login page is for **staff and administrators** only.

---

## How admins sign in

1. Go to the site and click **Login** (or open `/login`).
2. Click **Sign in with Google**.
3. Choose the Google account your team uses for admin access.
4. After a successful sign-in, you are taken to the **Dashboard**.

**Notes:**

- Admin sign-in uses **Google only**. There is no public sign-up form on the site.
- If you just received admin access, **sign out and sign in again** so your permissions update.
- Sessions last about **one hour**. If the dashboard stops working, try signing in again.

---

## What admins can access

After signing in, admins can use:

- **Dashboard** — review proposals, see metrics, approve or reject submissions
- **Audit log** — see a history of important admin actions

Everyone else (without logging in) can still use the public parts of the site: home, browse, submit an idea, read comments, and support proposals.

---

## Giving someone admin access

Admin access is **not** turned on from the website itself. A person with Firebase project access must assign the admin role.

**Typical process:**

1. The new admin **signs in with Google once** on the login page (this creates their account).
2. Someone with developer or Firebase access **grants them the admin role** in Firebase (this is a one-time step done outside the website).
3. The new admin **signs out and signs in again**.
4. They should now see the Dashboard and other admin tools.

To find a user in Firebase:

1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Go to **Authentication** → **Users**.
4. Find the person by email and note their account is listed there.

If you are not sure who can grant admin access on your team, ask your developer or project lead.

---

## Signing out

Use **Logout** from the admin menu (or header when signed in). This ends your session on the site.

Always sign out on shared or public computers.

---

## Supporting a proposal (voting) — not the same as logging in

When someone clicks **Support** on a proposal, that does **not** use a login. The site remembers their browser with a simple cookie so they cannot vote twice on the same proposal. This is separate from admin authentication.

---

## Common issues

| What you see | What to try |
|--------------|-------------|
| Login button does nothing or shows an error | Confirm Firebase is set up for the site (see [Getting Started](../getting-started)). Ask your developer if the problem continues. |
| Google sign-in works but you cannot open the Dashboard | You may not have admin access yet. Ask someone to grant you the admin role, then sign out and sign in again. |
| You had admin access but it stopped working | Sign out and sign in again. If it still fails, your admin role may have been removed — check with your team. |
| Dashboard worked earlier but not now | Your session may have expired. Sign in again. |

---

## Related documentation

- [Getting Started](../getting-started) — setting up the project for development
- [Handoff: next steps](../handoff/next-steps) — ongoing work and ownership

For technical details (API routes, middleware, and code structure), see the [Backend Development Guide](./development) and [Project Structure](./project-structure).
