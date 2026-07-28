import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'
import { useProducts } from '../../hooks/useProducts.js'
import { supabase } from '../../lib/supabaseClient.js'
import { formatPrice } from '../../data/products.js'

export default function AdminDashboard() {
  const { logout, session } = useAdminAuth()
  const { products, loading, error, refetch } = useProducts()
  const [deletingId, setDeletingId] = useState(null)

  const handleDelete = async (product) => {
    if (!window.confirm(`"${product.name}" ko permanently delete karna hai?`)) return
    setDeletingId(product.id)
    const { error: err } = await supabase.from('products').delete().eq('id', product.id)
    setDeletingId(null)
    if (err) {
      alert('Delete nahi ho paya: ' + err.message)
    } else {
      refetch()
    }
  }

  return (
    <div className="min-h-screen bg-beige">
      <header className="bg-ink text-white">
        <div className="container-x flex items-center justify-between h-20">
          <div>
            <p className="eyebrow text-rosegold-light">ZIVORA Admin</p>
            <p className="text-xs text-white/50">{session?.user?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xs text-white/60 hover:text-rosegold-light underline">
              View Site
            </Link>
            <button onClick={logout} className="text-xs eyebrow border border-white/30 px-4 py-2 hover:border-rosegold hover:text-rosegold-light transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="container-x py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl">Products ({products.length})</h1>
          <Link
            to="/admin/products/new"
            className="bg-ink text-white px-6 py-3 eyebrow !text-[0.68rem] hover:bg-rosegold transition-colors"
          >
            + Add Product
          </Link>
        </div>

        {loading && <p className="text-ink/50 text-sm">Loading products…</p>}
        {error && <p className="text-red-600 text-sm">Error: {error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="text-ink/50 text-sm">Koi product nahi hai abhi. "+ Add Product" pe click karke pehla product add karo.</p>
        )}

        {!loading && products.length > 0 && (
          <div className="bg-white rounded-md shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-beige text-left text-ink/50 eyebrow !text-[0.62rem]">
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Best Seller</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-beige last:border-0">
                    <td className="p-4">
                      <img src={p.images[0]} alt={p.name} className="w-12 h-14 object-cover rounded" />
                    </td>
                    <td className="p-4">{p.name}</td>
                    <td className="p-4 text-ink/60">{p.category}</td>
                    <td className="p-4 text-rosegold">{formatPrice(p.price)}</td>
                    <td className="p-4">{p.bestSeller ? 'Yes' : '—'}</td>
                    <td className="p-4 text-right space-x-3 whitespace-nowrap">
                      <Link to={`/admin/products/${p.id}/edit`} className="text-xs underline hover:text-rosegold">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p)}
                        disabled={deletingId === p.id}
                        className="text-xs underline text-red-600 hover:text-red-700 disabled:opacity-50"
                      >
                        {deletingId === p.id ? 'Deleting…' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
