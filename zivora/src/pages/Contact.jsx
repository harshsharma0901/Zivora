import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import { whatsappLink, CONTACT_EMAIL, SITE_URL, INSTAGRAM_URL, FACEBOOK_URL, BUSINESS_LOCATION } from '../config.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Get in touch with ZIVORA — chat on WhatsApp, email our team, or find us on Instagram and Facebook. Based in Ghaziabad, Uttar Pradesh."
        path="/contact"
      />

      <section className="pt-40 pb-20 bg-beige text-center">
        <div className="container-x">
          <p className="eyebrow mb-4">We'd Love to Hear From You</p>
          <h1 className="font-display text-5xl md:text-6xl">Get in Touch</h1>
          <p className="text-ink/60 max-w-md mx-auto mt-5">
            Questions about a piece, an order, or a custom request? Our team typically replies within a few hours.
          </p>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl mb-6">Reach Us Directly</h2>
            <div className="space-y-4">
              <ContactChannel
                icon="whatsapp"
                label="WhatsApp"
                value="+91 76785 80743"
                href={whatsappLink('Hi ZIVORA, I have a question about your jewellery.')}
                external
              />
              <ContactChannel icon="email" label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
              <ContactChannel icon="web" label="Website" value="shipzivora.in" href={SITE_URL} external />
              <ContactChannel icon="location" label="Business Location" value={BUSINESS_LOCATION} />
              <ContactChannel icon="instagram" label="Instagram" value="@shipzivora" href={INSTAGRAM_URL} external />
              <ContactChannel icon="facebook" label="Facebook" value="Ship Zivora" href={FACEBOOK_URL} external />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="bg-beige rounded-md p-10 text-center">
                <h3 className="font-display text-2xl mb-3">Message Sent</h3>
                <p className="text-ink/60 text-sm">Thank you for reaching out. Our team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                <div>
                  <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
                  />
                </div>
                <button type="submit" className="glint w-full bg-ink text-white py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors">
                  Send Message
                </button>
              </form>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_LOCATION)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 rounded-md overflow-hidden aspect-[16/9] bg-beige flex flex-col items-center justify-center text-ink/40 text-sm hover:text-rosegold transition-colors gap-2"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <span>Open Google Maps — {BUSINESS_LOCATION}</span>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function ContactChannel({ icon, label, value, href, external }) {
  const Wrapper = href ? 'a' : 'div'
  const props = href
    ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined }
    : {}
  return (
    <Wrapper
      {...props}
      className={`flex items-center gap-4 p-4 border border-ink/10 rounded-md transition-colors group ${
        href ? 'hover:border-rosegold' : ''
      }`}
    >
      <span className="w-11 h-11 rounded-full bg-beige flex items-center justify-center text-ink group-hover:text-rosegold transition-colors flex-shrink-0">
        <ChannelIcon type={icon} />
      </span>
      <span>
        <p className="eyebrow !text-ink/40 mb-0.5">{label}</p>
        <p className={`text-ink/80 text-sm transition-colors ${href ? 'group-hover:text-rosegold' : ''}`}>{value}</p>
      </span>
    </Wrapper>
  )
}

function ChannelIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24' }
  if (type === 'whatsapp')
    return (
      <svg {...common} fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.9-.4-1.9-1-2.7-1.9-.7-.7-1.2-1.5-1.5-2-.2-.3 0-.5.1-.6.2-.2.4-.5.6-.7.2-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.7 0-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2 3.1 5 4.2 2.9 1.1 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z" />
        <path d="M12 2C6.5 2 2 6.4 2 11.8c0 1.9.5 3.6 1.5 5.2L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.4 10-9.9C22 6.4 17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.8 4 13.3 4 11.8 4 7.5 7.6 4 12 4s8 3.5 8 7.8c0 4.3-3.6 8.2-8 8.2z" />
      </svg>
    )
  if (type === 'email')
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    )
  if (type === 'web')
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
    )
  if (type === 'location')
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    )
  if (type === 'instagram')
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    )
  if (type === 'facebook')
    return (
      <svg {...common} fill="currentColor">
        <path d="M15 3h-2a5 5 0 00-5 5v2H6v3h2v8h3v-8h3l1-3h-4V8a1 1 0 011-1h3V3z" />
      </svg>
    )
  return null
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
      />
    </div>
  )
}
