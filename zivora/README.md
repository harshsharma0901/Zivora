# ZIVORA — Shine Beyond Ordinary

A luxury fine jewellery e-commerce front-end built with React, Vite, Tailwind CSS and Framer Motion.

**Live site:** https://shipzivora.in

## Getting Started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project Structure

```
zivora/
├── index.html                  # SEO meta tags, fonts, structured data (JewelryStore JSON-LD)
├── src/
│   ├── main.jsx                 # App entry, providers (Router, Cart, Wishlist, Helmet)
│   ├── App.jsx                  # Route definitions, global layout, skip-to-content link
│   ├── index.css                # Design tokens, signature "facet glint" motion utilities
│   ├── config.js                 # Env-driven runtime config (site URL, WhatsApp, email, socials)
│   ├── context/
│   │   ├── CartContext.jsx      # Cart state, persisted to localStorage
│   │   └── WishlistContext.jsx  # Wishlist state, persisted to localStorage
│   ├── data/
│   │   ├── products.js          # Product + collection catalogue, price formatter
│   │   └── reviews.js           # Customer reviews
│   ├── components/
│   │   ├── Logo.jsx              # Full logo + Z monogram (placeholder — see Branding below)
│   │   ├── Button.jsx            # Shared premium CTA button (primary/secondary + arrow motion)
│   │   ├── Navbar.jsx, Footer.jsx, ProductCard.jsx, CartDrawer.jsx, WishlistDrawer.jsx,
│   │   │   SearchOverlay.jsx, WhatsAppButton.jsx, Newsletter.jsx, Reviews.jsx,
│   │   │   InstagramGallery.jsx, Loader.jsx, SEO.jsx, PolicyLayout.jsx, etc.
│   └── pages/
│       ├── Home.jsx             # Hero, featured collections, best sellers, why choose,
│       │                          reviews, Instagram gallery, newsletter
│       ├── Shop.jsx             # Filterable/sortable product grid
│       ├── Collections.jsx      # Collection storytelling sections
│       ├── ProductDetails.jsx   # Gallery, price, add-to-bag, related products, Product schema
│       ├── About.jsx            # Brand story: elegance, craftsmanship, trust, secure shopping
│       ├── Contact.jsx          # WhatsApp / Email / Instagram / Facebook + contact form
│       ├── PrivacyPolicy.jsx
│       ├── ShippingPolicy.jsx
│       ├── ReturnPolicy.jsx     # Return & Refund Policy
│       ├── TermsConditions.jsx
│       └── NotFound.jsx
└── public/
    ├── favicon.svg, favicon-16.png, favicon-32.png, apple-touch-icon.png, icons/
    ├── site.webmanifest, robots.txt, sitemap.xml
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your real values before deploying:

```
VITE_SITE_URL=https://shipzivora.in
VITE_WHATSAPP_NUMBER=917678580743        # international format, digits only
VITE_CONTACT_EMAIL=shipzivora@gmail.com
VITE_INSTAGRAM_URL=https://instagram.com/shipzivora
VITE_FACEBOOK_URL=https://facebook.com/shipzivora
```

`VITE_SITE_URL` drives the canonical link, Open Graph/Twitter tags, and JSON-LD in `index.html`, plus every page's `<SEO>` tag. The rest drive the floating WhatsApp button, the Contact page, and the footer — update once in `.env` (or your host's environment variables), everywhere updates.

A working `.env` with the current production values ships in this project so `npm run dev`/`build` work out of the box; it's still listed in `.gitignore` so future secret values don't get committed by accident.

## Branding — Logo & Favicon

The official ZIVORA logo and Z monogram are now live throughout the site. Source photos were supplied on a black backdrop; they were processed (black background keyed out to transparency, edge color de-contaminated to avoid a dark halo, then trimmed) into clean transparent PNGs:

- `public/logo/zivora-logo.png` — full logo (script "Z" + "ZIVORA" wordmark + tagline), used in the header (`src/components/Logo.jsx` → `<Logo />`) and the footer, at `h-[38px]` on mobile / `h-[48px]` on desktop for the header. Sizing is height-only with `w-auto` and `object-contain`, so it never stretches or crops.
- `public/logo/zivora-mark.png` — the Z monogram alone (`<LogoMark />`), used in the mobile menu header and the page loading animation.
- `public/logo/zivora-mark-square.png` — the monogram padded to a square canvas, used as the master for every favicon/app-icon size (`favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, `icons/icon-192.png`, `icons/icon-512.png`), regenerated via `sharp`. All transparent, all `fit: 'contain'` (no cropping).

