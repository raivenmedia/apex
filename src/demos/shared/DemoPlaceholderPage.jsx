import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function DemoPlaceholderPage({ eyebrow, title, description }) {
  return (
    <>
      <Navbar />
      <main className="container demo-placeholder-shell">
        <div className="hero-card glass demo-placeholder-card">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="muted">{description}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/showcase">
              Back to Showcase
            </Link>
          </div>
        </div>
        <div className="demo-disclaimer">
          This website is a demonstration created by ApexCole Technology to showcase our capabilities. Your business website will be uniquely designed and customised according to your requirements.
        </div>
      </main>
    </>
  );
}

export default DemoPlaceholderPage;
