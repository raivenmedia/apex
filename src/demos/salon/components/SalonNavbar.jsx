import { useEffect, useState } from 'react';
import salonContent from '../data/salonContent';

function SalonNavbar() {
  const [activeId, setActiveId] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['home', 'about', 'services', 'gallery', 'testimonials', 'booking', 'contact'];
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
    <header className="salon-navbar">
      <div className="salon-navbar-inner">
        <a className="salon-brand" href="/demos/salon">
          <span className="salon-brand-mark">ML</span>
          <span>{salonContent.brand.name}</span>
        </a>
        <nav className="salon-nav-links">
          {salonContent.nav.map((item) => (
            <a key={item.label} href={item.href} className={activeId === item.href ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SalonNavbar;
