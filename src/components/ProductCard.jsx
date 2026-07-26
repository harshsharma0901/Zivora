import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product, index = 0 }) {
  const { toggleItem, isWishlisted } = useWishlist()
  const { addItem } = useCart()
  const wished = isWishlisted(product.id)

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="relative overflow-hidden rounded-md bg-beige aspect-[4/5]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <button
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => toggleItem(product)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wished ? '#B76E79' : 'none'} stroke={wished ? '#B76E79' : '#111111'} strokeWidth="1.6">
            <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4 6 4c2.4 0 4 1.4 6 4 2-2.6 3.6-4 6-4 4 0 5.5 4 4 7.7C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>

        {product.bestSeller && (
          <span className="absolute top-3 left-3 eyebrow !text-[0.58rem] bg-ink text-white px-2 py-1 rounded-sm">
            Best Seller
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-facet">
          <button
            onClick={() => addItem(product)}
            className="glint w-full bg-ink text-white py-3 eyebrow !text-[0.65rem] hover:bg-rosegold transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block mt-4">
        <h3 className="font-body text-sm font-medium text-ink group-hover:text-rosegold transition-colors">{product.name}</h3>
        <p className="text-xs text-ink/50 mt-1">{product.material}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-display text-lg text-rosegold">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-ink/40 line-through">{formatPrice(product.compareAt)}</span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
