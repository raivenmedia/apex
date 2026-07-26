import { useEffect, useState } from 'react';
import restaurantContent from '../data/restaurantContent';

function RestaurantNavbar({ cartCount = 0 }) {
  const [activeId, setActiveId] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ['home', 'about', 'menu', 'order', 'contact'];
    const handleScroll = () => {
      const nextActive = ids.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        return element.getBoundingClientRect().top >= 0 && element.getBoundingClientRect().top < window.innerHeight * 0.3;
      });
      setActiveId(nextActive ? `#${nextActive}` : '#contact');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="restaurant-navbar">
      <div className="restaurant-navbar-inner">
        <a className="restaurant-brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="restaurant-brand-mark">{restaurantContent.brand.monogram}</span>
          <span>{restaurantContent.brand.name}</span>
        </a>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={`restaurant-nav-links ${menuOpen ? 'open' : ''}`}>
          {restaurantContent.nav.map((item) => (
            <a key={item.label} href={item.href} className={activeId === item.href ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-reserve" href="#order" onClick={() => setMenuOpen(false)}>Cart ({cartCount}) ↗</a>
        </nav>
      </div>
    </header>
  );
}

export default RestaurantNavbar;
