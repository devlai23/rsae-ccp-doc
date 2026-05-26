---
id: next-steps
title: Next Steps
sidebar_position: 1
---

# Next Steps

Recommended follow-up work for the RSAE Community Crowdsourcing Platform (`rsae-ccp-fe`, `rsae-ccp-be`).

---

## 1. Persist Full Submission Data

### Context

The user submission form requires and validates a submitter's email and relation to Evanston. However, the outgoing POST /proposals payload drops this information, saving only the title, category, description, and name.

### Proposal

- **Database Extension:** Add submitter_email and relation_to_evanston columns to the proposals table.
- **Payload Update:** Update SubmissionForm.jsx to include these fields in the POST request body. Ensure the backend marks these fields as admin-only so they are completely omitted from public API feeds.

**Relevant files:** `SubmissionForm.jsx`, `proposalsController.js`, `create_tables_mysql.sql`

---

## 2. Secure Proposal Filtering (API Alignment)

### Context

Currently, data privacy relies entirely on the frontend. While the browse page uses React logic to hide pending or rejected proposals from everyday visitors, the underlying backend endpoint (GET /proposals) remains completely unrestricted. It still sends the entire database of proposals to the browser, allowing anyone with basic technical knowledge to query the API directly and view unapproved entries.

### Proposal

- **Backend Security:** Modify the GET /proposals endpoint so that public, unauthenticated requests are automatically restricted to returning only entries with an approved status.
- **Frontend Simplification:** Once the backend acts as the secure gatekeeper, remove the redundant client-side filtering logic from BrowseIdeas.jsx to clean up and simplify the codebase.

**Relevant files:** `src/pages/browse/BrowseIdeas.jsx`, `src/routes/proposalsRoutes.js`, `src/controllers/proposalsController.js`

---

## 3. Admin Data Export (CSV)

### Context

Admins need a way to take platform data out of the system to run deeper analysis in third-party visualization platforms (e.g., Tableau, PowerBI) or feed them into AI summarization models.

### Proposal

- **Backend Endpoint:** Build a protected, admin-only route (GET /proposals/export) that streams database tables as a text/csv attachment. Include the newly preserved email and relation columns.
- **Frontend Action:** Add a clean "Export CSV" button directly onto the admin dashboard that triggers this download, naming files dynamically by date (e.g., rsae-export-YYYY-MM-DD.csv).

**Relevant files:** `DataDashboard.jsx`, `proposalsRoutes.js`

---

## 4. Proposal Approval Email Notifications

### Context

Currently, when a resident submits an idea, it goes into a pending state. If an admin reviews and approves it, the user has no automated way of knowing their idea is now live on the public feed.

### Proposal

- **Notification Trigger:** Implement a post-update hook or database trigger on the backend. When an admin updates a proposal status to approved, capture the stored submitter_email.
- **Integration:** Hook up an email service provider (such as Resend, SendGrid, or a Supabase Edge Function) to automatically send a congratulatory notification email containing a direct link to their live proposal.

**Relevant files:** `proposalsController.js` or a new backend notification service file.
