# ARTH STUDIO — Marketing Site

Astro + Tailwind CSS single-page site for an interior design & architecture studio.

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
```

## Before you ship this

1. **Hero video** — `src/components/Hero.astro` points to `/media/hero-loop.mp4`,
   which doesn't exist yet. Drop a real (short, muted, no-audio-track) loop at
   `public/media/hero-loop.mp4`, or swap the `<video>` block for a static
   `<img>` if the studio doesn't have footage — a video hero is the single
   most common interior-design template cliché, so make sure it's earning its
   place over a strong still image.
2. **Gallery / About images** — currently pulling from Unsplash by URL so the
   page renders without local assets. Replace with the studio's real
   photography, imported locally so `astro:assets`' `<Image />` can optimize
   them (resizing, format conversion, lazy loading) — see the comment at the
   top of `src/components/Gallery.astro` for the exact pattern.
3. **Contact form endpoint** — `action="https://api.sheetmonkey.io/tb/as/PLACEHOLDER"`
   in `src/components/Contact.astro` needs a real Formspree/SheetMonkey (or
   equivalent) endpoint ID. The submit handler expects a JSON-accepting
   endpoint (`Accept: application/json`); if your provider doesn't support
   that, drop the `fetch` interception in the `<script>` tag and let the form
   submit natively.
4. **Copy** — names, coordinates, phone number, and social handles are all
   placeholders. Search for `PLACEHOLDER`, `arth.design`, and `+91 80` to
   find them.

## Design tokens

Palette, type scale, and spacing live in `tailwind.config.mjs`. Fonts
(Fraunces / Inter / IBM Plex Mono) are loaded via Google Fonts in
`src/styles/global.css` — self-host them there if the studio needs to avoid
a third-party font request.
