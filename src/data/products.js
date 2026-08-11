// Collection cards shown on the Home and Collections pages.
// Images point to real ZIVORA product photos stored in Supabase.
const STORAGE = 'https://ltfdjwhrjnutqtbwfats.supabase.co/storage/v1/object/public/product-images'

export const collections = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Studs, hoops & drops for everyday shine',
    image: `${STORAGE}/gold-pearl-hoop-earrings.jpg`,
    description: 'From everyday studs to statement hoops — affordable fashion earrings designed to shine beyond ordinary.'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Chains, pendants & pearl pieces',
    image: `${STORAGE}/gold-chain-necklace.jpg`,
    description: 'Layer-ready chains and statement pendants — a necklace for every neckline and every day.'
  },
  {
    id: 'bracelets',
    name: 'Bracelets & Kadas',
    tagline: 'Cuffs, kadas & stacking bands',
    image: `${STORAGE}/gold-flower-kada-a.jpg`,
    description: 'Bold kadas and delicate cuffs, gold-plated and built to hold their shine.'
  },
  {
    id: 'rings',
    name: 'Rings',
    tagline: 'Statement rings for every hand',
    image: `${STORAGE}/gold-panther-ring.jpg`,
    description: 'From subtle bands to bold statement rings — pieces designed to be noticed.'
  }
]

export const formatPrice = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)
