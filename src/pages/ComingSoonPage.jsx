import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ComingSoonPage() {
  const { slug } = useParams();
  const title = slug
    ?.split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '3rem 0 4rem' }}>
        <div className="coming-soon-card">
          <span className="eyebrow">Coming Soon</span>
          <h1>{title || 'Showcase'}</h1>
          <p className="muted">Website Showcase Coming Soon.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/showcase">
              Back to Showcase
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComingSoonPage;
