import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Shared premium CTA button. Renders a <Link> when `to` is given, or an
 * anchor/button otherwise. `variant="primary"` is solid ink with a glint
 * sweep; `variant="secondary"` is an outlined ghost button — both carry a
 * subtle arrow that nudges forward on hover for a more tactile, premium feel.
 */
export default function Button({ to, href, variant = 'primary', children, className = '', ...rest }) {
  const base =
    'glint inline-flex items-center justify-center gap-2 px-8 py-4 eyebrow !text-[0.7rem] transition-all duration-300 group'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-rosegold hover:shadow-glint hover:-translate-y-0.5'
      : 'border border-ink/30 text-ink hover:border-rosegold hover:text-rosegold hover:-translate-y-0.5'

  const content = (
    <>
      {children}
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </motion.svg>
    </>
  )

  const classes = `${base} ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
