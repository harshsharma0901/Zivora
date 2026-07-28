import { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'
import { supabaseConfigured } from '../../lib/supabaseClient.js'

export default function AdminLogin() {
  const { login, isAdmin, loading } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  if (!loading && isAdmin) {
    return <Navigate to={location.state?.from || '/admin'} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(email, password)
      navigate('/admin', { replace: true })
    } catch (err) {
      setError(err.message === 'Invalid login credentials' ? 'Email ya password galat hai.' : err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-6">
      <div className="w-full max-w-sm bg-white rounded-md shadow-soft p-8">
        <p className="eyebrow mb-2">ZIVORA Admin</p>
        <h1 className="font-display text-3xl mb-6">Sign In</h1>

        {!supabaseConfigured && (
          <p className="text-xs text-rosegold-dark bg-beige rounded p-3 mb-5">
            Supabase configured nahi hai abhi. .env mein VITE_SUPABASE_URL aur VITE_SUPABASE_ANON_KEY add karo — dekho ADMIN_SETUP.md.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-xs eyebrow !text-ink/50 mb-2 block" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-ink/20 px-4 py-3 text-sm outline-none focus:border-rosegold rounded-md"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-ink text-white py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors disabled:opacity-50"
          >
            {submitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
