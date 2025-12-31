Deployment & migration notes
===========================

This file contains step-by-step instructions to deploy the `nextapp/zain-next` Next.js app to Vercel, plus quick notes about the migration from Vite.

1) Prepare a Git repo
--------------------
- From the project root of the Next app run:

  ```bash
  cd nextapp/zain-next
  git init
  git add .
  git commit -m "chore: add migrated Next.js app"
  # Create a remote repo (GitHub) then:
  git remote add origin git@github.com:<your-username>/<repo>.git
  git push -u origin main
  ```

- If you use GitHub and want to create the repo from the CLI (gh must be installed):

  ```bash
  gh repo create <your-username>/<repo> --public --source=. --remote=origin --push
  ```

2) What to set in Vercel when importing the project
--------------------------------------------------
- In Vercel dashboard: New Project → Import Git Repository.
- **Root Directory**: set this to `nextapp/zain-next` (important because your workspace is a monorepo).
- Framework Preset: Next.js (should be detected automatically).
- Build Command: leave as `next build` (default).
- Output Directory: leave blank (Next handles output).

3) Critical environment variables (set in Vercel Project settings)
-----------------------------------------------------------------
- NEXT_PUBLIC_API_BASE  — URL of your backend for client-side API calls
- NEXT_PUBLIC_USE_MOCK  — set to `true` for demo mode or `false` for real API
- Any server secrets: add them as env vars (do NOT prefix with NEXT_PUBLIC_)

Set each variable for Preview and Production environments as needed.

4) Deploy from Vercel web UI
---------------------------
- After import, Vercel will start a first deployment.
- Visit the preview URL to validate the site.
- When ready, promote a deployment to production via the Vercel UI or push to your production branch (e.g., `main`) which will trigger automatic deployment.

5) Deploy from the CLI (optional)
---------------------------------
- Install Vercel CLI: `npm i -g vercel`
- Log in: `vercel login`
- From `nextapp/zain-next` run: `vercel` (for a preview deploy) or `vercel --prod` (to deploy to production).
- CLI will prompt to link the project the first time — choose the repo and set the root directory to `nextapp/zain-next` when asked.

6) Troubleshooting / common issues
----------------------------------
- Wrong root / multiple lockfiles warning: If Vercel builds the wrong folder, re-import and set **Root Directory** to `nextapp/zain-next`. Alternatively, set turbopack root in `next.config.js` (see Next docs) or remove extra lockfiles.
- Build errors about missing exports: ensure `src/app/apiClient.js` exports used functions (this repo includes mock implementations for `getProducts`, `addProduct`, `sendContact`).
- Backend requests failing: confirm `NEXT_PUBLIC_API_BASE` is correct and your backend allows the deployed domain (CORS).
- If you see runtime errors only in production, check Vercel Build Logs (Dashboard → Deployments → View Build Logs) and the Environment variables configuration.

7) Optional: `vercel.json` template (see repo) — use if you need custom rewrites, headers, etc.

---

If you'd like, I can:
- create the Git repo locally and push for you (I can run `git init` and commit locally but I can't create the remote GitHub repo without your credentials/gh CLI access),
- create a `vercel.json` with custom rewrites if you need them,
- or help you run the `vercel` CLI login & deploy interactively (I'll show the exact commands to run).
