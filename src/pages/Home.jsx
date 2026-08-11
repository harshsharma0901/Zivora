import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Reviews, { SectionIntro } from '../components/Reviews.jsx'
import InstagramGallery from '../components/InstagramGallery.jsx'
import Button from '../components/Button.jsx'
import { collections } from '../data/products.js'
import { useProducts } from '../hooks/useProducts.js'

export default function Home() {
  const { products } = useProducts()
  const bestSellers = products.slice(0, 4)
  return (
    <PageTransition>
      <SEO
        title="Home"
        description="ZIVORA — affordable fashion jewellery crafted to shine beyond ordinary. Explore rings, necklaces, earrings and bracelets."
        path="/"
      />

      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <WhyChoose />
      <Reviews />
      <InstagramGallery />
      <Newsletter />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-beige overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1800&q=80"
          alt="ZIVORA rose gold jewellery piece catching the light — Shine Beyond Ordinary"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1800"
          height="1200"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-xl">
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The New Aurelia Edit
          </motion.p>

          <h1 className="facet-reveal font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-ink" style={{ animationDelay: '0.15s' }}>
            Shine Beyond
            <br />
            Ordinary
          </h1>

          <motion.p
            className="text-ink/60 text-base md:text-lg mt-7 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Premium fashion jewellery, finished with care and priced to be worn every day.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Button to="/shop" variant="primary">Shop the Edit</Button>
            <Button to="/collections" variant="secondary">View Collections</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <span className="eyebrow !text-[0.6rem]">Scroll</span>
        <div className="w-px h-8 bg-ink/30" />
      </motion.div>
    </section>
  )
}

function FeaturedCollections() {
  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionIntro eyebrow="Featured Collections" title="Four stories, one house" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {collections.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Link to="/collections" className="group block">
                <div className="relative overflow-hidden rounded-md aspect-[3/4]">
                  <img
                    src={c.image}
                    alt={`${c.name} collection — ${c.tagline}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-display text-2xl text-white">{c.name}</h3>
                    <p className="text-white/70 text-xs mt-1">{c.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BestSellers() {
  return (
    <section className="py-28 bg-beige">
      <div className="container-x">
        <SectionIntro eyebrow="Most Loved" title="Best Sellers" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-14">
          {bestSellers.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button to="/shop" variant="secondary">View All Jewellery</Button>
        </div>
      </div>
    </section>
  )
}

const pillars = [
  { title: 'Premium Plating', desc: 'Every piece is stainless steel with premium gold plating — tarnish-resistant, nickel-free, and built to last.', icon: 'gem' },
  { title: 'Hand-Finished', desc: 'Each piece passes through final polish, setting and inspection before it ships.', icon: 'hand' },
  { title: 'Lifetime Care', desc: 'Reach out anytime for cleaning tips, sizing help or a quick fix — we\u2019re here for as long as you own the piece.', icon: 'shield' },
  { title: 'Insured Shipping', desc: 'Every order ships fully insured, discreetly packaged, with signature-on-delivery.', icon: 'box' }
]

function WhyChoose() {
  return (
    <section className="py-28 bg-white">
      <div className="container-x">
        <SectionIntro eyebrow="Why Choose Zivora" title="Beyond the sparkle" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center mx-auto mb-5 text-rosegold">
                <PillarIcon type={p.icon} />
              </div>
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarIcon({ type }) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 }
  if (type === 'gem') return <svg {...common}><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18M9 3l3 6 3-6M9 9l3 12 3-12" /></svg>
  if (type === 'hand') return <svg {...common}><path d="M8 11V6a2 2 0 114 0v5M12 11V4a2 2 0 114 0v7M16 11V6a2 2 0 114 0v6a6 6 0 01-6 6h-1a6 6 0 01-5-2.7L5 12" /></svg>
  if (type === 'shield') return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
  return <svg {...common}><path d="M3 8l9-5 9 5-9 5-9-5z" /><path d="M3 8v9l9 5 9-5V8" /><path d="M12 13v9" /></svg>
}
