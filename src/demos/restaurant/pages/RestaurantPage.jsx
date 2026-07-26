import { useMemo, useState } from 'react';
import RestaurantNavbar from '../components/RestaurantNavbar';
import RestaurantSection from '../components/RestaurantSection';
import useRestaurantIntro from '../hooks/useRestaurantIntro';
import restaurantContent from '../data/restaurantContent';
import '../styles/restaurant.css';

const formatPrice = (value) =>
  new Intl.NumberFormat('en-ZM', {
    style: 'currency',
    currency: 'ZMW',
    maximumFractionDigits: 0,
  }).format(value);

function RestaurantPage() {
  useRestaurantIntro();
  const [activeCategory, setActiveCategory] = useState('Nshima Plates');
  const [orderSent, setOrderSent] = useState(false);
  const [cart, setCart] = useState([]);
  const [delivery, setDelivery] = useState({ name: '', phone: '', address: '', note: '' });

  const activeMenu = restaurantContent.menu.find((section) => section.category === activeCategory) || restaurantContent.menu[0];
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;

  const addToCart = (item) => {
    setCart((previous) => {
      const existing = previous.find((entry) => entry.id === item.id);
      if (existing) {
        return previous.map((entry) => (entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry));
      }
      return [...previous, { ...item, quantity: 1 }];
    });
    setOrderSent(false);
  };

  const updateQuantity = (id, delta) => {
    setCart((previous) =>
      previous.flatMap((entry) => {
        if (entry.id !== id) return [entry];
        const nextQuantity = entry.quantity + delta;
        return nextQuantity > 0 ? [{ ...entry, quantity: nextQuantity }] : [];
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cart.length) return;
    setOrderSent(true);
    setCart([]);
    setDelivery({ name: '', phone: '', address: '', note: '' });
  };

  return (
    <div className="restaurant-shell">
      <RestaurantNavbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <main>
        <section id="home" className="restaurant-hero">
          <div className="restaurant-hero-inner">
            <div className="restaurant-hero-copy reveal">
              <span className="restaurant-kicker">Now serving</span>
              <h1>Proper Zambian dishes, served with fire and flair.</h1>
              <p>From nshima and kapenta to sizzling steaks and chips, this is the kind of comfort food you order again and again.</p>
              <div className="restaurant-hero-actions">
                <a className="restaurant-btn primary" href="#order">Order a feast <span>↗</span></a>
                <a className="restaurant-btn text-btn" href="#menu">Browse the menu <span>↓</span></a>
              </div>
              <div className="hero-badges">
                <span>Fresh daily</span>
                <span>25 min delivery</span>
                <span>Local favourites</span>
              </div>
              <div className="hero-highlight">
                <strong>Tonight’s special</strong>
                <span>Family Feast · nshima, chicken, chips & drinks</span>
              </div>
              <div className="hero-meta"><span>Open daily until 11pm</span><span>Fast delivery across Lusaka</span></div>
            </div>
            <div className="restaurant-hero-visual" style={{ backgroundImage: `url(${restaurantContent.hero.image})` }}>
              <div className="hero-stamp"><span>Fresh</span><strong>Today</strong><span>Local meals</span></div>
              <span className="image-caption">{restaurantContent.hero.imageLabel}</span>
            </div>
          </div>
        </section>

        <section className="welcome-band reveal">
          <p className="eyebrow">Welcome to Zed Bites</p>
          <h2>{restaurantContent.welcome.title}</h2>
          <p>{restaurantContent.welcome.description}</p>
        </section>

        <RestaurantSection id="about" eyebrow="About us" title={restaurantContent.about.title} description="A local kitchen made for hearty meals, quick delivery and warm service.">
          <div className="about-layout">
            <div className="about-image" />
            <div className="about-copy">
              {restaurantContent.about.features.map((feature, index) => (
                <div className="feature-line" key={feature}>
                  <span>0{index + 1}</span>
                  <p>{feature}</p>
                </div>
              ))}
              <a className="inline-link" href="#order">Start your order <span>→</span></a>
            </div>
          </div>
        </RestaurantSection>

        <section className="signature-section">
          <div className="section-surface">
            <div className="section-heading restaurant light">
              <div>
                <p className="eyebrow">Popular picks</p>
                <h2>Local favourites</h2>
                <p>Order your favourite plates for lunch, dinner or a quick family meal.</p>
              </div>
              <a className="inline-link light-link" href="#menu">See the full menu <span>→</span></a>
            </div>
            <div className="signature-grid">
              {restaurantContent.dishes.map((dish) => (
                <article className="signature-card" key={dish.name}>
                  <div className="food-image" style={{ backgroundImage: `url(${dish.image})` }} />
                  <div className="dish-content">
                    <div className="dish-top">
                      <h3>{dish.name}</h3>
                      <strong>{dish.price}</strong>
                    </div>
                    <p>{dish.description}</p>
                    <span className="dish-tag">{dish.tags.join(' · ')}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RestaurantSection id="menu" eyebrow="Order now" title="The menu" description="Pick from nshima plates, grilled meats, sides and drinks." className="menu-section">
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {restaurantContent.menu.map((section) => (
              <button type="button" role="tab" aria-selected={activeCategory === section.category} className={activeCategory === section.category ? 'active' : ''} onClick={() => setActiveCategory(section.category)} key={section.category}>{section.category}</button>
            ))}
          </div>
          <div className="menu-category-heading">
            <span>0{restaurantContent.menu.findIndex((section) => section.category === activeCategory) + 1}</span>
            <h3>{activeMenu.category}</h3>
            <i />
          </div>
          <div className="menu-list">
            {activeMenu.items.map((item) => (
              <article className="menu-item" key={item.name}>
                <div className="menu-thumb" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="menu-item-copy">
                  <div className="menu-item-header">
                    <h4>{item.name}</h4>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                  <p>{item.description}</p>
                  <div className="menu-labels">{item.tag ? <span className={item.tag === 'Popular' ? 'spicy' : 'diet'}>{item.tag}</span> : null}</div>
                  <button className="restaurant-btn secondary" type="button" onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </RestaurantSection>

        <section className="specials-section">
          <div className="section-surface">
            <div className="section-heading restaurant">
              <div>
                <p className="eyebrow">Good value</p>
                <h2>Great deals</h2>
                <p>Share a family feast or grab a quick combo for lunch.</p>
              </div>
            </div>
            <div className="specials-grid">
              {restaurantContent.specials.map((special, index) => (
                <article className="special-card" key={special.title}>
                  <div className="special-image" style={{ backgroundImage: `url(${special.image})` }} />
                  <div>
                    <span className="special-number">0{index + 1}</span>
                    <h3>{special.title}</h3>
                    <p>{special.description}</p>
                    <strong>{special.price}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-surface">
            <div className="section-heading restaurant">
              <div>
                <p className="eyebrow">What guests say</p>
                <h2>Trusted by locals and families</h2>
                <p>Our steady service, hot plates and generous portions keep people coming back.</p>
              </div>
            </div>
            <div className="testimonial-grid">
              {restaurantContent.testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.customer}>
                  <div className="review-mark">“</div>
                  <p className="stars">★★★★★</p>
                  <blockquote>{testimonial.quote}</blockquote>
                  <footer>
                    <strong>{testimonial.customer}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="reservation-section">
          <div className="reservation-inner">
            <div className="reservation-copy">
              <p className="eyebrow">Fast delivery</p>
              <h2>{restaurantContent.reservation.title}</h2>
              <p>{restaurantContent.reservation.description}</p>
              <div className="hours">
                <h3>Opening hours</h3>
                {restaurantContent.hours.map((item) => (
                  <div key={item.day}><span>{item.day}</span><strong>{item.details}</strong></div>
                ))}
              </div>
            </div>

            <div className="order-panel">
              <div className="order-summary">
                <div className="order-summary-header">
                  <h3>Your cart</h3>
                  <span className="cart-pill">{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span>
                </div>
                {cart.length === 0 ? (
                  <div className="cart-empty">Your cart is empty. Add a few local favourites and we will prepare them for delivery.</div>
                ) : (
                  <div className="cart-list">
                    {cart.map((item) => (
                      <div className="cart-item" key={item.id}>
                        <div>
                          <strong>{item.name}</strong>
                          <p>{formatPrice(item.price)} each</p>
                        </div>
                        <div className="cart-controls">
                          <button type="button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="totals">
                  <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
                  <div><span>Delivery</span><strong>{formatPrice(deliveryFee)}</strong></div>
                  <div className="grand-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
                </div>
              </div>

              <form className="order-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Name<input required type="text" value={delivery.name} onChange={(event) => setDelivery({ ...delivery, name: event.target.value })} placeholder="Your name" /></label>
                  <label>Phone<input required type="tel" value={delivery.phone} onChange={(event) => setDelivery({ ...delivery, phone: event.target.value })} placeholder="+260 977 000 000" /></label>
                </div>
                <label>Delivery address<textarea required value={delivery.address} onChange={(event) => setDelivery({ ...delivery, address: event.target.value })} placeholder="House number, street and area" /></label>
                <label>Notes<textarea value={delivery.note} onChange={(event) => setDelivery({ ...delivery, note: event.target.value })} placeholder="Any delivery notes?" /></label>
                <button className="restaurant-btn primary" type="submit" disabled={!cart.length}>{orderSent ? 'Order confirmed ✓' : 'Place order'}</button>
                {orderSent ? <p className="form-success">Thank you. Your order is on the way and we will confirm your delivery shortly.</p> : null}
              </form>
            </div>
          </div>
        </section>

        <RestaurantSection id="contact" eyebrow="Find us" title="Visit or call us." description="We are based in Lusaka and ready to serve your next meal.">
          <div className="contact-layout">
            <div className="contact-details">
              <div><span>Address</span><strong>{restaurantContent.contact.location}</strong></div>
              <div><span>Call us</span><strong>{restaurantContent.contact.phone}</strong></div>
              <div><span>Write to us</span><strong>{restaurantContent.contact.email}</strong></div>
              <div className="social-links">{restaurantContent.social.map((item) => <a key={item.label} href={item.url}>{item.label} ↗</a>)}</div>
            </div>
            <div className="map-card">
              <div className="map-pin">✦</div>
              <strong>Zed Bites</strong>
              <span>Great East Road · Lusaka</span>
              <a href="#order">Order delivery ↗</a>
            </div>
          </div>
        </RestaurantSection>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <a className="footer-brand" href="#home">
              <span className="restaurant-brand-mark">ZB</span>
              <span>Zed Bites</span>
            </a>
            <p>Local food, hot and ready to deliver.<br />Open every day.</p>
          </div>
          <div className="footer-links">
            <a href="#menu">Menu</a>
            <a href="#order">Order</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-note">{restaurantContent.footerNote}</div>
        </div>
      </footer>
    </div>
  );
}

export default RestaurantPage;
