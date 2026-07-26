import { Link } from 'react-router-dom';

const links = ['Home', 'Services', 'Pricing', 'Quote', 'Contact', 'Website Showcase'];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-inner glass">
          <Link to="/" className="brand">
            <span className="brand-mark" />
            ApexCole Technology
          </Link>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#showcase">Showcase</a>
            <Link to="/showcase">Website Showcase</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
