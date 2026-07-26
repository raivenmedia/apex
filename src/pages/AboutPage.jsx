import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SiteFooter from '../components/SiteFooter';
import { TransitionLink } from '../components/DemoTransition';

const values = [
  'Excellence in every detail',
  'Client-first collaboration',
  'Innovation with business impact',
  'Transparency and accountability',
  'Long-term technology partnership',
];

const process = [
  'Discovery and business understanding',
  'Planning and solution architecture',
  'Design and user experience mapping',
  'Development and quality assurance',
  'Launch, support and improvement',
];

const technologies = [
  'React',
  'JavaScript',
  'Node.js',
  'Modern UI/UX systems',
  'Cloud hosting services',
  'API integrations',
  'Performance optimization',
  'Search optimization best practices',
];

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="hero">
          <div className="hero-card glass">
            <div className="hero-content">
              <span className="eyebrow">About Us</span>
              <h1>Building Digital Confidence For Modern Businesses.</h1>
              <p>
                ApexCole Technology is a digital partner focused on helping businesses establish, improve and scale their online presence with clarity and confidence.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="showcase-grid">
            <article className="card">
              <h2>Our Mission</h2>
              <p>To deliver premium digital solutions that solve real business problems and create measurable growth.</p>
            </article>
            <article className="card">
              <h2>Our Vision</h2>
              <p>To become a trusted technology partner for ambitious businesses seeking digital transformation in Zambia and beyond.</p>
            </article>
            <article className="card">
              <h2>Why Choose ApexCole Technology</h2>
              <p>We combine strategy, design and engineering to create solutions that are both beautiful and commercially effective.</p>
            </article>
          </div>
        </Section>

        <Section>
          <div className="section-heading">
            <h2>Our Values</h2>
            <p>The standards that guide every project we deliver.</p>
          </div>
          <div className="benefit-grid">
            {values.map((value) => (
              <article className="card" key={value}>
                <div className="benefit-icon">✦</div>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="showcase-grid">
            <article className="card">
              <h2>Development Process</h2>
              <ul className="package-list">
                {process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h2>Technologies We Use</h2>
              <ul className="package-list">
                {technologies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section>
          <div className="cta-card">
            <h2>Start Your Digital Journey With ApexCole</h2>
            <p className="muted">Let us transform your ideas into a modern digital experience built for growth.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <TransitionLink className="btn btn-primary" to="/request-quote">
                Request a Quote
              </TransitionLink>
              <TransitionLink className="btn btn-secondary" to="/showcase">
                View Showcase
              </TransitionLink>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

export default AboutPage;
