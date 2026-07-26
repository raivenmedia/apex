import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>ApexCole</h3>
          <p className="muted">Premium digital experiences for growing businesses.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/showcase">Showcase</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <Link to="/contact">Contact Page</Link>
            </li>
            <li>
              <a href="https://wa.me/260777909863" target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
            <li>
              <a href="mailto:raivenmedia@gmail.com">raivenmedia@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
