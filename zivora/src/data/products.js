// Placeholder imagery via Unsplash — replace with real product photography.
const img = (seed, w = 900, h = 1100) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const collections = [
  {
    id: 'aurelia',
    name: 'Aurelia',
    tagline: 'Sunlit gold, cast in motion',
    image: img('photo-1611652022419-a9419f74343d'),
    description: 'A collection of warm gold pieces inspired by the first light of dawn — fluid lines that catch every angle.'
  },
  {
    id: 'lumiere',
    name: 'Lumière Noire',
    tagline: 'Black diamond, quiet drama',
    image: img('photo-1599643477877-530eb83abc8e'),
    description: 'Onyx and black diamond set in blackened platinum, for those who prefer their shine understated.'
  },
  {
    id: 'petale',
    name: 'Pétale',
    tagline: 'Botanical curves in rose gold',
    image: img('photo-1573408301185-9146fe634ad0'),
    description: 'Hand-sculpted petal motifs in rose gold — soft, organic, unmistakably ZIVORA.'
  },
  {
    id: 'eterna',
    name: 'Eterna',
    tagline: 'The bridal edit',
    image: img('photo-1605100804763-247f67b3557e'),
    description: 'Engagement rings and eternity bands, cut to carry a promise for a lifetime.'
  }
]

export const products = [
  {
    id: 'p1',
    name: 'Aurelia Halo Ring',
    collection: 'aurelia',
    category: 'Rings',
    price: 128000,
    compareAt: 145000,
    rating: 4.9,
    reviewsCount: 132,
    bestSeller: true,
    material: '18K Rose Gold, VVS Diamond',
    images: [img('photo-1605100804763-247f67b3557e'), img('photo-1603561591411-07134e71a2a9')],
    description: 'A radiant halo of pavé diamonds encircling a brilliant-cut centre stone, hand-set in warm 18K rose gold.',
    details: ['18K solid rose gold band', 'VVS1 clarity centre diamond, 0.9ct', 'Pavé halo, 0.35ct total', 'Comes with lifetime resizing']
  },
  {
    id: 'p2',
    name: 'Lumière Noire Cuff',
    collection: 'lumiere',
    category: 'Bracelets',
    price: 96000,
    rating: 4.8,
    reviewsCount: 84,
    bestSeller: true,
    material: 'Blackened Platinum, Black Diamond',
    images: [img('photo-1599643478518-a784e5dc4c8f'), img('photo-1611591437281-460bfbe1220a')],
    description: 'A sculptural open cuff in blackened platinum, lined with a river of black diamonds.',
    details: ['Blackened platinum finish', 'Black diamond pavé, 1.2ct total', 'Adjustable open cuff fit']
  },
  {
    id: 'p3',
    name: 'Pétale Drop Earrings',
    collection: 'petale',
    category: 'Earrings',
    price: 74000,
    rating: 4.9,
    reviewsCount: 201,
    bestSeller: true,
    material: '18K Rose Gold, Morganite',
    images: [img('photo-1620656798579-1984d9e87df7'), img('photo-1573408301185-9146fe634ad0')],
    description: 'Petal-formed drops in brushed rose gold, each set with a blush morganite stone.',
    details: ['18K rose gold, brushed finish', 'Morganite, 1.4ct each', 'Secure butterfly backing']
  },
  {
    id: 'p4',
    name: 'Eterna Bridal Band',
    collection: 'eterna',
    category: 'Rings',
    price: 154000,
    rating: 5.0,
    reviewsCount: 58,
    bestSeller: false,
    material: 'Platinum, Diamond',
    images: [img('photo-1602752275849-8f38b437b3fb'), img('photo-1587467512961-120760940315')],
    description: 'A continuous eternity band, hand-channel-set with round brilliant diamonds.',
    details: ['950 platinum band', 'Channel-set diamonds, 1.8ct total', 'Comfort-fit interior']
  },
  {
    id: 'p5',
    name: 'Aurelia Chain Necklace',
    collection: 'aurelia',
    category: 'Necklaces',
    price: 88000,
    rating: 4.7,
    reviewsCount: 96,
    bestSeller: false,
    material: '18K Gold',
    images: [img('photo-1611652022419-a9419f74343d'), img('photo-1611591437281-460bfbe1220a')],
    description: 'A sculpted link chain in warm 18K gold, substantial enough to wear alone.',
    details: ['18K solid gold', 'Hand-finished links', '18-inch length, adjustable clasp']
  },
  {
    id: 'p6',
    name: 'Lumière Solitaire Pendant',
    collection: 'lumiere',
    category: 'Necklaces',
    price: 112000,
    rating: 4.9,
    reviewsCount: 73,
    bestSeller: true,
    material: 'Blackened Gold, Black Diamond',
    images: [img('photo-1599643477877-530eb83abc8e'), img('photo-1602751584547-91a2a09e2543')],
    description: 'A single black diamond solitaire, suspended from a fine blackened gold chain.',
    details: ['Blackened 18K gold', 'Black diamond, 0.75ct', '16-inch chain with 2-inch extender']
  },
  {
    id: 'p7',
    name: 'Pétale Stacking Ring Set',
    collection: 'petale',
    category: 'Rings',
    price: 62000,
    rating: 4.8,
    reviewsCount: 145,
    bestSeller: false,
    material: '18K Rose Gold',
    images: [img('photo-1603561591411-07134e71a2a9'), img('photo-1605100804763-247f67b3557e')],
    description: 'Three slender petal-textured bands, designed to be worn together or apart.',
    details: ['Set of 3 stacking bands', '18K rose gold', 'Mixed textured + polished finish']
  },
  {
    id: 'p8',
    name: 'Eterna Tennis Bracelet',
    collection: 'eterna',
    category: 'Bracelets',
    price: 168000,
    rating: 5.0,
    reviewsCount: 41,
    bestSeller: false,
    material: 'Platinum, Diamond',
    images: [img('photo-1611591437281-460bfbe1220a'), img('photo-1599643478518-a784e5dc4c8f')],
    description: 'A classic tennis line of round brilliant diamonds, claw-set in platinum.',
    details: ['950 platinum setting', 'Diamonds, 4.2ct total', 'Box clasp with safety catch']
  }
]

export const getProductById = (id) => products.find((p) => p.id === id)
export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, limit)

export const formatPrice = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)
