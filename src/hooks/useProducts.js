import { useCallback, useEffect, useState } from 'react'
import { supabase, mapProductRow } from '../lib/supabaseClient.js'

// Fetches every product from Supabase for public pages (Home, Shop, Collections).
export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (err) setError(err.message)
    else setProducts((data || []).map(mapProductRow))
    setLoading(false)
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { products, loading, error, refetch }
}

// Fetches one product by id (Product Details page), plus a few related
// products from the same collection.
export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      const { data, error: err } = await supabase.from('products').select('*').eq('id', id).single()

      if (cancelled) return

      if (err || !data) {
        setError(err?.message || 'Not found')
        setProduct(null)
        setLoading(false)
        return
      }

      const mapped = mapProductRow(data)
      setProduct(mapped)

      if (mapped.collection) {
        const { data: relatedData } = await supabase
          .from('products')
          .select('*')
          .eq('collection', mapped.collection)
          .neq('id', mapped.id)
          .limit(4)
        if (!cancelled) setRelated((relatedData || []).map(mapProductRow))
      }

      setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
  }, [id])

  return { product, related, loading, error }
}
