import Navbar from '../components/Navbar';
import Section from '../components/Section';
import MobileAppIllustration from '../components/MobileAppIllustration';
import WebsitePackageMockup from '../components/WebsitePackageMockup';
import SiteFooter from '../components/SiteFooter';
import { TransitionLink } from '../components/DemoTransition';
import {
  getWhatsAppLink,
  WHATSAPP_CUSTOM_SOFTWARE_MESSAGE,
  WHATSAPP_MOBILE_APP_MESSAGE,
} from '../utils/whatsapp';

const serviceSections = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: '🌐',
    description:
      "Your website is your digital identity. We design and build business websites around your brand, audience, and long-term goals.",
    details: [
      'Business profile websites, landing pages and custom websites',
      'Responsive layouts for desktop, tablet and mobile',
      'SEO-ready structure and performance optimization',
      'Scalable architecture for future feature upgrades',
    ],
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    icon: '💻',
    description:
      'Custom software systems built to automate workflows, simplify operations and improve decision-making in your business.',
    details: [
      'Inventory, POS, CRM and analytics dashboards',
      'School, hospital, pharmacy and property management systems',
      'Workflow automation and role-based internal portals',
      'Tailored enterprise software designed around your process',
    ],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    icon: '📱',
    description:
      'Android and iOS mobile apps designed for speed, usability and real business outcomes across multiple industries.',
    details: [
      'Booking, delivery, e-commerce and restaurant mobile apps',
      'Customer-facing and internal operations applications',
      'Intuitive UI patterns and reliable mobile performance',
      'Cross-platform delivery options based on your requirements',
    ],
  },
];

const technologyHighlights = [
  'React Frontend Development',
  'Node.js API Integrations',
  'Cloud-Ready Deployment',
  'Performance Monitoring',
  'Secure Authentication Flows',
  'Scalable Database Design',
];

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="hero">
          <div className="hero-card glass">
            <div className="hero-content">
              <span className="eyebrow">Services</span>
              <h1>Solutions Designed Around Your Business.</h1>
              <p>
                Explore our detailed service capabilities across websites, digital systems and mobile applications.
              </p>
              <div className="hero-actions">
                <TransitionLink className="btn btn-primary" to="/pricing">
                  View Pricing Packages
                </TransitionLink>
                <TransitionLink className="btn btn-secondary" to="/request-quote">
                  Request a Quote
                </TransitionLink>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="service-grid" style={{ gridTemplateColumns: '1fr', gap: '1.2rem' }}>
            {serviceSections.map((item) => (
              <article className="card" key={item.id}>
                <div className="service-icon">{item.icon}</div>
                <h2>{item.title}</h2>
                <p className="muted" style={{ marginBottom: '0.9rem' }}>{item.description}</p>
                <ul className="package-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="showcase-grid" style={{ marginBottom: '1rem' }}>
            <article className="card package-card website-package-card">
              <h3>Website Development Illustration</h3>
              <p className="muted" style={{ marginBottom: '0.8rem' }}>
                A visual preview of the polished website experiences we build for modern businesses.
              </p>
              <WebsitePackageMockup variant="business" />
            </article>
            <article className="card package-card mobile-app-card">
              <h3>Mobile Application Illustration</h3>
              <p className="muted" style={{ marginBottom: '0.8rem' }}>
                Concept visuals for premium mobile app workflows and customer-facing experiences.
              </p>
              <MobileAppIllustration
                service={{
                  name: 'Mobile App Concept',
                  variant: 'business',
                  description: 'Premium app concept designed around your operations.',
                  mockups: ['Dashboard', 'Workflow'],
                  badges: ['Mobile First', 'Fast UX', 'Secure'],
                }}
              />
            </article>
          </div>

          <article className="pricing-cta-card">
            <h3>Technology & Delivery Standards</h3>
            <p>Every ApexCole project is delivered with modern engineering practices and long-term scalability in mind.</p>
            <div className="feature-scroll">
              {technologyHighlights.map((feature) => (
                <span className="feature-chip" key={feature}>
                  <span className="feature-icon">✦</span>
                  {feature}
                </span>
              ))}
            </div>
          </article>
        </Section>

        <Section>
          <div className="cta-card">
            <h2>Ready To Discuss Your Project?</h2>
            <p className="muted">Tell us what you need and receive a professional recommendation with a tailored quotation.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary" href={getWhatsAppLink(WHATSAPP_CUSTOM_SOFTWARE_MESSAGE)} target="_blank" rel="noreferrer">
                Request Digital Solution
              </a>
              <a className="btn btn-secondary" href={getWhatsAppLink(WHATSAPP_MOBILE_APP_MESSAGE)} target="_blank" rel="noreferrer">
                Request Mobile App Quote
              </a>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

export default ServicesPage;
