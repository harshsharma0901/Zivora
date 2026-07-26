import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import SearchOverlay from './SearchOverlay.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { count, setIsOpen: openCart } = useCart()
  const { items: wishItems, setIsOpen: openWishlist } = useWishlist()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-wide text-ink">
            ZIVORA
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `eyebrow !text-[0.7rem] !tracking-[0.2em] transition-colors ${
                    isActive ? 'text-rosegold' : 'text-ink/70 hover:text-rosegold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="hover:text-rosegold transition-colors">
              <SearchIcon />
            </button>
            <button aria-label="Wishlist" onClick={() => openWishlist(true)} className="relative hover:text-rosegold transition-colors">
              <HeartIcon />
              {wishItems.length > 0 && <Badge>{wishItems.length}</Badge>}
            </button>
            <button aria-label="Cart" onClick={() => openCart(true)} className="relative hover:text-rosegold transition-colors">
              <BagIcon />
              {count > 0 && <Badge>{count}</Badge>}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden hover:text-rosegold transition-colors"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink text-white flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="container-x flex items-center justify-between h-20">
              <span className="font-display text-2xl">ZIVORA</span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-8 mt-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.06 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-4xl tracking-wide"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

function Badge({ children }) {
  return (
    <span className="absolute -top-2 -right-2 bg-rosegold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
      {children}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4 6 4c2.4 0 4 1.4 6 4 2-2.6 3.6-4 6-4 4 0 5.5 4 4 7.7C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}
function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 8h12l1 13H5L6 8z" />
      <path d="M9 8a3 3 0 016 0" />
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
