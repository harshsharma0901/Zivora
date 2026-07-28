// Centralised runtime config. Values are read from Vite env vars so production
// deployments can override them without touching source code — see .env.example.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://shipzivora.in').replace(/\/$/, '')
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '917678580743'
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'shipzivora@gmail.com'
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/shipzivora'
export const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/shipzivora'
export const BUSINESS_LOCATION = 'Ghaziabad, Uttar Pradesh, India'

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`
