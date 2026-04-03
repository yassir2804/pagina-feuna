Cloudflare Pages deployment (demo)
=================================

This project can be deployed to Cloudflare Pages so you can share a public demo link.

Steps to enable automatic deploys via GitHub Actions
---------------------------------------------------

1. Push this repository to GitHub and use `main` as the deployment branch.
2. Create a Cloudflare Pages project (recommended) or use the GitHub Actions below.
3. In the GitHub repository, add these repository secrets:
   - `CF_API_TOKEN` — a Cloudflare API token with Pages:Edit permission (and account access).
   - `CF_ACCOUNT_ID` — your Cloudflare account ID.
   - `CF_PROJECT_NAME` — the Pages project name (exactly as created in Cloudflare).
4. The workflow `.github/workflows/deploy-cloudflare-pages.yml` will run on push to `main`, build the app (`npm run build`) and deploy the `dist` folder to Cloudflare Pages.

How to get `CF_API_TOKEN` and `CF_ACCOUNT_ID`
-------------------------------------------
- `CF_ACCOUNT_ID`: In your Cloudflare dashboard, open "Overview" for your account and copy the Account ID.
- `CF_API_TOKEN`: From your Cloudflare dashboard go to "My Profile" → "API Tokens" → "Create Token". Use the "Edit Cloudflare Pages" template or create a custom token with these permissions:
  - Account: Pages:Edit
  - Account: Account Settings:Read (optional)

Notes
-----
- If you prefer to connect the GitHub repository directly in Cloudflare Pages (via the dashboard), Cloudflare can build and deploy for you and you may not need the GitHub Action.
- After the first successful deployment Cloudflare Pages gives you a public URL like `https://<project>.pages.dev`.

Local test
----------
To build locally and check output before pushing:
```bash
npm ci
npm run build
npx serve dist    # or any static server to preview `dist`
```
