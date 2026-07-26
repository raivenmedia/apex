const previewConfigs = {
  business: {
    tabs: ['Home', 'Services', 'Contact'],
    address: 'apexcole.site/business-profile',
    brand: 'ApexCole',
    nav: ['Home', 'Services', 'About', 'Contact'],
    eyebrow: 'Business Profile',
    title: 'Corporate trust for modern brands',
    subtitle: 'Professional digital presence',
    description: 'Introduce your company, services and credibility with a clear responsive website.',
    primaryAction: 'Get Started',
    secondaryAction: 'Book Call',
    browserBadge: 'Professional',
    floatingTitle: 'Corporate Layout',
    floatingText: 'Hero, services, about and contact flow',
    metrics: ['Trustworthy', 'Responsive', 'Lead Ready'],
    insightLabel: 'Contact Ready',
    insightValue: '6 Sections',
    sectionLabels: ['Company Intro', 'Our Services', 'About Us', 'Contact'],
    footerLinks: ['LinkedIn', 'Email', 'Location'],
  },
  landing: {
    tabs: ['Launch', 'Offers', 'Reviews'],
    address: 'apexcole.site/landing-page',
    brand: 'ApexLaunch',
    nav: ['Product', 'Benefits', 'Pricing', 'Contact'],
    eyebrow: 'Landing Page',
    title: 'Convert more visitors faster',
    subtitle: 'High-impact one-page funnel',
    description: 'Bold headlines, offer highlights and conversion sections designed for marketing campaigns.',
    primaryAction: 'Start Now',
    secondaryAction: 'See Demo',
    browserBadge: 'Marketing',
    floatingTitle: 'CTA Focused',
    floatingText: 'Hero, proof, pricing and contact sections',
    metrics: ['Headline', 'Proof', 'Conversion'],
    insightLabel: 'Lead Boost',
    insightValue: '+42% CTR',
    sectionLabels: ['Highlights', 'Testimonials', 'Pricing', 'Contact'],
    footerLinks: ['Social Proof', 'FAQ', 'Get Quote'],
  },
  custom: {
    tabs: ['Shop', 'Lookbook', 'Wishlist'],
    address: 'luxewear.store',
    brand: 'LUXE WEAR',
    nav: ['New In', 'Men', 'Women', 'Accessories'],
    eyebrow: 'Custom Website',
    title: 'Modern Fashion For Everyone',
    subtitle: 'Premium fashion storefront',
    description: 'A polished visual demo of a luxury-ready online clothing store tailored for high-conversion fashion brands.',
    primaryAction: 'Shop Now',
    secondaryAction: 'New Arrivals',
    browserBadge: 'Fashion',
    floatingTitle: 'Fashion Commerce',
    floatingText: 'Premium online clothing store preview',
    metrics: ['Luxury Layout', 'Responsive', 'Conversion Ready'],
    insightLabel: 'Responsive Demo',
    insightValue: '4 Devices',
    sectionLabels: ['Men', 'Women', 'Shoes', 'Accessories', 'New Arrivals'],
    footerLinks: ['Express Shipping', 'Easy Returns', 'Member Rewards'],
  },
};

