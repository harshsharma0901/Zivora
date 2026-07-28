import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../config.js'

export default function SEO({ title, description, path = '/', jsonLd }) {
  const fullTitle = title ? `${title} | ZIVORA` : 'ZIVORA — Shine Beyond Ordinary'
  const url = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Luxury fine jewellery, handcrafted to be heirlooms.'} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Luxury fine jewellery, handcrafted to be heirlooms.'} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Luxury fine jewellery, handcrafted to be heirlooms.'} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
