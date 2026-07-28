import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ink text-white py-28">
      <div className="container-x text-center max-w-xl mx-auto">
        <motion.p
          className="eyebrow text-rosegold-light mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Stay in the light
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join the ZIVORA Circle
        </motion.h2>
        <p className="text-white/60 text-sm mb-8">
          Early access to new collections, private previews, and stories from our atelier — straight to your inbox.
        </p>

        {submitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rosegold-light font-body text-sm">
            You are on the list. Welcome to the Circle.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 sm:w-80 bg-transparent border border-white/30 px-5 py-4 text-sm placeholder-white/40 outline-none focus:border-rosegold transition-colors"
            />
            <button type="submit" className="glint bg-rosegold px-8 py-4 eyebrow !text-[0.68rem] hover:bg-rosegold-dark transition-colors">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
