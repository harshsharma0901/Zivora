import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' }
]

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let list = category === 'All' ? products : products.filter((p) => p.category === category)
    list = [...list]
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, sort])

  return (
    <PageTransition>
      <SEO title="Shop" description="Shop the full ZIVORA collection of fine rings, necklaces, earrings and bracelets." path="/shop" />

      <section className="pt-40 pb-16 bg-beige">
        <div className="container-x text-center">
          <p className="eyebrow mb-4">The Full Collection</p>
          <h1 className="font-display text-5xl md:text-6xl">Shop All Jewellery</h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-5 py-2 text-sm rounded-full border transition-colors ${
                    category === c ? 'bg-ink text-white border-ink' : 'border-ink/20 text-ink/60 hover:border-rosegold hover:text-rosegold'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="border border-ink/20 rounded-full px-5 py-2 text-sm outline-none focus:border-rosegold"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-ink/50 py-20">No pieces match this filter yet.</p>
          ) : (
            <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
