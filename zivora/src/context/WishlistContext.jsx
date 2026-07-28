import React, { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext(null)
const STORAGE_KEY = 'zivora_wishlist'

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const toggleItem = (product) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.id === product.id)
      if (exists) return prev.filter((i) => i.id !== product.id)
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.images?.[0] }]
    })
  }

  const isWishlisted = (id) => items.some((i) => i.id === id)
  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isWishlisted, removeItem, isOpen, setIsOpen }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
