import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ZIVORA` : 'ZIVORA — Shine Beyond Ordinary'
  const url = `https://www.zivora.com${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Luxury fine jewellery, handcrafted to be heirlooms.'} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Luxury fine jewellery, handcrafted to be heirlooms.'} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