const fashionProducts = [
  {
    name: 'Classic Black T-Shirt',
    price: 'ZMW 420',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Premium Hoodie',
    price: 'ZMW 780',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Slim Fit Jeans',
    price: 'ZMW 950',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Running Sneakers',
    price: 'ZMW 1,280',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Leather Jacket',
    price: 'ZMW 1,650',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Summer Dress',
    price: 'ZMW 890',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Designer Handbag',
    price: 'ZMW 1,520',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Luxury Watch',
    price: 'ZMW 2,450',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
];

function StoreIcon({ type }) {
  const icons = {
    search: (
      <path
        d="M15.5 15.5L20 20M9.5 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    heart: (
      <path
        d="M12 20s-7-4.35-7-10.02C5 7.21 6.94 5.5 9.33 5.5c1.48 0 2.58.66 3.17 1.72C13.09 6.16 14.19 5.5 15.67 5.5C18.06 5.5 20 7.21 20 9.98C20 15.65 12 20 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    cart: (
      <path
        d="M4 5h2l1.4 8.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 .97-.76L20 8H7.2M9 19a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    user: (
      <path
        d="M12 12a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm-6 8a6 6 0 0 1 12 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
  };

  return (
    <span className={`store-icon store-icon-${type}`} aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[type]}</svg>
    </span>
  );
}

function renderProductStars(rating) {
  const fullStars = Math.round(rating);
  return `${'★'.repeat(fullStars)}${'☆'.repeat(5 - fullStars)}`;
}

function FashionStorePreview({ config }) {
  return (
    <div className="fashion-store-preview">
      <div className="fashion-store-toolbar">
        <div className="fashion-brand-wrap">
          <span className="fashion-brand-mark" />
          <div className="fashion-brand-copy">
            <span className="fashion-brand-name">{config.brand}</span>
            <span className="fashion-brand-tagline">Modern Fashion For Everyone</span>
          </div>
        </div>

        <div className="fashion-nav-links">
          {config.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="fashion-toolbar-actions">
          <div className="fashion-search">
            <StoreIcon type="search" />
            <span>Search fashion</span>
          </div>

          <div className="fashion-utility-icons">
            <StoreIcon type="heart" />
            <StoreIcon type="user" />
            <StoreIcon type="cart" />
          </div>
        </div>
      </div>

      <div className="fashion-hero-banner">
        <div className="fashion-hero-copy">
          <span className="fashion-hero-kicker">Fictional Brand Demo</span>
          <span className="fashion-hero-title">{config.brand}</span>
          <span className="fashion-hero-subtitle">{config.title}</span>
          <span className="fashion-hero-text">
            Premium fashion photography, elegant typography and polished shopping flows designed to help clothing stores imagine their own custom online boutique.
          </span>
          <div className="fashion-hero-actions">
            <span className="fashion-button primary">{config.primaryAction}</span>
            <span className="fashion-button secondary">{config.secondaryAction}</span>
          </div>
        </div>

        <div className="fashion-hero-media">
          <div
            className="fashion-model-card primary"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(18, 18, 18, 0.08), rgba(18, 18, 18, 0.2)), url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div
            className="fashion-model-card secondary"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(18, 18, 18, 0.06), rgba(18, 18, 18, 0.18)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80')",
            }}
          />
          <div className="fashion-hero-note">
            <strong>Luxury storefront feel</strong>
            <small>Editorial imagery + clean shopping UI</small>
          </div>
        </div>
      </div>

      <div className="fashion-category-row">
        {config.sectionLabels.map((label, index) => (
          <span className={`fashion-category-pill ${index === config.sectionLabels.length - 1 ? 'featured' : ''}`} key={label}>
            {label}
          </span>
        ))}
      </div>

      <div className="fashion-product-grid">
        {fashionProducts.map((product, index) => (
          <article className="fashion-product-card" key={product.name}>
            <div
              className="fashion-product-image"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(19,18,18,0.16)), url('${product.image}')`,
              }}
            >
              {index === 0 ? <span className="fashion-product-badge">Best Seller</span> : null}
            </div>

            <div className="fashion-product-copy">
              <span className="fashion-product-name">{product.name}</span>
              <div className="fashion-product-rating">
                <span>{renderProductStars(product.rating)}</span>
                <small>{product.rating.toFixed(1)}</small>
              </div>
              <div className="fashion-product-footer">
                <strong>{product.price}</strong>
                <span className="fashion-card-button">Add to Cart</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="fashion-trust-row">
        {config.footerLinks.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function WebsiteDesktopPreview({ variant, config }) {
  return (
    <div className={`website-browser-preview ${variant}`}>
      <div className="browser-chrome">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-tabs" aria-hidden="true">
          {config.tabs.map((tab, index) => (
            <span key={tab} className={`browser-tab ${index === 0 ? 'active' : ''}`}>
              {tab}
            </span>
          ))}
        </div>
        <div className="browser-address">
          <span className="browser-lock" />
          <span>{config.address}</span>
        </div>
      </div>

      <div className={`browser-canvas ${variant === 'custom' ? 'fashion-canvas' : ''}`}>
        {variant === 'custom' ? (
          <FashionStorePreview config={config} />
        ) : (
          <>
            <div className="preview-navbar">
              <div className="preview-brand-group">
                <span className="preview-brand-mark" />
                <span className="preview-brand">{config.brand}</span>
              </div>
              <div className="preview-nav-links">
                {config.nav.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <span className="preview-status-pill">{config.browserBadge}</span>
            </div>

            <div className={`preview-hero ${variant}`}>
              {variant === 'landing' ? <div className="landing-glow" /> : null}

              <div className={`hero-copy ${variant === 'landing' ? 'centered' : ''}`}>
                <span className={`hero-kicker ${variant === 'landing' ? 'gradient' : variant === 'custom' ? 'accent' : ''}`}>
                  {config.eyebrow}
                </span>
                <span className={`hero-heading ${variant === 'custom' ? 'xl' : variant === 'landing' ? 'xl' : 'large'}`}>
                  {config.title}
                </span>
                <span className={`hero-heading ${variant === 'business' ? 'medium' : 'large'}`}>
                  {config.subtitle}
                </span>
                <span className={`hero-text ${variant === 'landing' ? 'wide' : ''}`}>
                  {config.description}
                </span>
                <div className="hero-actions-mini">
                  <span className={`primary ${variant === 'landing' ? 'strong' : ''}`}>{config.primaryAction}</span>
                  <span>{config.secondaryAction}</span>
                </div>
              </div>

              <div className={`hero-visual ${variant === 'business' ? 'corporate' : variant === 'custom' ? 'premium' : 'gradient-panel'}`}>
                {variant === 'business' ? (
                  <>
                    <div className="hero-visual-image skyline" />
                    <div className="hero-visual-card contact">
                      <strong>Company Intro</strong>
                      <small>Clean brand overview</small>
                    </div>
                  </>
                ) : null}

                {variant === 'landing' ? (
                  <>
                    <div className="hero-visual-image spotlight" />
                    <div className="hero-visual-card stats">
                      <strong>Offer Preview</strong>
                      <small>Headline + CTA</small>
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            {variant === 'business' ? (
              <>
                <div className="preview-feature-row">
                  <div className="section-card wide">
                    <span className="section-card-title">{config.sectionLabels[0]}</span>
                    <div className="section-card-lines">
                      <span />
                      <span />
                      <span className="short" />
                    </div>
                  </div>
                  <div className="section-card image">
                    <span className="section-card-title">{config.sectionLabels[1]}</span>
                    <div className="section-card-image business" />
                  </div>
                </div>
                <div className="preview-section-grid three">
                  {config.sectionLabels.slice(1).map((label) => (
                    <div className="section-card" key={label}>
                      <span className="section-card-title">{label}</span>
                      <div className="section-card-lines">
                        <span />
                        <span className="short" />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {variant === 'landing' ? (
              <>
                <div className="preview-highlight-strip">
                  {['Fast Setup', 'Bold CTA', 'Lead Capture'].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="preview-section-grid testimonials">
                  <div className="section-card testimonial">
                    <span className="section-card-title">{config.sectionLabels[1]}</span>
                    <div className="testimonial-stack">
                      <span />
                      <span />
                      <span className="short" />
                    </div>
                  </div>
                  <div className="section-card pricing">
                    <span className="section-card-title">{config.sectionLabels[2]}</span>
                    <div className="pricing-preview">
                      <span className="pricing-pill">Starter</span>
                      <span className="pricing-value">$49</span>
                      <span className="pricing-caption">Preview block</span>
                    </div>
                  </div>
                </div>
                <div className="section-card contact-band">
                  <span className="section-card-title">{config.sectionLabels[3]}</span>
                  <div className="contact-pills">
                    <span>Email Form</span>
                    <span>WhatsApp</span>
                  </div>
                </div>
              </>
            ) : null}

            <div className={`preview-footer-bar ${variant === 'landing' ? 'gradient' : variant === 'custom' ? 'deluxe' : ''}`}>
              {config.footerLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ResponsiveDevice({ label, variant, type }) {
  const showCamera = type === 'tablet' || type === 'phone';

  return (
    <div className={`website-device ${type} ${variant}`}>
      <div className="website-device-inner">
        {type === 'monitor' ? <div className="website-monitor-stand" /> : null}
        {type === 'laptop' ? <div className="website-laptop-base" /> : null}
        {showCamera ? <div className="website-device-camera" /> : null}
        <div className="website-device-screen">
          {variant === 'custom' ? (
            <div className={`website-mini-layout ${variant} fashion`}>
              <div className="mini-fashion-header">
                <span className="mini-nav fashion" />
                <span className="mini-search-bar" />
              </div>
              <span className="mini-hero fashion" />
              <div className="mini-fashion-categories">
                <span className="mini-chip" />
                <span className="mini-chip short" />
                <span className="mini-chip" />
              </div>
              <div className="mini-fashion-grid">
                <span className="mini-product-card" />
                <span className="mini-product-card accent" />
                <span className="mini-product-card" />
                <span className="mini-product-card accent" />
              </div>
              <span className="mini-footer fashion" />
            </div>
          ) : (
            <div className={`website-mini-layout ${variant}`}>
              <span className="mini-nav" />
              <span className="mini-hero" />
              <span className="mini-grid a" />
              <span className="mini-grid b" />
              <span className="mini-grid c" />
              <span className="mini-footer" />
            </div>
          )}
        </div>
      </div>
      <span className="website-device-label">{label}</span>
    </div>
  );
}

export default function WebsitePackageMockup({ variant }) {
  const config = previewConfigs[variant];

  return (
    <div className={`website-showcase ${variant}`}>
      <div className="website-decor decor-one" />
      <div className="website-decor decor-two" />
      <div className="website-decor decor-three" />

      <div className="website-floating-ui top">
        <strong>{config.floatingTitle}</strong>
        <small>{config.floatingText}</small>
      </div>

      <div className="website-floating-ui bottom">
        <span className="website-floating-dot" />
        <div className="website-floating-copy">
          <strong>{config.insightLabel}</strong>
          <small>{config.insightValue}</small>
        </div>
      </div>

      {variant === 'custom' ? (
        <div className="website-floating-ui side">
          <strong>Premium Store</strong>
          <small>Fashion hero, products and device previews</small>
        </div>
      ) : null}

      <WebsiteDesktopPreview variant={variant} config={config} />

      <div className="website-device-stack">
        <ResponsiveDevice label="Desktop" variant={variant} type="monitor" />
        <ResponsiveDevice label="Laptop" variant={variant} type="laptop" />
        <ResponsiveDevice label="Tablet" variant={variant} type="tablet" />
        <ResponsiveDevice label="Phone" variant={variant} type="phone" />
      </div>
    </div>
  );
}
