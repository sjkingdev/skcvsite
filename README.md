# Sean King Portfolio

React + Vite + TypeScript portfolio using TanStack Router, TanStack Query, Sass/BEM and Sanity.

## Run

```bash
npm install
npm run dev
```

## Sanity

Copy `.env.example` to `.env` and set:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-01-01
```

The site works without Sanity using the included fallback project data. Once a Sanity project ID is configured, the Work pages fetch `project` documents from Sanity.

### Sanity project schema

Create a document type named `project` with:

- `title` — string
- `slug` — slug
- `summary` — text
- `description` — text
- `company` — string
- `year` — string
- `role` — string
- `technologies` — array of strings
- `url` — URL
- `github` — URL
- `featured` — boolean
- `image` — image

## Netlify

`netlify.toml` is included. Build command: `npm run build`; publish directory: `dist`.

Add the VITE_SANITY_* values as Netlify environment variables when connecting Sanity.

## Notes

The CV and project copy are initial portfolio content based on the information available in the working CV/context. Replace placeholders such as the GitHub/LinkedIn links and add `/public/sean-king-cv.pdf` when the final PDF is ready.
