import Navbar from '../components/Navbar';
import { TransitionLink } from '../components/DemoTransition';
import SiteFooter from '../components/SiteFooter';
import hotelHeaderImage from '../demos/hotel-lodge/header.png';

const categories = [
  { name: 'Hotel & Lodge', slug: 'hotel-lodge', route: '/demos/hotel-lodge', description: 'Experience a modern hospitality website.', previewName: 'Emerald Valley Lodge' },
  { name: 'Restaurant', slug: 'restaurant', route: '/demos/restaurant', description: 'A refined dining experience for modern audiences.', previewName: 'Olive & Flame' },
  { name: 'Supermarket', slug: 'supermarket', route: '/demos/supermarket', description: 'A fresh and convenient retail experience.', previewName: 'FreshMart Zambia' },
  { name: 'Salon', slug: 'salon', route: '/demos/salon', description: 'A polished brand experience for beauty businesses.', previewName: 'Maison Lumière Salon' },
  { name: 'School', slug: 'school', route: '/demos/school', description: 'A welcoming digital presence for education.' },
  { name: 'University', slug: 'university', route: '/demos/university', description: 'A prestigious digital campus for modern higher education.', previewName: 'Nexus International University' },
  { name: 'Clinic', slug: 'clinic', route: '/demos/clinic', description: 'A calm and trustworthy healthcare experience.' },
  { name: 'Car Dealership', slug: 'car-dealership', route: '/demos/car-dealership', description: 'A bold digital showroom for modern dealerships.', previewName: 'Velocity Motors' },
];

function ShowcasePage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '3rem 0 4rem' }}>
        <div className="hero-card glass">
          <span className="eyebrow">Website Showcase</span>
          <h1>Where future possibilities become visible.</h1>
          <p className="muted">
            The showcase is opening soon. Each experience is being prepared as a premium preview for the businesses we serve.
          </p>
          <div className="hero-actions">
            <TransitionLink className="btn btn-primary" to="/">
              Return Home
            </TransitionLink>
          </div>
        </div>
        <div className="showcase-grid" style={{ marginTop: '1.5rem' }}>
          {categories.map((item) => (
            <div className="card showcase-card" key={item.slug}>
              <div>
                <div
                  className={`preview-box ${item.slug === 'hotel-lodge' ? 'hotel-preview' : ''}`}
                  style={item.slug === 'hotel-lodge' ? { '--preview-image': `url(${hotelHeaderImage})` } : undefined}
                  aria-label={item.previewName ? `${item.previewName} preview` : undefined}
                >
                  {item.previewName ? <span className="showcase-preview-name">{item.previewName}</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p className="muted">{item.description}</p>
              </div>
              <TransitionLink className="btn btn-secondary" to={item.route}>
                Explore Demo
              </TransitionLink>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default ShowcasePage;
