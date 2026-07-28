import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, subtotal } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-ink/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className="fixed top-0 right-0 z-[95] h-full w-full sm:w-[420px] bg-white flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-beige">
              <h2 className="font-display text-2xl">Your Bag ({items.length})</h2>
              <button aria-label="Close bag" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.length === 0 && (
                <p className="text-ink/50 text-sm pt-10 text-center">Your bag is empty. Every great collection starts with one piece.</p>
              )}
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium">{item.name}</p>
                    <p className="text-rosegold text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 border border-ink/20 rounded-full text-sm hover:border-rosegold"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 border border-ink/20 rounded-full text-sm hover:border-rosegold"
                      >
                        +
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-xs text-ink/40 hover:text-rosegold underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-beige space-y-4">
                <div className="flex justify-between font-body text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-ink/40">Shipping and taxes calculated at checkout.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-ink text-white py-4 eyebrow !text-[0.72rem] hover:bg-rosegold transition-colors"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-xs text-ink/50 underline hover:text-rosegold"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
