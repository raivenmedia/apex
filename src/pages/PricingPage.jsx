import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SiteFooter from '../components/SiteFooter';
import WebsitePackageMockup from '../components/WebsitePackageMockup';
import { getWhatsAppLink, WHATSAPP_PACKAGE_MESSAGES } from '../utils/whatsapp';

const websitePackages = [
  {
    name: 'Business Profile Website',
    variant: 'business',
    regularPrice: 'K2,500',
    promoPrice: 'K2,000',
    discount: '20% OFF',
    savings: 'Save K500',
    features: ['Responsive Website', 'Home Page', 'About Page', 'Services', 'Contact Page', 'Google Maps', 'WhatsApp Integration', 'Contact Form', 'Basic SEO Setup'],
    button: 'Request This Package',
    message: WHATSAPP_PACKAGE_MESSAGES.business,
  },
  {
    name: 'Landing Page',
    variant: 'landing',
    regularPrice: 'K3,125',
    promoPrice: 'K2,500',
    discount: '20% OFF',
    savings: 'Save K625',
    features: ['One High-Converting Page', 'Hero Section', 'Call-To-Action Sections', 'Contact Form', 'WhatsApp Button', 'Mobile Responsive', 'Basic SEO'],
    button: 'Request This Package',
    message: WHATSAPP_PACKAGE_MESSAGES.landing,
  },
  {
    name: 'Custom Website',
    variant: 'custom',
    regularPrice: 'K8,000',
    promoPrice: 'K5,000',
    discount: '38% OFF',
    savings: 'Save K3,000',
    features: ['Project Setup', 'Custom UI/UX Design', 'Fully Responsive Design', 'Three Custom Features Included'],
    button: 'Build My Website',
    note: 'The starting package includes any three custom features. Additional features can be added based on your project requirements.',
    note2: 'A fully customised website designed around your business, brand and requirements.',
    message: WHATSAPP_PACKAGE_MESSAGES.custom,
  },
];

function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="hero">
          <div className="hero-card glass">
            <div className="hero-content">
              <span className="eyebrow">Pricing</span>
              <h1>Website Packages Built For Business Growth.</h1>
              <p>
                Choose the package that matches your current needs and scale with ApexCole Technology as your business grows.
              </p>
            </div>
          </div>
        </Section>

        <Section className="pricing-section">
          <div className="promotion-banner" role="status">
            <div>
              <p className="promotion-eyebrow">ApexCole Launch Promotion</p>
              <h3>Promotional prices are available for a limited time. Request your quotation on WhatsApp today.</h3>
            </div>
            <span className="promotion-badge">Limited Time Offer</span>
          </div>

          <div className="pricing-grid">
            {websitePackages.map((pkg) => (
              <article className="card package-card website-package-card" key={pkg.name}>
                <div className="promotion-badges">
                  <span className="promo-badge">Website Package</span>
                  <span className="promo-ribbon">{pkg.discount}</span>
                </div>
                <WebsitePackageMockup variant={pkg.variant} />
                <h3>{pkg.name}</h3>
                <div className="pricing-block">
                  <p className="package-label">Regular Price</p>
                  <p className="package-regular">{pkg.regularPrice}</p>
                  <p className="package-label">Now Only</p>
                  <p className="package-price">{pkg.promoPrice}</p>
                  <p className="package-savings">{pkg.savings}</p>
                </div>
                <ul className="package-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {pkg.note ? <p className="package-note">{pkg.note}</p> : null}
                {pkg.note2 ? <p className="package-note secondary-note">{pkg.note2}</p> : null}
                <a className="btn btn-primary package-btn" href={getWhatsAppLink(pkg.message)} target="_blank" rel="noreferrer">
                  {pkg.button}
                </a>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

export default PricingPage;
