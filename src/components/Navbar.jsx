import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionLink } from './DemoTransition';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Showcase', to: '/showcase' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavSelection = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-inner glass">
          <TransitionLink to="/" className="brand">
            <span className="brand-mark" />
            ApexCole Technology
          </TransitionLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <TransitionLink
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'nav-link active' : 'nav-link'}
                onClick={handleNavSelection}
              >
                {item.label}
              </TransitionLink>
            ))}
            <TransitionLink className="btn btn-primary nav-cta" to="/request-quote" onClick={handleNavSelection}>
              Request a Quote
            </TransitionLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
