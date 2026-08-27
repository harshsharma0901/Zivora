import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// If these are missing, the admin panel and live product data won't work —
// see ADMIN_SETUP.md for how to get them and add them to .env.
export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!supabaseConfigured) {
  console.warn(
    '[ZIVORA] Supabase is not configured — VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are missing from .env. ' +
    'The admin panel and live product listing will not work until these are set. See ADMIN_SETUP.md.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

// Converts a database row (snake_case) into the camelCase shape every
// existing component (ProductCard, ProductDetails, Shop, Home) already expects.
export function mapProductRow(row) {
  return {
    id: row.id,
    name: row.name,
    collection: row.collection,
    category: row.category,
    price: Number(row.price),
    compareAt: row.compare_at != null ? Number(row.compare_at) : undefined,
    rating: Number(row.rating ?? 5),
    reviewsCount: Number(row.reviews_count ?? 0),
    bestSeller: Boolean(row.best_seller),
    material: row.material || '',
    description: row.description || '',
    details: row.details || [],
    inStock: row.in_stock !== false,
    images: row.images && row.images.length ? row.images : ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&h=1100&q=80']
  }
}

// Converts an admin-panel form (camelCase) back into DB column names for insert/update.
export function toProductRow(form) {
  return {
    name: form.name,
    collection: form.collection || null,
    category: form.category,
    price: Number(form.price),
    compare_at: form.compareAt ? Number(form.compareAt) : null,
    rating: form.rating ? Number(form.rating) : 5,
    reviews_count: form.reviewsCount ? Number(form.reviewsCount) : 0,
    best_seller: Boolean(form.bestSeller),
    material: form.material || '',
    description: form.description || '',
    details: form.details || [],
    in_stock: form.inStock !== false,
    images: form.images || []
  }
}
