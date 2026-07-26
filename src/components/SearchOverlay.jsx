import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { products, formatPrice } from '../data/products.js'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const results = query.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : []

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex flex-col items-center pt-28 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-white/30 pb-4">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rings, necklaces, earrings…"
                className="w-full bg-transparent text-white font-display text-2xl md:text-3xl placeholder-white/40 outline-none"
              />
              <button aria-label="Close search" onClick={onClose} className="text-white/70 hover:text-rosegold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-3 max-h-[50vh] overflow-y-auto">
              {results.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    navigate(`/product/${p.id}`)
                    onClose()
                  }}
                  className="w-full flex items-center gap-4 text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <img src={p.images[0]} alt={p.name} className="w-14 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-white font-body text-sm">{p.name}</p>
                    <p className="text-white/50 text-xs">{p.category}</p>
                  </div>
                  <span className="text-rosegold-light text-sm">{formatPrice(p.price)}</span>
                </button>
              ))}
              {query.trim() && results.length === 0 && (
                <p className="text-white/50 text-sm pt-4">No pieces found. Try “ring”, “necklace”, or “earrings”.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
