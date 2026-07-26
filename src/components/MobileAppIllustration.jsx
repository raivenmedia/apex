function AppIcon({ variant, className = '' }) {
  const classes = ['mobile-app-icon', className].filter(Boolean).join(' ');

  switch (variant) {
    case 'delivery':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="6" y="16" width="20" height="16" rx="4" fill="currentColor" opacity="0.9" />
          <path d="M26 20h7l5 6v6h-12z" fill="currentColor" opacity="0.7" />
          <circle cx="16" cy="34" r="3.5" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="31" cy="34" r="3.5" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case 'taxi':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 6c-6.6 0-12 5.2-12 11.6 0 8.2 12 22.8 12 22.8s12-14.6 12-22.8C36 11.2 30.6 6 24 6Zm0 15.8a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Z" fill="currentColor" />
        </svg>
      );
    case 'restaurant':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <path d="M11 28c0-6.1 5.8-11 13-11s13 4.9 13 11H11Z" fill="currentColor" opacity="0.9" />
          <rect x="14" y="28" width="20" height="4.5" rx="2.25" fill="currentColor" opacity="0.72" />
          <path d="M17 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M19 9v5M24 8v6M29 9v5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'hotel':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="9" y="11" width="30" height="26" rx="4" fill="currentColor" opacity="0.88" />
          <path d="M16 11v26M32 11v26M9 20h30" stroke="#05111d" strokeWidth="2.4" opacity="0.24" />
          <path d="m24 6 2.4 4.8 5.3.8-3.8 3.7.9 5.2-4.8-2.5-4.8 2.5.9-5.2-3.8-3.7 5.3-.8Z" fill="currentColor" />
        </svg>
      );
    case 'clinic':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="15" r="8" fill="currentColor" opacity="0.88" />
          <path d="M13 38c1.6-7 6.5-11 11-11s9.4 4 11 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M35 11v10M30 16h10" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    case 'pharmacy':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="10" y="11" width="12" height="26" rx="6" fill="currentColor" opacity="0.9" />
          <path d="M26 14c0-2.8 2.2-5 5-5h1.5a5 5 0 0 1 0 10H31a5 5 0 0 0 0 10h7a5 5 0 0 1 0 10h-1.5c-2.8 0-5-2.2-5-5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'commerce':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <path d="M11 13h4l3 16h16l3-11H18" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="35" r="3" fill="currentColor" />
          <circle cx="33" cy="35" r="3" fill="currentColor" />
        </svg>
      );
    case 'school':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 9 8 17l16 8 16-8-16-8Z" fill="currentColor" opacity="0.9" />
          <path d="M14 21v7c0 4.5 6.3 8 10 8s10-3.5 10-8v-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'business':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="9" y="23" width="6" height="14" rx="2" fill="currentColor" />
          <rect x="19" y="17" width="6" height="20" rx="2" fill="currentColor" opacity="0.78" />
          <rect x="29" y="11" width="6" height="26" rx="2" fill="currentColor" opacity="0.58" />
          <path d="M10 14c4-2.8 7.3-4 10.2-3.8 3.7.3 6.2 2.6 9.8 2.3 2.2-.2 4.5-1.4 7-3.8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );
    case 'booking':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="9" y="11" width="30" height="26" rx="5" fill="none" stroke="currentColor" strokeWidth="3.2" />
          <path d="M9 19h30" stroke="currentColor" strokeWidth="3" />
          <circle cx="19" cy="27" r="3.3" fill="currentColor" />
          <path d="M17 8v6M31 8v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'chat':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 12h28a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H23l-8 6v-6h-5a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6Z" fill="currentColor" opacity="0.9" />
          <circle cx="18" cy="23" r="2.2" fill="#05111d" opacity="0.45" />
          <circle cx="24" cy="23" r="2.2" fill="#05111d" opacity="0.45" />
          <circle cx="30" cy="23" r="2.2" fill="#05111d" opacity="0.45" />
        </svg>
      );
    case 'finance':
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="8" y="13" width="32" height="22" rx="5" fill="currentColor" opacity="0.9" />
          <path d="M8 20h32" stroke="#05111d" strokeWidth="3" opacity="0.24" />
          <circle cx="31" cy="27" r="4" fill="none" stroke="#05111d" strokeWidth="2.4" opacity="0.24" />
        </svg>
      );
    default:
      return (
        <svg className={classes} viewBox="0 0 48 48" aria-hidden="true">
          <rect x="12" y="6" width="24" height="36" rx="6" fill="currentColor" />
        </svg>
      );
  }
}

