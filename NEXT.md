Next.js migration (app dir)

A minimal Next.js scaffold has been added using the `/app` directory.

- Run Next dev server: `npm run dev:next`
- Use mock mode by setting `NEXT_PUBLIC_USE_MOCK=true` in `.env.local` or by leaving `NEXT_PUBLIC_API_BASE` unset.
- The Next.js scaffold includes `app/layout.jsx`, `app/page.jsx`, and `app/globals.css`.

Follow-up steps: migrate components into the `/app` routes and adapt `src/apiClient.js` to use `process.env.NEXT_PUBLIC_*` variables.
