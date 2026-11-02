# PINAK ARCHITECT

Editorial architecture portfolio for Pinak Architect / Ar. Siddharth Pathak.

## Run locally

```powershell
npm install --cache .npm-cache
npm run dev
```

Open `http://localhost:3000`.

## Included

- Home, Work, dynamic Work detail, Studio/About, Services and Contact routes
- Responsive editorial layout using the supplied portfolio artwork
- Filterable work index and keyboard-friendly navigation
- Direct phone/email CTAs and transparent local-only enquiry fallback
- Typed content in `app/data.ts`
- Source PDF preserved at `public/PINAK-Architect.pdf`

## Content / launch TODOs

- Confirm whether the PDF metrics (50+ / 06+ / 8+ / 75+) or the newer supplied graphic metrics should be published.
- Confirm the two phone numbers and WhatsApp destination before launch.
- Connect `/contact` to a real delivery provider or server action; the current form intentionally does not claim email delivery.
- Replace the editorial placeholder project groupings with approved project names, locations, galleries and source-page mappings from the full PDF audit.

## Verification

`npm run build` passes successfully. Next warns only about a minor CSS autoprefixer compatibility suggestion. The app is not deployed.
