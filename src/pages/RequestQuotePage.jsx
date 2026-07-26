import { useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SiteFooter from '../components/SiteFooter';

function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <Section className="hero">
          <div className="hero-card glass">
            <div className="hero-content">
              <span className="eyebrow">Request a Quote</span>
              <h1>Tell Us About Your Project Requirements.</h1>
              <p>Complete the form below and our team will prepare a professional quotation for your business.</p>
            </div>
          </div>
        </Section>

        <Section>
          <article className="card quote-card">
            <h2>Quotation Request Form</h2>
            <form className="apex-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Company
                <input type="text" name="company" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required />
              </label>
              <label>
                Service Required
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="digital-solutions">Digital Solutions</option>
                  <option value="mobile-applications">Mobile Applications</option>
                </select>
              </label>
              <label>
                Project Description
                <textarea name="description" rows="6" required />
              </label>
              <label>
                Optional File Upload
                <input type="file" name="attachment" />
              </label>
              <button type="submit" className="btn btn-primary">Submit Request</button>
              {submitted ? <p className="muted">Thank you. Your quotation request has been recorded for follow-up.</p> : null}
            </form>
          </article>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

export default RequestQuotePage;
