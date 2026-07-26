import { useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SiteFooter from '../components/SiteFooter';
import { getWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from '../utils/whatsapp';

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <Section className="hero">
          <div className="hero-card glass">
            <div className="hero-content">
              <span className="eyebrow">Contact</span>
              <h1>Let&apos;s Talk About Your Project.</h1>
              <p>Reach out through the contact form, WhatsApp or direct channels below.</p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="contact-layout">
            <article className="card">
              <h2>Contact Form</h2>
              <form className="apex-form" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email Address
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="5" required />
                </label>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {sent ? <p className="muted">Thank you. Your message has been prepared for follow-up.</p> : null}
              </form>
            </article>

            <article className="card">
              <h2>Direct Contact</h2>
              <ul className="package-list">
                <li>Email: raivenmedia@gmail.com</li>
                <li>Phone: +260 777 909 863</li>
                <li>Business Hours: Monday - Friday, 08:00 - 17:00</li>
                <li>Office Location: Lusaka, Zambia (Placeholder)</li>
              </ul>
              <div className="hero-actions" style={{ marginTop: '1rem' }}>
                <a className="btn btn-primary" href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </article>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

export default ContactPage;
