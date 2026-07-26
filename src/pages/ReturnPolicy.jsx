import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import PolicyLayout from '../components/PolicyLayout.jsx'

export default function ReturnPolicy() {
  return (
    <PageTransition>
      <SEO title="Return Policy" description="ZIVORA's return and exchange policy for fine jewellery purchases." path="/return-policy" />
      <PolicyLayout title="Return Policy" updated="July 2026">
        <p>We want you to love your ZIVORA piece. If you are not fully satisfied, we offer a straightforward return and exchange process.</p>

        <h2>30-Day Returns</h2>
        <p>Unworn, unaltered pieces in their original packaging with all certificates and tags attached may be returned within 30 days of delivery for a full refund to your original payment method.</p>

        <h2>Exchanges</h2>
        <p>Prefer a different size or design? We offer free exchanges within 30 days of delivery, subject to availability. Resized rings are eligible for exchange only for store credit.</p>

        <h2>Non-Returnable Items</h2>
        <ul>
          <li>Custom or bespoke commissioned pieces</li>
          <li>Earrings, for hygiene reasons, once removed from sealed packaging</li>
          <li>Gift cards</li>
        </ul>

        <h2>How to Start a Return</h2>
        <p>Email returns@zivora.com with your order number and reason for return. Our concierge team will issue a prepaid, insured shipping label within 24 hours.</p>

        <h2>Refund Timeline</h2>
        <p>Once we receive and inspect your return, refunds are processed within 5–7 business days. It may take an additional billing cycle for the credit to appear on your statement.</p>

        <h2>Damaged or Incorrect Items</h2>
        <p>If your piece arrives damaged or incorrect, contact us within 48 hours of delivery with photos, and we will arrange a free replacement or full refund.</p>
      </PolicyLayout>
    </PageTransition>
  )
}
