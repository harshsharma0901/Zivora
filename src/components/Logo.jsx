/**
 * Official ZIVORA branding — full logo (gold script wordmark + tagline) and
 * the Z monogram, both supplied as artwork and processed to transparent PNG.
 * Source files: public/logo/zivora-logo.png, public/logo/zivora-mark.png
 * (masters at public/logo/*.png — regenerate favicon/app icons from
 * zivora-mark-square.png if the artwork ever changes).
 *
 * Sizing is height-driven only (className sets height + w-auto) so the logo
 * scales without ever stretching or cropping; object-contain is a safety net.
 */

export function LogoMark({ className = 'h-9 w-auto' }) {
  return (
    <img
      src="/logo/zivora-mark.png"
      alt="ZIVORA"
      width="800"
      height="615"
      loading="eager"
      decoding="async"
      className={`object-contain ${className}`}
    />
  )
}

export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src="/logo/zivora-logo.png"
      alt="ZIVORA — Shine Beyond Ordinary"
      width="1000"
      height="460"
      loading="eager"
      decoding="async"
      className={`object-contain ${className}`}
    />
  )
}
