# מצוק יעלים — HebrewLand (Astro)

Landing page for the "Metzuk Ya'elim" project at Kibbutz Mitzpe Shalem.
This is a port of the 2020 Gulp/SCSS site (`../HebrewLand`) to Astro 7. The original folder is untouched.

## Stack

| | |
|---|---|
| Framework | Astro 7 (static output) — Node ≥ 22.23 |
| Styles | Plain modern CSS: native nesting, custom properties, `color-mix()`, logical properties. Global tokens in `src/styles/global.css`, everything else scoped inside components |
| Font | `@fontsource-variable/rubik`, self-hosted (Hebrew + Latin loaded on demand via `unicode-range`) |
| Images | `astro:assets` → AVIF/WebP/JPG, responsive `srcset`, native lazy loading |
| JS | ~3 KB total: nav drawer, video play button, form submit, reveal-on-scroll (IntersectionObserver) |
| Forms | Netlify Forms (`lead` + `contact`), honeypot spam protection, `/thanks/` fallback without JS |
| Hosting | Netlify (`netlify.toml`) |

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + build to dist/
npm run preview   # serve dist/
```

## Structure

```
src/
  layouts/Base.astro          <html lang="he" dir="rtl">, meta/OG, font, global CSS
  pages/index.astro           page content (all Hebrew copy lives here + in components)
  pages/thanks.astro          form success page (no-JS fallback)
  pages/404.astro
  components/
    Navbar.astro              logos, desktop nav, mobile drawer (accessible, Esc to close)
    Hero.astro                background video + title
    LeadForm.astro            reusable Netlify form (used twice)
    FeatureSection.astro      image + text block (props: imageSide, imageFirstOnMobile, gray…)
    VideoSection.astro        architect video with play button
    Cards.astro               4 feature cards
    Contact.astro             contact details + form
    Footer.astro
  scripts/reveal.ts           scroll animations (replaces WOW.js)
  styles/global.css           tokens, reset, buttons, fields, layout
  assets/images, assets/icons
public/
  video/hero-bg.mp4           0.9 MB (was 12.8 MB) — 1280px, no audio
  video/main-video.mp4        18.7 MB (was 128 MB) — 1280px H.264, AAC 96k, faststart
  favicon.png
```

## What changed vs. the 2020 version

- Fixed: broken `og:title`/`og:image` meta, empty `lang`, wrong favicon path, unclosed `<div>`,
  `Image4.png` / `image3.jpg` filename-case 404s, smooth-scroll JS crash on `href="#"` links,
  Rubik font never loaded, forms that didn't submit, nav links pointing nowhere.
- Content stays visible without JavaScript (animations are progressive enhancement and respect
  `prefers-reduced-motion`).
- Semantic headings (`h1` → `h2` → `h3`), real `<button>`s, form labels, `tel`/`email` input types,
  skip link, `aria-expanded` on the menu.
- Bootstrap, Sass, Gulp, WOW.js and vanilla-lazyload removed.
- Copy fix: "דגמי ארמונות החוף" → "דגמי ארמונות החורף" (matches the rest of the page).
