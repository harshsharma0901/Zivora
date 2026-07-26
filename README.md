# ZIVORA — Shine Beyond Ordinary

A luxury fine jewellery e-commerce front-end built with React, Vite, Tailwind CSS and Framer Motion.

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
├── index.html                  # SEO meta tags, fonts, structured data
├── src/
│   ├── main.jsx                 # App entry, providers (Router, Cart, Wishlist, Helmet)
│   ├── App.jsx                  # Route definitions, global layout (nav/footer/drawers)
│   ├── index.css                # Design tokens, signature "facet glint" motion utilities
│   ├── context/
│   │   ├── CartContext.jsx      # Cart state, persisted to localStorage
│   │   └── WishlistContext.jsx  # Wishlist state, persisted to localStorage
│   ├── data/
│   │   ├── products.js          # Product + collection catalogue, price formatter
│   │   └── reviews.js           # Customer reviews
│   ├── components/               # Navbar, Footer, ProductCard, CartDrawer, WishlistDrawer,
│   │                              # SearchOverlay, WhatsAppButton, Newsletter, Reviews,
│   │                              # InstagramGallery, Loader, SEO, PolicyLayout, etc.
│   └── pages/
│       ├── Home.jsx             # Hero, featured collections, best sellers, why choose,
│       │                          reviews, Instagram gallery, newsletter
│       ├── Shop.jsx             # Filterable/sortable product grid
│       ├── Collections.jsx      # Collection storytelling sections
│       ├── ProductDetails.jsx   # Gallery, price, add-to-bag, related products
│       ├── About.jsx            # Brand story, milestones
│       ├── Contact.jsx          # Contact form + boutique info
│       ├── PrivacyPolicy.jsx
│       ├── ReturnPolicy.jsx
│       ├── ShippingPolicy.jsx
│       └── NotFound.jsx
└── public/
    └── favicon.svg
```

## Design System

- **Colors**: White `#FFFFFF`, Rose Gold `#B76E79`, Soft Beige `#F8F5F2`, Ink Black `#111111`
- **Type**: Cormorant Garamond (display) + Manrope (body/UI), loaded via Google Fonts
- **Signature motion**: a diagonal "facet reveal" clip-path on headline load, and a "glint" light-sweep on hover for buttons and product cards — a nod to light catching a cut gemstone
- **Motion**: Framer Motion for page transitions, scroll reveals, and the loading sequence

## Features

- Search overlay with live product matching
- Wishlist + Cart drawers, persisted in `localStorage`
- WhatsApp floating chat button
- Animated page loader
- Fully responsive (mobile-first) layouts
- SEO: per-page `<title>`/meta via `react-helmet-async`, canonical tags, Open Graph tags, JSON-LD structured data

## Notes for Production

- Product images currently use Unsplash placeholders — swap in real photography via `src/data/products.js`.
- Replace the WhatsApp number in `src/components/WhatsAppButton.jsx`.
- Wire `Contact.jsx` and `Newsletter.jsx` forms to a real backend/email service.
- Add a real payment/checkout flow — the cart currently ends at a "Proceed to Checkout" placeholder.
