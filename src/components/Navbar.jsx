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

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-inner glass">
          <TransitionLink to="/" className="brand">
            <span className="brand-mark" />
            ApexCole Technology
          </TransitionLink>
          <div className="nav-links">
            {navItems.map((item) => (
              <TransitionLink
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </TransitionLink>
            ))}
            <TransitionLink className="btn btn-primary nav-cta" to="/request-quote">
              Request a Quote
            </TransitionLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
