import SalonNavbar from '../components/SalonNavbar';
import SalonSection from '../components/SalonSection';
import SalonCard from '../components/SalonCard';
import useSalonIntro from '../hooks/useSalonIntro';
import salonContent from '../data/salonContent';
import '../styles/salon.css';

function SalonPage() {
  useSalonIntro();

  return (
    <div className="salon-shell">
      <SalonNavbar />

      <main>
        <section id="home" className="salon-hero">
          <div className="salon-hero-inner">
            <div className="salon-hero-copy">
              <span className="salon-hero-eyebrow">{salonContent.brand.tagline}</span>
              <h1>{salonContent.hero.title}</h1>
              <p>{salonContent.hero.subtitle}</p>
              <div className="salon-hero-actions">
                <a className="salon-btn primary" href="#booking">
                  {salonContent.hero.actions[0].label}
                </a>
                <a className="salon-btn secondary" href="#services">
                  {salonContent.hero.actions[1].label}
                </a>
              </div>
            </div>
            <div className="salon-hero-photo" />
          </div>
        </section>

        <SalonSection id="about" title="About Maison Lumière" description={salonContent.about.details}>
          <div className="service-grid">
            <article className="card-surface">
              <h3>Our approach to beauty</h3>
              <p>
                Designed around calm, confidence and thoughtful luxury, the salon experience blends bespoke styling with gentle hospitality.
              </p>
            </article>
            <article className="card-surface">
              <h3>Why guests return</h3>
              <p>
                Every appointment is guided by expert care, premium products and styling that feels as natural as it is elegant.
              </p>
            </article>
          </div>
        </SalonSection>

        <SalonSection id="services" title="Salon Services" description="Beauty services for hair, skin and styling that feel polished, modern and effortless.">
          <div className="service-grid">
            {salonContent.services.map((service) => (
              <article key={service.title} className="service-card card-surface">
                <div className="service-card-icon">✧</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </SalonSection>

        <SalonSection id="stylists" title="Meet the Stylists" description="A team of salon artists with refined technique and a warm, luxurious presence.">
          <div className="stylist-grid">
            {salonContent.stylists.map((stylist) => (
              <article key={stylist.name} className="stylist-card card-surface">
                <h3>{stylist.name}</h3>
                <p className="muted">{stylist.role}</p>
                <p>{stylist.highlight}</p>
              </article>
            ))}
          </div>
        </SalonSection>

        <SalonSection id="pricing" title="Pricing" description="Transparent pricing for premium beauty experiences." className="pricing-section">
          <div className="package-grid">
            {salonContent.pricing.map((item) => (
              <SalonCard key={item.tier} title={item.tier} price={item.price} description={item.description} />
            ))}
          </div>
        </SalonSection>

        <SalonSection id="gallery" title="Before & After Gallery" description="Inspiration for the looks, color and polished finishes the salon creates.">
          <div className="gallery-grid">
            <div className="gallery-large salon-gallery-figure">{salonContent.gallery[0].label}</div>
            <div className="gallery-medium salon-gallery-figure">{salonContent.gallery[1].label}</div>
            <div className="gallery-small salon-gallery-figure">{salonContent.gallery[2].label}</div>
            <div className="gallery-medium salon-gallery-figure">{salonContent.gallery[3].label}</div>
            <div className="gallery-large salon-gallery-figure">{salonContent.gallery[4].label}</div>
          </div>
        </SalonSection>

        <SalonSection id="packages" title="Beauty Packages" description="Curated packages for events, refreshes and radiant everyday style.">
          <div className="package-grid">
            {salonContent.packages.map((packageItem) => (
              <SalonCard
                key={packageItem.title}
                title={packageItem.title}
                description={packageItem.description}
                label={packageItem.detail}
              />
            ))}
          </div>
        </SalonSection>

        <SalonSection id="testimonials" title="Customer Testimonials" description="Salon experiences that feel luxurious, professional and unforgettable.">
          <div className="testimonial-grid">
            {salonContent.testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial-card card-surface">
                <blockquote>“{testimonial.quote}”</blockquote>
                <footer>{testimonial.customer}</footer>
              </article>
            ))}
          </div>
        </SalonSection>

        <SalonSection id="booking" title="Online Appointment" description={salonContent.booking.description}>
          <div className="booking-grid">
            <article className="card-surface">
              <h3>{salonContent.booking.title}</h3>
              <form className="booking-form">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email address" />
                <input type="tel" placeholder="Phone number" />
                <select>
                  <option>Choose a service</option>
                  {salonContent.services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
                <input type="text" placeholder="Preferred date" />
                <button type="button" className="salon-btn primary">
                  Request Booking
                </button>
              </form>
            </article>
            <article className="card-surface">
              <h3>Opening Hours</h3>
              <div className="opening-hours">
                {salonContent.hours.map((item) => (
                  <article key={item.day}>
                    <span>{item.day}</span>
                    <span>{item.details}</span>
                  </article>
                ))}
              </div>
              <div className="contact-details" style={{ marginTop: '1.5rem' }}>
                <article>
                  <span>Phone</span>
                  <span>{salonContent.contact.phone}</span>
                </article>
                <article>
                  <span>Email</span>
                  <span>{salonContent.contact.email}</span>
                </article>
              </div>
            </article>
          </div>
        </SalonSection>

        <SalonSection id="contact" title="Contact & Location" description="Visit Maison Lumière or schedule a consultation with our team.">
          <div className="contact-grid">
            <article className="card-surface">
              <h3>Salon Location</h3>
              <p>{salonContent.contact.address}</p>
              <p className="muted">We are located in the heart of the city, steps from premium shopping and dining.</p>
            </article>
            <article className="map-card card-surface">
              <div className="map-placeholder">Google Maps placeholder</div>
            </article>
          </div>
        </SalonSection>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <h3>{salonContent.brand.name}</h3>
            <p className="footer-note">{salonContent.footerNote}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SalonPage;
