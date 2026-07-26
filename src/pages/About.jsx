import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'

const milestones = [
  { year: '2016', text: 'ZIVORA founded in a single-room atelier, with three artisans and one belief: jewellery should feel personal.' },
  { year: '2019', text: 'Launched the Aurelia collection — our first full gold line, handcrafted entirely in-house.' },
  { year: '2022', text: 'Opened our flagship boutique and introduced lifetime resizing on every piece we sell.' },
  { year: '2025', text: 'ZIVORA pieces worn on runways and red carpets across three continents.' }
]

export default function About() {
  return (
    <PageTransition>
      <SEO title="About" description="Learn the story behind ZIVORA — a fine jewellery house built on craftsmanship, ethics and light." path="/about" />

      <section className="pt-40 pb-20 bg-beige">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">Crafted to Outlast Trend</h1>
            <p className="text-ink/60 leading-relaxed mb-4">
              ZIVORA began as a small atelier with a simple conviction: jewellery should be made slowly, by hand, and built to be
              passed down. Nearly a decade later, that conviction has not changed — only the hands making it.
            </p>
            <p className="text-ink/60 leading-relaxed">
              Every piece that carries our name is designed in-house, cast, set and finished by our own artisans, and inspected
              twice before it ever reaches you.
            </p>
          </motion.div>
          <motion.div
            className="rounded-md overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1602752275849-8f38b437b3fb?auto=format&fit=crop&w=1000&q=80"
              alt="ZIVORA artisan at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x max-w-3xl">
          <p className="eyebrow text-center mb-4">Our Journey</p>
          <h2 className="font-display text-4xl text-center mb-16">Milestones</h2>

          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                className="flex gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="font-display text-3xl text-rosegold w-20 flex-shrink-0">{m.year}</div>
                <p className="text-ink/70 leading-relaxed border-l border-beige pl-8">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <p className="eyebrow text-rosegold-light mb-4">Our Promise</p>
          <h2 className="font-display text-3xl md:text-4xl leading-relaxed">
            "We do not chase trends. We craft pieces meant to be worn for decades, and loved for longer."
          </h2>
        </div>
      </section>
    </PageTransition>
  )
}
