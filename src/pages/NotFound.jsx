import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="min-h-[70vh] flex items-center justify-center bg-white pt-24">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-5xl mb-6">This Piece Isn't Here</h1>
          <p className="text-ink/60 mb-8">The page you're looking for may have been moved or no longer exists.</p>
          <Link to="/" className="glint inline-block bg-ink text-white px-8 py-4 eyebrow !text-[0.7rem] hover:bg-rosegold transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
