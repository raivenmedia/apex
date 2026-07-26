import hotelContent from '../data/hotelContent';

function HotelLayout({ children }) {
  const { brand } = hotelContent;

  return (
    <div className="hotel-shell">
      <header className="hotel-header">
        <div className="container hotel-header-inner">
          <div className="hotel-branding">
            <span className="hotel-brandmark" aria-hidden="true" />
            <div>
              <p className="hotel-badge">Hotel & Lodge</p>
              <h1 className="hotel-logo">{brand.name}</h1>
            </div>
          </div>
          <nav className="hotel-nav-links" aria-label="Hotel site navigation">
            <a href="#reception">Reception</a>
            <a href="#accommodation">Rooms</a>
            <a href="#dining">Dining</a>
            <a href="#facilities">Facilities</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="hotel-footer">
        <div className="container footer-content">
          <div>
            <p className="footer-brand">{brand.name}</p>
            <p className="footer-copy">A standalone hotel experience designed to showcase a full hospitality website within ApexCole.</p>
          </div>
          <p className="footer-note">Curated stay experiences, exclusive offers, and warm lodge hospitality.</p>
        </div>
      </footer>
    </div>
  );
}

export default HotelLayout;
