import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { whatsappLink, CONTACT_EMAIL, INSTAGRAM_URL, FACEBOOK_URL, BUSINESS_LOCATION } from '../config.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <FooterNewsletter />

      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        <div>
          <Link to="/" aria-label="ZIVORA — go to homepage" className="inline-block text-white">
            <Logo className="h-9 w-auto" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mt-4">Shine Beyond Ordinary.</p>
          <div className="flex gap-3 mt-6">
            <SocialIcon label="WhatsApp" href={whatsappLink('Hi ZIVORA, I have a question about your jewellery.')} external>
              <WhatsAppGlyph />
            </SocialIcon>
            <SocialIcon label="Email" href={`mailto:${CONTACT_EMAIL}`}>
              <EmailGlyph />
            </SocialIcon>
            <SocialIcon label="Instagram" href={INSTAGRAM_URL} external>
              <InstagramGlyph />
            </SocialIcon>
            <SocialIcon label="Facebook" href={FACEBOOK_URL} external>
              <FacebookGlyph />
            </SocialIcon>
          </div>
        </div>

        <FooterCol title="Quick Links" links={[
          { to: '/', label: 'Home' },
          { to: '/shop', label: 'Shop' },
          { to: '/collections', label: 'Collections' },
          { to: '/about', label: 'About Us' },
          { to: '/contact', label: 'Contact' }
        ]} />

        <FooterCol title="Customer Support" links={[
          { to: '/contact', label: 'Contact Us' },
          { to: '/privacy-policy', label: 'Privacy Policy' },
          { to: '/shipping-policy', label: 'Shipping Policy' },
          { to: '/return-policy', label: 'Return & Refund Policy' },
          { to: '/terms-and-conditions', label: 'Terms & Conditions' }
        ]} />

        <div>
          <h4 className="eyebrow !text-white/70 mb-5">Contact Information</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <a href={whatsappLink('Hi ZIVORA, I have a question.')} target="_blank" rel="noopener noreferrer" className="hover:text-rosegold-light transition-colors">
                +91 76785 80743
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-rosegold-light transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>{BUSINESS_LOCATION}</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-white/10 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} ZIVORA. All rights reserved.</p>
        <p>Crafted with care · Handset gemstones · Lifetime resizing</p>
      </div>
    </footer>
  )
}

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="container-x">
      <div className="border border-white/10 rounded-lg px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="eyebrow text-rosegold-light mb-2">Newsletter</p>
          <h3 className="font-display text-2xl md:text-3xl">Join the ZIVORA Circle</h3>
          <p className="text-white/50 text-sm mt-1">Early access to new collections and private previews.</p>
        </div>

        {submitted ? (
          <p className="text-rosegold-light font-body text-sm whitespace-nowrap">You're on the list — welcome.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3">
            <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 md:w-64 bg-transparent border border-white/25 px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-rosegold transition-colors"
            />
            <button type="submit" className="glint bg-rosegold px-6 py-3 eyebrow !text-[0.62rem] hover:bg-rosegold-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
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

function SocialIcon({ href, label, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-rosegold hover:text-rosegold transition-colors"
    >
      {children}
    </a>
  )
}

function WhatsAppGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.9-1-2.7-1.9-.7-.7-1.2-1.5-1.5-2-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.2-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.7 0-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2 3.1 5 4.2 2.9 1.1 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.4 2 11.8c0 1.9.5 3.6 1.5 5.2L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.4 10-9.9C22 6.4 17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.8 4 13.3 4 11.8 4 7.5 7.6 4 12 4s8 3.5 8 7.8c0 4.3-3.6 8.2-8 8.2z" />
    </svg>
  )
}

function EmailGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function InstagramGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 3h-2a5 5 0 00-5 5v2H6v3h2v8h3v-8h3l1-3h-4V8a1 1 0 011-1h3V3z" />
    </svg>
  )
}