function ScreenContent({ service }) {
  switch (service.variant) {
    case 'delivery':
      return (
        <>
          <div className="screen-pill-row">
            <span className="screen-pill active">Track Order</span>
            <span className="screen-pill">Courier</span>
          </div>
          <div className="screen-map">
            <span className="map-point start" />
            <span className="map-point end" />
            <span className="map-route" />
          </div>
          <div className="screen-card">
            <div>
              <strong>Package Out</strong>
              <small>ETA 18 mins</small>
            </div>
            <AppIcon variant="delivery" />
          </div>
        </>
      );
    case 'taxi':
      return (
        <>
          <div className="screen-map taxi">
            <span className="map-point customer" />
            <span className="map-point pickup" />
            <span className="map-point end" />
            <span className="map-route curve" />
          </div>
          <div className="screen-card">
            <div>
              <strong>Driver Nearby</strong>
              <small>3 mins away</small>
            </div>
            <span className="mini-badge">GPS</span>
          </div>
        </>
      );
    case 'restaurant':
      return (
        <>
          <div className="product-list">
            <span className="product-thumb" />
            <span className="product-thumb alt" />
          </div>
          <div className="screen-card">
            <div>
              <strong>Burger Combo</strong>
              <small>Fast delivery</small>
            </div>
            <span className="mini-badge">Order</span>
          </div>
          <div className="screen-button">Add to Cart</div>
        </>
      );
    case 'hotel':
      return (
        <>
          <div className="screen-card wide">
            <div>
              <strong>Luxury Suite</strong>
              <small>2 nights available</small>
            </div>
            <span className="mini-badge">4.9</span>
          </div>
          <div className="screen-bars">
            <span />
            <span className="mid" />
            <span className="short" />
          </div>
          <div className="screen-button">Book Room</div>
        </>
      );
    case 'clinic':
      return (
        <>
          <div className="screen-card">
            <div>
              <strong>Dr. Mwale</strong>
              <small>Cardiology</small>
            </div>
            <span className="mini-badge">10:30</span>
          </div>
          <div className="screen-pill-row">
            <span className="screen-pill active">Mon</span>
            <span className="screen-pill">Tue</span>
            <span className="screen-pill">Wed</span>
          </div>
          <div className="screen-button">Confirm Visit</div>
        </>
      );
    case 'pharmacy':
      return (
        <>
          <div className="screen-card">
            <div>
              <strong>Upload Prescription</strong>
              <small>Photo or PDF</small>
            </div>
            <span className="mini-badge">Rx</span>
          </div>
          <div className="screen-bars">
            <span className="short" />
            <span className="mid" />
            <span />
          </div>
          <div className="screen-button">Order Medicines</div>
        </>
      );
    case 'commerce':
      return (
        <>
          <div className="product-list">
            <span className="product-thumb" />
            <span className="product-thumb alt" />
            <span className="product-thumb third" />
          </div>
          <div className="screen-card">
            <div>
              <strong>Cart Ready</strong>
              <small>3 items selected</small>
            </div>
            <span className="mini-badge">Pay</span>
          </div>
        </>
      );
    case 'school':
      return (
        <>
          <div className="screen-card">
            <div>
              <strong>Student Dashboard</strong>
              <small>Results updated</small>
            </div>
            <span className="mini-badge">A+</span>
          </div>
          <div className="screen-bars">
            <span />
            <span className="short" />
            <span className="mid" />
          </div>
          <div className="screen-pill-row">
            <span className="screen-pill active">Classes</span>
            <span className="screen-pill">Tasks</span>
          </div>
        </>
      );
    case 'business':
      return (
        <>
          <div className="screen-kpis">
            <span>12.4k</span>
            <span>+24%</span>
          </div>
          <div className="screen-bars analytics">
            <span />
            <span className="mid" />
            <span className="short" />
            <span className="tall" />
          </div>
          <div className="screen-card">
            <div>
              <strong>Team Productivity</strong>
              <small>Live analytics</small>
            </div>
            <span className="mini-badge">AI</span>
          </div>
        </>
      );
    case 'booking':
      return (
        <>
          <div className="calendar-grid">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className={index === 4 ? 'active' : ''} />
            ))}
          </div>
          <div className="screen-card">
            <div>
              <strong>Schedule Locked</strong>
              <small>2:00 PM slot</small>
            </div>
            <span className="mini-badge">Cal</span>
          </div>
        </>
      );
    case 'chat':
      return (
        <>
          <div className="chat-stack">
            <span className="chat-bubble left" />
            <span className="chat-bubble right" />
            <span className="chat-bubble left small" />
          </div>
          <div className="screen-pill-row">
            <span className="screen-pill active">Typing</span>
            <span className="screen-pill">Online</span>
          </div>
        </>
      );
    case 'finance':
      return (
        <>
          <div className="wallet-card">
            <strong>K18,420</strong>
            <small>Available Balance</small>
          </div>
          <div className="screen-card">
            <div>
              <strong>Secure Transfer</strong>
              <small>Wallet to bank</small>
            </div>
            <span className="mini-badge">SSL</span>
          </div>
        </>
      );
    default:
      return null;
  }
}

