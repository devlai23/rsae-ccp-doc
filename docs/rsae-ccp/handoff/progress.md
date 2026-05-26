---
id: progress
title: Progress
sidebar_position: 2
---

# Progress Made Up Until Now

The RSAE Community Collaboration Platform currently serves as a functional foundation for both Evanston residents submitting proposals and RSAE Administrators managing the pipeline. Below is a detailed breakdown of the existing capabilities and the immediate roadmap for development.

## Existing Capabilities

The platform currently supports the following core features, divided by user roles:

### Authentication & Access
* **Firebase Integration:** Secure admin dashboard access utilizing Firebase Authentication.
* **Role-Based Routing:** Distinct user experiences and navigational headers depending on whether the user is a public resident (`UserHeader`) or an authenticated admin (`AdminHeader`).

### Public Features
* **Home Page:** Primary landing destination outlining the RSAE mission.
* **Browse Ideas:** Public directory where residents can view all approved proposals.
* **Submit Proposal:** Submission form allowing public to submit new ideas or proposals to RSAE.
* **Upvoting:** Public can upvote proposals on the Browse Ideas page.
* **Commenting:** Public can comment on proposals on the Browse Ideas page.
* **Filtering:** Global filtering capability across pages (Browse Ideas, Dashboard, Audit Log).

### Admin Dashboard
* **Data Dashboard:** Admin analytics page with real time metric cards (Total Proposals, Pending Review, Approved) and Category Distribution data.
* **Proposal Management:** A comprehensive data table allowing admins to view all submission details (ID, Category, Description, Votes, Submitter).
* **Proposal Approval:** Admins approve or reject pending proposals from within the dashboard.
* **Audit Log:** Paginated view for tracking admin actions and system events.

---

## TL;DR

The app is functional. Evanston residents have a clear system to submit, browse, and interact with proposals. RSAE Admins have access to a data dashboard to process and analyze submissions.