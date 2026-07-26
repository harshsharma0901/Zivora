import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import { collections } from '../data/products.js'

export default function Collections() {
  return (
    <PageTransition>
      <SEO
        title="Collections"
        description="Explore ZIVORA's signature collections — Aurelia, Lumière Noire, Pétale and Eterna."
        path="/collections"
      />

      <section className="pt-40 pb-16 bg-beige text-center">
        <div className="container-x">
          <p className="eyebrow mb-4">Our Collections</p>
          <h1 className="font-display text-5xl md:text-6xl">Four Stories, One House</h1>
          <p className="text-ink/60 max-w-lg mx-auto mt-5">
            Every ZIVORA collection begins with a feeling — light at dawn, quiet drama, a botanical curve, a lifelong promise.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white">
        {collections.map((c, idx) => (
          <div key={c.id} className={`container-x py-16 grid md:grid-cols-2 gap-10 items-center ${idx % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <motion.div
              className="overflow-hidden rounded-md aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <p className="eyebrow mb-3">Collection {String(idx + 1).padStart(2, '0')}</p>
              <h2 className="font-display text-4xl md:text-5xl mb-3">{c.name}</h2>
              <p className="text-rosegold mb-4">{c.tagline}</p>
              <p className="text-ink/60 leading-relaxed mb-8">{c.description}</p>
              <Link to="/shop" className="glint inline-block bg-ink text-white px-8 py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors">
                Shop {c.name}
              </Link>
            </motion.div>
          </div>
        ))}
      </section>
    </PageTransition>
  )
}
