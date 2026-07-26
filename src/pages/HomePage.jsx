import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SiteFooter from '../components/SiteFooter';
import { TransitionLink } from '../components/DemoTransition';
import { getWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from '../utils/whatsapp';
import hotelHeaderImage from '../demos/hotel-lodge/header.png';

const servicePreview = [
  {
    title: 'Website Development',
    icon: '🌐',
    text: 'Professional websites designed around your business goals, audience and brand identity.',
    to: '/services',
  },
  {
    title: 'Digital Solutions',
    icon: '💻',
    text: 'Custom business software to automate workflows and improve operational efficiency.',
    to: '/services',
  },
  {
    title: 'Mobile Applications',
    icon: '📱',
    text: 'Fast, intuitive mobile experiences for Android and iOS business use cases.',
    to: '/services',
  },
];

const digitalReasons = [
  {
    title: 'Customer Visibility',
    text: 'Modern customers discover and evaluate businesses online before they make contact.',
  },
  {
    title: 'Operational Efficiency',
    text: 'Digital systems remove repetitive work and improve speed in daily operations.',
  },
  {
    title: 'Growth Readiness',
    text: 'A strong digital foundation helps your business scale with confidence.',
  },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Section id="hero" className="hero">
          <div className="hero-card glass">
            <div className="orb one" />
            <div className="orb two" />
            <div className="hero-content">
              <span className="eyebrow">ApexCole Technology</span>
              <h1>Build the Future of Your Business.</h1>
              <p>
                Professional websites, mobile applications and business software designed around your business goals.
              </p>
              <div className="hero-actions">
                <TransitionLink className="btn btn-primary" to="/showcase">
                  Explore Website Showcase
                </TransitionLink>
                <TransitionLink className="btn btn-secondary" to="/request-quote">
                  Request a Quote
                </TransitionLink>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">Scroll to discover</div>
        </Section>

        <Section>
          <div className="transform-card">
            <h2>Brief Introduction</h2>
            <p className="muted">
              ApexCole Technology helps businesses build premium digital experiences through strategy, design and modern engineering.
            </p>
          </div>
        </Section>

        <Section>
          <div className="section-heading">
            <div>
              <h2>Services Preview</h2>
              <p>Explore our core services and continue to the full services page for complete details.</p>
            </div>
          </div>
          <div className="service-grid">
            {servicePreview.map((service) => (
              <article className="card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="hero-actions" style={{ marginTop: '0.9rem' }}>
                  <TransitionLink className="btn btn-secondary" to={service.to}>
                    Learn More
                  </TransitionLink>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="section-heading">
            <div>
              <h2>Why Businesses Go Digital</h2>
              <p>Digital transformation is now essential for visibility, trust and long-term growth.</p>
            </div>
          </div>
          <div className="benefit-grid">
            {digitalReasons.map((reason) => (
              <article className="card" key={reason.title}>
                <div className="benefit-icon">✦</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="section-heading">
            <div>
              <h2>Featured Showcase Preview</h2>
              <p>Take a look at one of our premium interactive demo experiences.</p>
            </div>
          </div>
          <div className="showcase-grid">
            <article className="card showcase-card">
              <div>
                <div className="preview-box hotel-preview" style={{ '--preview-image': `url(${hotelHeaderImage})` }}>
                  <span className="showcase-preview-name">Emerald Valley Lodge</span>
                </div>
                <h3>Hotel & Lodge Experience</h3>
                <p className="muted">A modern hospitality website preview with premium visuals and interactions.</p>
              </div>
              <TransitionLink className="btn btn-secondary" to="/showcase">
                Learn More
              </TransitionLink>
            </article>
          </div>
        </Section>

        <Section>
          <div className="cta-card">
            <h2>Ready to Build Your Digital Presence?</h2>
            <p className="muted">Let&apos;s turn your vision into something people will remember.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <TransitionLink className="btn btn-primary" to="/request-quote">
                Request a Quote
              </TransitionLink>
              <a className="btn btn-secondary" href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}

export default HomePage;
