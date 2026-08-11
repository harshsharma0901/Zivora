import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import ProductCard from '../components/ProductCard.jsx'
import NotFound from './NotFound.jsx'
import { formatPrice } from '../data/products.js'
import { useProduct } from '../hooks/useProducts.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { SITE_URL } from '../config.js'

export default function ProductDetails() {
  const { id } = useParams()
  const { product, related, loading, error } = useProduct(id)

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()
  const { toggleItem, isWishlisted } = useWishlist()

  if (loading) {
    return (
      <PageTransition>
        <div className="pt-40 pb-20 text-center text-ink/50">Loading...</div>
      </PageTransition>
    )
  }

  if (error || !product) return <NotFound />

  const wished = isWishlisted(product.id)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.id,
    material: product.material,
    brand: { '@type': 'Brand', name: 'ZIVORA' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewsCount
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/${product.id}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock'
    }
  }

  return (
    <PageTransition>
      <SEO title={product.name} description={product.description} path={`/product/${product.id}`} jsonLd={productJsonLd} />

      <section className="pt-32 pb-20 bg-white">
        <div className="container-x">
          <nav className="text-xs text-ink/40 mb-10">
            <Link to="/" className="hover:text-rosegold">Home</Link> /{' '}
            <Link to="/shop" className="hover:text-rosegold">Shop</Link> /{' '}
            <span className="text-ink/70">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.div
                className="rounded-md overflow-hidden aspect-[4/5] bg-beige"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                key={activeImg}
              >
                <img src={product.images[activeImg]} alt={`${product.name} — ${product.material}`} decoding="async" className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex gap-3 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                      activeImg === idx ? 'border-rosegold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
              <p className="eyebrow mb-3">{product.category}</p>
              <h1 className="font-display text-4xl md:text-5xl mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.round(product.rating || 0) ? '#B76E79' : '#e5dfda'}>
                      <path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.5 7.1L12 18l-6.5 3.6 1.5-7.1-5.3-5 7.2-.9L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-ink/50">{product.rating || '—'} ({product.reviewsCount || 0} reviews)</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-3xl text-rosegold">{formatPrice(product.price)}</span>
                {product.compareAt && <span className="text-ink/40 line-through">{formatPrice(product.compareAt)}</span>}
              </div>

              <p className="text-ink/60 leading-relaxed mb-8">{product.description}</p>

              <ul className="space-y-2 mb-8">
                {(product.details || []).map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rosegold flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm text-ink/60">Quantity</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-8 h-8 border border-ink/20 rounded-full hover:border-rosegold">−</button>
                  <span className="w-6 text-center">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="w-8 h-8 border border-ink/20 rounded-full hover:border-rosegold">+</button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => addItem(product, qty)}
                  className="glint flex-1 bg-ink text-white py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => toggleItem(product)}
                  aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`w-14 border rounded-md flex items-center justify-center transition-colors ${
                    wished ? 'border-rosegold text-rosegold' : 'border-ink/20 hover:border-rosegold hover:text-rosegold'
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={wished ? '#B76E79' : 'none'} stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4 6 4c2.4 0 4 1.4 6 4 2-2.6 3.6-4 6-4 4 0 5.5 4 4 7.7C19.5 16.4 12 21 12 21z" />
                  </svg>
                </button>
              </div>

              <p className="text-xs text-ink/40 mt-6">Free insured shipping · 30-day returns · Lifetime resizing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-beige">
          <div className="container-x">
            <h2 className="font-display text-3xl mb-10 text-center">You May Also Love</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}
