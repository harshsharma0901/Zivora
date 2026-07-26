import SEO from '../components/SEO.jsx'
import PageTransition from '../components/PageTransition.jsx'
import PolicyLayout from '../components/PolicyLayout.jsx'

export default function ShippingPolicy() {
  return (
    <PageTransition>
      <SEO title="Shipping Policy" description="Learn about ZIVORA's insured, discreet shipping across India and internationally." path="/shipping-policy" />
      <PolicyLayout title="Shipping Policy" updated="July 2026">
        <p>Every ZIVORA order is packaged discreetly and shipped fully insured, with signature confirmation required upon delivery.</p>

        <h2>Domestic Shipping (India)</h2>
        <ul>
          <li>Standard delivery: 3–5 business days, complimentary on all orders</li>
          <li>Express delivery: 1–2 business days, available at checkout for a fee</li>
        </ul>

        <h2>International Shipping</h2>
        <p>We ship to over 40 countries with delivery typically taking 7–12 business days. Import duties and taxes, where applicable, are the responsibility of the recipient and are calculated at checkout where possible.</p>

        <h2>Order Tracking</h2>
        <p>You will receive a tracking link by email and SMS as soon as your order ships. You can also track your order from your ZIVORA account.</p>

        <h2>Packaging</h2>
        <p>Every piece arrives in our signature rose-gold-lined box, sealed for authenticity, along with its certificate of authenticity and care card.</p>

        <h2>Delays</h2>
        <p>While we aim to meet all stated timelines, custom pieces, remote locations, and customs processing may occasionally extend delivery windows. We will always notify you proactively of any delay.</p>

        <h2>Questions</h2>
        <p>For any shipping concerns, reach us at shipping@zivora.com or via the WhatsApp button on this site.</p>
      </PolicyLayout>
    </PageTransition>
  )
}