If you ever get a cleaner vector/source file for the logo (e.g. an AI/SVG export instead of a photo), swap the files at the same paths and re-run the icon-generation step in `public/logo/` — no component changes are needed since `Logo.jsx` already points at these exact filenames.

## Design System

- **Colors**: White `#FFFFFF`, Rose Gold `#B76E79`, Soft Beige `#F8F5F2`, Ink Black `#111111`
- **Type**: Cormorant Garamond (display) + Manrope (body/UI), loaded via Google Fonts
- **Signature motion**: a diagonal "facet reveal" clip-path on headline load, and a "glint" light-sweep on hover for buttons and product cards — a nod to light catching a cut gemstone
- **Motion**: Framer Motion for page transitions, scroll reveals, and the loading sequence

## Features

- Search overlay with live product matching
- Wishlist + Cart drawers, persisted in `localStorage`
- WhatsApp floating chat button and footer/contact WhatsApp links
- Live Instagram and Facebook links in the footer and Contact page
- Newsletter subscription in both the homepage section and the footer
- Animated page loader using the Z monogram
- Fully responsive (mobile-first) layouts
- Skip-to-content link and `aria-current` navigation for accessibility

## SEO

- Per-page `<title>`/meta via `react-helmet-async`, canonical tags, Open Graph and Twitter Card tags
- `JewelryStore` JSON-LD in `index.html` (address, phone, email, `sameAs` social links)
- Per-product `Product` JSON-LD (price, rating, availability) on Product Details pages
- `robots.txt` and `sitemap.xml` pointing at `https://shipzivora.in`
- Descriptive `alt` text on every image; semantic heading hierarchy (single `<h1>` per page)

## Performance

- `loading="lazy"` + `decoding="async"` on all below-the-fold images
- Hero image marked `loading="eager"`/`fetchpriority="high"` for faster LCP
- `width`/`height` set on key images to reduce layout shift
- `preconnect` for Google Fonts and the image CDN

## Deployment

The site is a static Vite build — any static host works. Two configs are included:

- **Vercel**: `vercel.json` (SPA rewrites + security headers + long-term asset caching). Set the `VITE_*` environment variables in Project Settings → Environment Variables.
- **Netlify**: `netlify.toml` (build command, publish dir, SPA redirects, same headers).

Either platform auto-detects `npm run build` → `dist/`. Since this uses React Router, any static host needs a SPA fallback rule (unknown paths → `index.html`) — both configs above already do this.

### Publishing an update

```bash
git add .
git commit -m "Update branding, contact info, footer, legal pages, SEO and performance"
git push origin main
```

Vercel/Netlify will pick up the push and redeploy automatically. Confirm the `VITE_*` environment variables are set in the hosting dashboard (not just in your local `.env`) before pushing, or the production build will fall back to the defaults baked into `src/config.js`.

## Pre-Launch Checklist

- [x] Official logo and Z icon in place (see "Branding" above)
- [ ] Confirm `VITE_*` environment variables are set in your hosting provider's dashboard
- [ ] Add a real `og-image.jpg` (1200×630) to `public/`
- [ ] Replace Unsplash placeholder product images in `src/data/products.js` with real photography
- [ ] Wire `Contact.jsx` and `Newsletter.jsx` forms to a real backend/email service (they currently show a success state locally but don't send anywhere)
- [ ] Add a real payment/checkout flow — the cart currently ends at a "Proceed to Checkout" placeholder
- [ ] Run `npm run build` and smoke-test the `dist/` output with `npm run preview` before deploying
- [ ] Submit `sitemap.xml` to Google Search Console
