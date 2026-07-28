import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'
import { supabase, toProductRow, mapProductRow } from '../../lib/supabaseClient.js'

const categories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets']

const emptyForm = {
  name: '',
  category: 'Rings',
  collection: '',
  price: '',
  compareAt: '',
  material: '',
  description: '',
  details: '',
  bestSeller: false
}

export default function AdminProductForm() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const { session } = useAdminAuth()

  const [form, setForm] = useState(emptyForm)
  const [images, setImages] = useState([]) // existing image URLs (edit mode)
  const [newFiles, setNewFiles] = useState([]) // File objects staged for upload
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isEdit) return
    let cancelled = false
    async function load() {
      const { data, error: err } = await supabase.from('products').select('*').eq('id', id).single()
      if (cancelled) return
      if (err || !data) {
        setError('Product load nahi ho paya.')
        setLoading(false)
        return
      }
      const p = mapProductRow(data)
      setForm({
        name: p.name,
        category: p.category,
        collection: p.collection || '',
        price: String(p.price),
        compareAt: p.compareAt ? String(p.compareAt) : '',
        material: p.material,
        description: p.description,
        details: (p.details || []).join('\n'),
        bestSeller: p.bestSeller
      })
      setImages(p.images || [])
      setLoading(false)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [id, isEdit])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleFileSelect = (e) => {
    setNewFiles(Array.from(e.target.files || []))
  }

  const removeExistingImage = (url) => {
    setImages((imgs) => imgs.filter((i) => i !== url))
  }

  const uploadNewFiles = async () => {
    const uploadedUrls = []
    for (const file of newFiles) {
      const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')
      const path = `${Date.now()}-${safeName}`
      const { error: uploadErr } = await supabase.storage.from('product-images').upload(path, file)
      if (uploadErr) throw uploadErr
      const { data: publicUrlData } = supabase.storage.from('product-images').getPublicUrl(path)
      uploadedUrls.push(publicUrlData.publicUrl)
    }
    return uploadedUrls
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)
    try {
      const uploadedUrls = await uploadNewFiles()
      const finalImages = [...images, ...uploadedUrls]

      if (finalImages.length === 0) {
        throw new Error('Kam se kam ek image chahiye.')
      }

      const row = toProductRow({
        ...form,
        details: form.details.split('\n').map((d) => d.trim()).filter(Boolean),
        images: finalImages
      })

      if (isEdit) {
        const { error: err } = await supabase.from('products').update(row).eq('id', id)
        if (err) throw err
      } else {
        const { error: err } = await supabase.from('products').insert(row)
        if (err) throw err
      }

      navigate('/admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <p className="eyebrow text-ink/50">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-beige">
      <header className="bg-ink text-white">
        <div className="container-x flex items-center justify-between h-20">
          <p className="eyebrow text-rosegold-light">{isEdit ? 'Edit Product' : 'Add Product'}</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50">{session?.user?.email}</span>
            <Link to="/admin" className="text-xs eyebrow border border-white/30 px-4 py-2 hover:border-rosegold hover:text-rosegold-light transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="container-x py-10 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-soft p-8 space-y-6">
          <Field label="Product Name" name="name" value={form.name} onChange={handleChange} required />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs eyebrow !text-ink/50 mb-2 block">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <Field label="Collection (optional)" name="collection" value={form.collection} onChange={handleChange} placeholder="e.g. aurelia" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Price (₹)" name="price" type="number" value={form.price} onChange={handleChange} required />
            <Field label="Compare-at Price (₹, optional)" name="compareAt" type="number" value={form.compareAt} onChange={handleChange} />
          </div>

          <Field label="Material" name="material" value={form.material} onChange={handleChange} placeholder="e.g. 18K Rose Gold, VVS Diamond" />

          <div>
            <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
            />
          </div>

          <div>
            <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor="details">Details (ek line mein ek point)</label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={form.details}
              onChange={handleChange}
              placeholder={'18K solid rose gold band\nVVS1 clarity centre diamond, 0.9ct'}
              className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="bestSeller" checked={form.bestSeller} onChange={handleChange} />
            Best Seller (Home page pe dikhega)
          </label>

          <div>
            <label className="text-xs eyebrow !text-ink/50 mb-2 block">Images</label>
            {images.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-3">
                {images.map((url) => (
                  <div key={url} className="relative">
                    <img src={url} alt="" className="w-20 h-20 object-cover rounded-md" />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(url)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-white rounded-full text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input type="file" accept="image/*" multiple onChange={handleFileSelect} className="text-sm" />
            {newFiles.length > 0 && <p className="text-xs text-ink/50 mt-2">{newFiles.length} nayi image(s) upload hongi save karne pe.</p>}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-ink text-white py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving…' : isEdit ? 'Save Changes' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
      />
    </div>
  )
}