export default function MobileAppIllustration({ service }) {
  return (
    <div className={`mobile-illustration ${service.variant}`}>
      <div className="mobile-glow mobile-glow-one" />
      <div className="mobile-glow mobile-glow-two" />

      <svg className="mobile-illustration-bg" viewBox="0 0 360 250" aria-hidden="true">
        <defs>
          <linearGradient id="mobileGridStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(76, 201, 240, 0.28)" />
            <stop offset="100%" stopColor="rgba(45, 212, 191, 0.08)" />
          </linearGradient>
        </defs>
        <circle cx="62" cy="58" r="34" fill="rgba(76, 201, 240, 0.14)" />
        <circle cx="295" cy="46" r="24" fill="rgba(45, 212, 191, 0.12)" />
        <circle cx="315" cy="176" r="36" fill="rgba(76, 201, 240, 0.08)" />
        <path d="M52 190c44-34 79-61 123-61 51 0 62 40 111 40 21 0 42-7 65-24" fill="none" stroke="rgba(76, 201, 240, 0.2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
        <path d="M40 82c25 0 37 11 58 29 21 18 34 25 55 25 20 0 39-10 57-26 21-18 36-28 70-28" fill="none" stroke="rgba(45, 212, 191, 0.14)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      <div className="mobile-floating-card top">
        <AppIcon variant={service.variant} className="accent" />
        <div>
          <strong>{service.mockups[0]}</strong>
          <small>{service.badges[0]}</small>
        </div>
      </div>

      <div className="mobile-floating-card bottom">
        <div className="mobile-dot-stack">
          <span />
          <span />
          <span />
        </div>
        <div>
          <strong>{service.mockups[1]}</strong>
          <small>{service.badges[1]}</small>
        </div>
      </div>

      <div className="mobile-device tablet">
        <div className="tablet-header">
          <span />
          <span />
          <span />
        </div>
        <div className="tablet-content">
          <div className="tablet-card wide" />
          <div className="tablet-card" />
          <div className="tablet-card short" />
        </div>
      </div>

      <div className="mobile-device phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-app-header">
            <AppIcon variant={service.variant} />
            <div>
              <strong>{service.name}</strong>
              <small>{service.badges[2]}</small>
            </div>
          </div>
          <ScreenContent service={service} />
        </div>
      </div>

      <div className="mobile-avatar-badge">
        <div className="avatar-ring">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="17" r="8" fill="currentColor" opacity="0.9" />
            <path d="M12 38c2.2-7.5 7.5-12 12-12s9.8 4.5 12 12" fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="mobile-chip-row">
        {service.badges.map((badge) => (
          <span key={badge} className="mobile-chip">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
