import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { isAdmin, loading } = useAdminAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink text-white">
        <p className="eyebrow">Loading…</p>
      </div>
    )
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
