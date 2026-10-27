# DH Wave Music

React + Vite website for DH Wave Music, Galle, Sri Lanka.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Vite site and deploys the `dist` directory on every push to `main`. In repository Settings > Pages, set the source to **GitHub Actions**.

## Before client launch

- Confirm each linked music video and official thumbnail with the label.
- Confirm current public stats and any rating claims.
- Replace the producer image with an approved portrait when supplied.
- Verify all social account URLs with the studio owner.
- Get approval to use artist names, artwork and video embeds.

The booking form opens a prefilled WhatsApp message and does not store form data.

## Studio experience notes

- The hero, release grid, video modal, live studio status, persistent YouTube player, A/B comparison and WhatsApp booking wizard are separated into reusable React components under `src/components/`.
- The live status currently uses a configurable 10:00–22:00 Sri Lanka time window. Confirm DH Wave Music's real opening hours and update `OPEN_HOUR` / `CLOSE_HOUR` in `src/components/StudioStatus.jsx` before presenting the status as official.
- The raw/mastered comparison intentionally waits for owner-approved audio. Add the matching files as `public/audio/raw-demo.mp3` and `public/audio/mastered-demo.mp3`, then set each `src` in `src/components/RawMastered.jsx` to `import.meta.env.BASE_URL + 'audio/raw-demo.mp3'` and `import.meta.env.BASE_URL + 'audio/mastered-demo.mp3'` respectively. Do not use unrelated audio as a studio comparison.
- YouTube embeds load only when a visitor chooses a track or opens a video. Release artwork uses native lazy loading.
