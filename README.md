# Rishith Prathi — Personal Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS, with Lenis smooth scrolling.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Editing content

Everything on the page — bio, skills, education, experience, projects, links — lives in
[`src/data/site.ts`](src/data/site.ts). Edit that file; no component changes are needed.

- **Resume:** replace `public/resume.pdf`.
- **Headshot:** replace `public/headshot.jpg`.

## Project screenshots

Drop an image into `public/projects/` named after the project's slug and it is picked up automatically
on the next `npm run dev` / build (png, jpg, jpeg, or webp). Until then, a styled placeholder is shown.

| Project  | File                              |
| -------- | --------------------------------- |
| Forger   | `public/projects/forger.png`      |
| Phantom  | `public/projects/phantom.png`     |
| SwiftER  | `public/projects/swifter.png`     |
| Splitpot | `public/projects/splitpot.png`    |

A 16:10 aspect ratio (e.g. 1600×1000) fits the cards best.

For a looping clip instead, add `<slug>.mp4` (muted, H.264). A same-named image, if present, is
shown as the poster frame while it loads — e.g. `swifter.mp4` + `swifter.jpg`.

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo at <https://vercel.com/new> — the defaults work as-is.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain so social previews use it.

Or from this folder: `npx vercel`.
