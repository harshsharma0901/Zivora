import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'

const pillars = [
  {
    title: 'Premium Quality',
    text: 'Every ZIVORA piece is finished to a standard that feels far beyond its price — considered detailing, durable plating, and a genuine weight in the hand.'
  },
  {
    title: 'Timeless Elegance',
    text: 'We design for decades, not seasons. Clean lines, considered proportions, and details that still feel right long after a trend has moved on.'
  },
  {
    title: 'Modern Craftsmanship',
    text: 'Traditional hand-finishing meets modern precision setting, so every piece leaves our workshop with a flawless, comfortable, wearable finish.'
  },
  {
    title: 'Affordable Luxury',
    text: "Luxury shouldn’t require a compromise on honesty. We keep our pricing transparent and fair, so a premium piece is a genuine possibility, not just an aspiration."
  },
  {
    title: 'Fast Shipping',
    text: 'Orders are packed and dispatched quickly from Ghaziabad, with tracking shared the moment your piece leaves our hands.'
  },
  {
    title: 'Secure Shopping',
    text: 'Every order is processed through secure checkout and shipped fully insured, so you can shop with complete confidence from click to delivery.'
  },
  {
    title: 'Customer Satisfaction',
    text: "From the first message to the piece arriving at your door, we treat every customer the way we’d want to be treated — clearly, honestly, and with care."
  }
]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="ZIVORA is a premium fashion jewellery brand built on timeless elegance, modern craftsmanship and affordable luxury. Discover our story, mission and vision."
        path="/about"
      />

      <section className="pt-40 pb-20 bg-beige">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl mb-6">Shine Beyond Ordinary</h1>
            <p className="text-ink/60 leading-relaxed mb-4">
              ZIVORA was founded on a simple idea: premium jewellery should feel personal, look timeless, and be genuinely
              within reach. We design each piece to sit comfortably between fashion and fine jewellery — elevated enough for
              an occasion, versatile enough for every day.
            </p>
            <p className="text-ink/60 leading-relaxed">
              We call it affordable luxury — modern craftsmanship, honest pricing, and an elegant shopping experience from
              the moment you browse to the moment your order arrives.
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
              alt="ZIVORA jewellery, hand-finished and ready for a final quality check"
              loading="lazy"
              width="1000"
              height="750"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-x-16 gap-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-3">Our Mission</p>
            <h2 className="font-display text-2xl md:text-3xl mb-4">Making Premium Feel Possible</h2>
            <p className="text-ink/60 leading-relaxed">
              To design jewellery that carries the look and feel of luxury without the luxury price tag — so celebrating a
              moment, or simply treating yourself, never has to wait for a special occasion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p className="eyebrow mb-3">Our Vision</p>
            <h2 className="font-display text-2xl md:text-3xl mb-4">India's Most Trusted Name in Fashion Jewellery</h2>
            <p className="text-ink/60 leading-relaxed">
              To become the fashion jewellery brand Indian shoppers reach for first — known as much for how honestly we do
              business as for how our pieces shine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-beige">
        <div className="container-x">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Why Choose ZIVORA</p>
            <h2 className="font-display text-4xl md:text-5xl">The ZIVORA Promise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
              >
                <div className="w-10 h-px bg-rosegold mb-5" aria-hidden="true" />
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-md overflow-hidden aspect-[4/3] order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
              alt="Customer trying on a ZIVORA ring, part of the ZIVORA elegant shopping experience"
              loading="lazy"
              width="1000"
              height="750"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p className="eyebrow mb-4">An Elegant Shopping Experience</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Designed to Feel Effortless</h2>
            <p className="text-ink/60 leading-relaxed mb-4">
              We've built every part of ZIVORA — from browsing to checkout to the box your piece arrives in — to feel as
              considered as the jewellery itself. Secure payments, real customer support over WhatsApp and email, and
              packaging worth keeping.
            </p>
            <p className="text-ink/60 leading-relaxed">
              This is jewellery you can trust to look as good in person as it did on screen, backed by a team that's
              genuinely reachable if anything needs to be made right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ink text-white">
        <div className="container-x text-center max-w-2xl mx-auto">
          <p className="eyebrow text-rosegold-light mb-4">Our Promise</p>
          <h2 className="font-display text-3xl md:text-4xl leading-relaxed">
            "Premium jewellery, honestly priced, and made to help you shine beyond ordinary — every single day."
          </h2>
        </div>
      </section>
    </PageTransition>
  )
}
