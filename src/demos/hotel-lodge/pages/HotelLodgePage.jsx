import { Link } from 'react-router-dom';
import HotelLayout from '../layouts/HotelLayout';
import HotelSection from '../components/HotelSection';
import HotelCard from '../components/HotelCard';
import hotelContent from '../data/hotelContent';
import useDemoPageIntro from '../hooks/useDemoPageIntro';
import '../styles/hotelLodge.css';
import headerImage from '../header.png';
import roomImage from '../room.png';
import receptionImage from '../reception.png';

function HotelLodgePage() {
  useDemoPageIntro();

  return (
    <HotelLayout>
      <section className="hotel-hero">
        <div className="hotel-hero-grid container">
          <div className="hotel-hero-copy">
            <span className="eyebrow">{hotelContent.hero.eyebrow}</span>
            <h1>{hotelContent.hero.heading}</h1>
            <p>{hotelContent.hero.subtext}</p>
            <div className="hero-actions">
              {hotelContent.hero.actions.map((action) => (
                <a key={action.label} className={`btn btn-${action.variant}`} href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hotel-hero-media">
            <div className="photo hero-photo-large" style={{ '--hotel-photo': `url(${headerImage})` }}>
              <span className="photo-label">Hotel lodge header</span>
            </div>
            <div className="hero-photo-row">
              <div className="photo hero-photo-small">
                <span className="photo-label">Cedar suite retreat</span>
              </div>
              <div className="photo hero-photo-small">
                <span className="photo-label">Forest dining room</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HotelSection
        id="reception"
        title="A warm welcome from arrival"
        description="Our reception team is ready to make every arrival feel effortless, personal and beautifully considered."
        className="reception-section"
      >
        <div className="hotel-speaker-grid reception-grid">
          <div className="photo photo-reception" style={{ '--hotel-photo': `url(${receptionImage})` }}>
            <span className="photo-label">Lodge reception</span>
          </div>
          <div className="reception-copy">
            <p>
              Settle in with a calm welcome, thoughtful local recommendations and attentive service from the moment you step through the door.
            </p>
            <p className="muted">Our reception team can arrange check-in details, dining reservations, activities and custom guest requests.</p>
          </div>
        </div>
      </HotelSection>

      <HotelSection
        id="accommodation"
        title="Accommodation"
        description="Premium rooms built for relaxation, mountain views and elevated lodge comfort."
      >
        <div className="room-grid">
          {hotelContent.rooms.map((room) => (
            <HotelCard key={room.title} title={room.title} description={room.description}>
              <div className="photo photo-room" style={{ '--hotel-photo': `url(${roomImage})` }} aria-label={`${room.title} interior`} />
            </HotelCard>
          ))}
        </div>
      </HotelSection>

      <HotelSection
        id="dining"
        title="Restaurant & dining"
        description="Seasonal menus, locally sourced ingredients and refined lodge table service."
      >
        <div className="hotel-speaker-grid">
          <div>
            <p>
              The main dining room offers an intimate atmosphere, curated wine pairings and a menu designed to reflect the region.
            </p>
            <p className="muted">Perfect for quiet celebrations, romantic evenings, and elevated lodge dining.</p>
          </div>
          <div className="photo photo-dining" />
        </div>
      </HotelSection>

      <HotelSection
        id="facilities"
        title="Facilities"
        description="Every lodge amenity is designed to support comfort, wellness and inspired stays."
      >
        <div className="feature-grid">
          {hotelContent.facilities.map((facility) => (
            <HotelCard key={facility} title={facility} />
          ))}
        </div>
      </HotelSection>

      <HotelSection
        id="offers"
        title="Special offers"
        description="Thoughtfully crafted packages for longer stays and meaningful getaways."
      >
        <div className="offer-grid">
          {hotelContent.offers.map((offer) => (
            <HotelCard key={offer.title} title={offer.title} description={offer.detail} />
          ))}
        </div>
      </HotelSection>

      <HotelSection
        id="contact"
        title="Contact & reservation"
        description="Reach out to reserve your stay or plan a custom lodge experience."
      >
        <div className="contact-grid">
          <article className="hotel-card contact-card">
            <h3>Contact the lodge</h3>
            <p>Email: {hotelContent.contact.email}</p>
            <p>Phone: {hotelContent.contact.phone}</p>
            <p className="muted">{hotelContent.contact.note}</p>
          </article>
          <div className="map-placeholder hotel-card">
            <span>Map placeholder</span>
          </div>
        </div>
      </HotelSection>
    </HotelLayout>
  );
}

export default HotelLodgePage;
