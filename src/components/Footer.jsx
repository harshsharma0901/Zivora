import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-8">
      <div className="container-x grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-display text-2xl mb-3">ZIVORA</h3>
          <p className="text-white/50 text-sm leading-relaxed">Shine Beyond Ordinary.</p>
          <div className="flex gap-4 mt-6">
            <SocialIcon label="Instagram" href="https://instagram.com">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </SocialIcon>
            <SocialIcon label="Facebook" href="https://facebook.com">
              <path d="M15 3h-2a5 5 0 00-5 5v2H6v3h2v8h3v-8h3l1-3h-4V8a1 1 0 011-1h3V3z" />
            </SocialIcon>
            <SocialIcon label="Pinterest" href="https://pinterest.com">
              <path d="M12 3a9 9 0 00-3.3 17.4c-.1-.9-.2-2.3.1-3.3l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.3 1 .5 1.9 1.5 1.9 1.8 0 3.1-2.3 3.1-5 0-2.1-1.5-3.7-4.1-3.7-3 0-4.8 2.2-4.8 4.5 0 .8.2 1.4.6 1.9l-.5 1.1s.2.1-.1.1c-.5-.2-2-1-2-3.4 0-2.9 2.3-6.1 6.8-6.1 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2-.6-2.4-1.3l-.6 2.5c-.2.9-.8 2-1.2 2.7A9 9 0 1012 3z" />
            </SocialIcon>
          </div>
        </div>

        <FooterCol title="Shop" links={[
          { to: '/shop', label: 'All Jewellery' },
          { to: '/collections', label: 'Collections' },
          { to: '/shop', label: 'Best Sellers' },
          { to: '/shop', label: 'New Arrivals' }
        ]} />

        <FooterCol title="Company" links={[
          { to: '/about', label: 'About ZIVORA' },
          { to: '/contact', label: 'Contact Us' },
          { to: '/contact', label: 'Store Locator' }
        ]} />

        <FooterCol title="Policies" links={[
          { to: '/privacy-policy', label: 'Privacy Policy' },
          { to: '/return-policy', label: 'Return Policy' },
          { to: '/shipping-policy', label: 'Shipping Policy' }
        ]} />
      </div>

      <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-white/10 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} ZIVORA. All rights reserved.</p>
        <p>Crafted with care · Handset gemstones · Lifetime resizing</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="eyebrow !text-white/70 mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-white/60 text-sm hover:text-rosegold-light transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-rosegold hover:text-rosegold transition-colors"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {children}
      </svg>
    </a>
  )
}
