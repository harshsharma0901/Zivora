import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'

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
      <SEO title="Contact" description="Get in touch with ZIVORA — visit our boutique, email us, or chat with us on WhatsApp." path="/contact" />

      <section className="pt-40 pb-20 bg-beige text-center">
        <div className="container-x">
          <p className="eyebrow mb-4">We'd Love to Hear From You</p>
          <h1 className="font-display text-5xl md:text-6xl">Get in Touch</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl mb-8">Visit or Reach Us</h2>
            <div className="space-y-6">
              <InfoRow label="Boutique">42 Linden Avenue, Bandra West, Mumbai 400050, India</InfoRow>
              <InfoRow label="Email">care@zivora.com</InfoRow>
              <InfoRow label="Phone">+91 12345 67890</InfoRow>
              <InfoRow label="Hours">Tuesday – Sunday, 11am – 8pm</InfoRow>
            </div>

            <div className="mt-10 rounded-md overflow-hidden aspect-[16/9] bg-beige flex items-center justify-center text-ink/30 text-sm">
              Map preview
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {sent ? (
              <div className="bg-beige rounded-md p-10 text-center">
                <h3 className="font-display text-2xl mb-3">Message Sent</h3>
                <p className="text-ink/60 text-sm">Thank you for reaching out. Our concierge team will respond within 24 hours.</p>
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
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function InfoRow({ label, children }) {
  return (
    <div>
      <p className="eyebrow !text-ink/40 mb-1">{label}</p>
      <p className="text-ink/80">{children}</p>
    </div>
  )
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
