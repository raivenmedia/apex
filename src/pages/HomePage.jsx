import { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileAppIllustration from '../components/MobileAppIllustration';
import WebsitePackageMockup from '../components/WebsitePackageMockup';
import Section from '../components/Section';
import { TransitionLink } from '../components/DemoTransition';
import {
  getWhatsAppLink,
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_PACKAGE_MESSAGES,
  WHATSAPP_CUSTOM_SOFTWARE_MESSAGE,
  WHATSAPP_MOBILE_APP_MESSAGE,
} from '../utils/whatsapp';

const services = [
  {
    id: 'website',
    title: 'Website Development',
    icon: '🌐',
    text: "A great website is your business's digital identity. Designed around your goals, customers and vision.",
    paragraphs: [
      "A great website is more than beautiful colours and images—it's your business's digital identity.",
      "At ApexCole Technology, every website is designed around your goals, your customers and your vision.",
      "We don't simply customise templates.",
      "We work closely with you to understand your business, then design a website that reflects your brand and helps you grow online.",
      "Whether you need a simple business profile, a landing page or a fully customised business platform, every project is planned around your specific requirements.",
    ],
    features: [
      'Built around your vision',
      'Responsive on every device',
      'Modern UI/UX',
      'SEO-friendly structure',
      'Fast loading',
      'Future-ready for upgrades',
    ],
    buttonText: 'Explore Website Packages',
    buttonAction: 'website-packages',
  },
  {
    id: 'digital',
    title: 'Digital Solutions',
    icon: '💻',
    text: 'Custom software systems built around your workflow to automate work and improve productivity.',
    paragraphs: [
      'Technology should solve problems—not create them.',
      'We build custom software that helps businesses automate work, improve productivity and manage daily operations more efficiently.',
      'Every solution is designed around your workflow instead of forcing your business to adapt to generic software.',
    ],
    examples: [
      'Inventory Management',
      'School Management',
      'Hospital Management',
      'Rental Management',
      'Hotel Management',
      'POS Systems',
      'CRM Systems',
      'HR Systems',
      'Business Dashboards',
      'Booking Platforms',
      'Custom Enterprise Software',
    ],
    buttonText: 'Request a Custom Solution',
    buttonAction: 'custom-solution',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    icon: '📱',
    text: 'Fast, intuitive mobile applications designed around your business objectives on Android and iOS.',
    paragraphs: [
      'Bring your business closer to your customers with professionally developed mobile applications.',
      'Whether you need an Android app, iPhone app or cross-platform solution, we build apps that are fast, intuitive and designed around your business objectives.',
    ],
    examples: [
      'Delivery Apps',
      'Taxi Apps',
      'Restaurant Apps',
      'Hotel Apps',
      'Pharmacy Apps',
      'School Apps',
      'Booking Apps',
      'E-Commerce Apps',
      'Internal Business Apps',
    ],
    buttonText: "Let's Build Your App",
    buttonAction: 'mobile-app',
  },
];

const benefits = [
  { title: 'Custom Solutions', text: 'Built around your goals, not templates.' },
  { title: 'Mobile First', text: 'Designed to feel effortless on every screen.' },
  { title: 'Professional Design', text: 'Modern presentation with premium clarity.' },
  { title: 'Business Focused', text: 'Every detail supports growth and trust.' },
  { title: 'Scalable Systems', text: 'Ready for the next chapter of your business.' },
  { title: 'Reliable Support', text: 'Confidence that lasts long after launch.' },
];

const serviceTabs = [
  { id: 'website', icon: '🌐', label: 'Website Development' },
  { id: 'digital', icon: '💻', label: 'Digital Solutions' },
  { id: 'mobile', icon: '📱', label: 'Mobile Applications' },
];

const websitePackages = [
  {
    name: 'Business Profile Website',
    variant: 'business',
    regularPrice: 'K2,500',
    promoPrice: 'K2,000',
    discount: '20% OFF',
    savings: 'Save K500',
    features: ['Responsive Website', 'Home Page', 'About Page', 'Services', 'Contact Page', 'Google Maps', 'WhatsApp Integration', 'Contact Form', 'Basic SEO Setup'],
    button: 'Request This Package',
    message: WHATSAPP_PACKAGE_MESSAGES.business,
  },
  {
    name: 'Landing Page',
    variant: 'landing',
    regularPrice: 'K3,125',
    promoPrice: 'K2,500',
    discount: '20% OFF',
    savings: 'Save K625',
    features: ['One High-Converting Page', 'Hero Section', 'Call-To-Action Sections', 'Contact Form', 'WhatsApp Button', 'Mobile Responsive', 'Basic SEO'],
    button: 'Request This Package',
    message: WHATSAPP_PACKAGE_MESSAGES.landing,
  },
  {
    name: 'Custom Website',
    variant: 'custom',
    regularPrice: 'K8,000',
    promoPrice: 'K5,000',
    discount: '38% OFF',
    savings: 'Save K3,000',
    features: ['Project Setup', 'Custom UI/UX Design', 'Fully Responsive Design', 'Three Custom Features Included'],
    button: 'Build My Website',
    note: 'The starting package includes any three custom features. Additional features can be added based on your project requirements.',
    note2: 'A fully customised website designed around your business, brand and requirements.',
    extraFeatures: ['Login & Registration', 'Product Listing & Upload', 'Shopping Cart & Checkout', 'Online Booking', 'Appointment System', 'Customer Dashboard', 'Admin Dashboard', 'Reports & Analytics', 'Payment Integration', 'Email Notifications'],
    message: WHATSAPP_PACKAGE_MESSAGES.custom,
  },
];

const websiteConfidencePanels = [
  {
    title: '🎯 Built Around Your Vision, Not Templates',
    content:
      "Every business is different, and your website should reflect that.\n\nAt ApexCole Technology, we don't simply hand you a ready-made template and replace the logo. We take time to understand your business, your goals, your customers and the image you want to present.\n\nWe work with your ideas, branding, colours, content and vision to create a website that represents your business professionally while giving visitors confidence in your brand.\n\nYour website is designed around your business—not the other way around.",
  },
  {
    title: '🎨 Custom Design & Branding',
    content:
      'Your website will be customised to match your business identity.\n\nThis includes your logo, colours, typography, images, business information and overall style.\n\nThe result is a website that feels unique and memorable while strengthening your brand.',
  },
  {
    title: '📱 Responsive On Every Device',
    content:
      'Your website is carefully designed to work beautifully on desktops, laptops, tablets and smartphones.\n\nVisitors enjoy the same smooth experience regardless of the device they are using.',
  },
  {
    title: '⚡ Built For Performance',
    content:
      'A beautiful website is only useful if it performs well.\n\nOur websites are designed with speed, usability and reliability in mind so your visitors can quickly find the information they need.',
  },
  {
    title: '🚀 Ready To Grow',
    content:
      'As your business grows, your website can grow with it.\n\nNeed online payments?\n\nCustomer accounts?\n\nBooking systems?\n\nInventory management?\n\nOnline ordering?\n\nAdditional features can be added whenever your business is ready to expand.',
  },
  {
    title: "🤝 We're With You",
    content:
      "Building your website is a collaborative process.\n\nWe'll guide you through planning, design and development while listening to your ideas and ensuring the final result supports your business objectives.",
  },
];

const digitalSolutionCategories = [
  {
    name: 'Business Management',
    icon: '🏢',
    description: 'Operational systems designed to improve visibility, productivity and internal coordination.',
    examples: ['Customer Relationship Management (CRM)', 'Enterprise Resource Planning (ERP)', 'Human Resource Management', 'Payroll System', 'Employee Attendance', 'Leave Management', 'Visitor Management', 'Document Management', 'Office Automation', 'Task Management', 'Project Management', 'Business Analytics Dashboard'],
  },
  {
    name: 'Retail & E-Commerce',
    icon: '🛒',
    description: 'Commercial platforms that connect stock, sales, fulfillment and customer experiences.',
    examples: ['Point of Sale (POS)', 'Inventory Management', 'Stock Control', 'Warehouse Management', 'Supplier Management', 'Purchase Orders', 'Customer Loyalty System', 'Barcode & QR Inventory', 'Online Store', 'Multi-Vendor Marketplace', 'Delivery Management'],
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    description: 'Healthcare software tailored for patient care, records, appointments and practice efficiency.',
    examples: ['Clinic Management System', 'Hospital Management System', 'Pharmacy Management System', 'Laboratory Information System', 'Electronic Medical Records (EMR)', 'Patient Appointment System', 'Prescription Management', 'Medical Billing', 'Telemedicine Platform'],
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'Digital platforms that support administration, communication and modern learning delivery.',
    examples: ['School Management System', 'University Management System', 'Student Information System', 'Parent Portal', 'Teacher Portal', 'Student Results Portal', 'Learning Management System (LMS)', 'School Fee Management', 'Online Examination System', 'Library Management System'],
  },
  {
    name: 'Hospitality',
    icon: '🏨',
    description: 'Guest-focused systems that simplify reservations, operations, service and venue coordination.',
    examples: ['Hotel Management System', 'Lodge Reservation System', 'Restaurant Ordering System', 'Table Reservation', 'Guest Management', 'Kitchen Display System', 'Food Delivery Platform', 'Housekeeping Management'],
  },
  {
    name: 'Property Management',
    icon: '🏠',
    description: 'Property software built to manage tenants, leases, maintenance workflows and listings.',
    examples: ['Rental Management System', 'Property Management System', 'Tenant Portal', 'Lease Management', 'Maintenance Request System', 'Real Estate Listing Platform'],
  },
  {
    name: 'Transport & Logistics',
    icon: '🚚',
    description: 'Logistics tools for tracking assets, coordinating teams and improving delivery performance.',
    examples: ['Fleet Management', 'Vehicle Tracking Dashboard', 'Courier Management', 'Delivery Tracking', 'Driver Management', 'Bus Ticketing System', 'Fuel Management'],
  },
  {
    name: 'Event Systems',
    icon: '🎫',
    description: 'Booking and event systems that support registration, access control and scheduling.',
    examples: ['Event Ticketing Platform', 'QR Ticket Validation', 'Online Booking System', 'Appointment Scheduling', 'Conference Management', 'Visitor Registration'],
  },
  {
    name: 'AI & Automation',
    icon: '🤖',
    description: 'Automation and AI systems that reduce manual work and improve customer responsiveness.',
    examples: ['AI Chatbots', 'WhatsApp Automation', 'Email Automation', 'Workflow Automation', 'AI Customer Support', 'Smart Business Assistant', 'AI Knowledge Base'],
  },
  {
    name: 'Reporting & Analytics',
    icon: '📊',
    description: 'Data-driven dashboards and reports that help decision-makers monitor performance clearly.',
    examples: ['Executive Dashboards', 'Business Intelligence', 'Sales Analytics', 'Financial Reporting', 'KPI Dashboards', 'Custom Reports'],
  },
  {
    name: 'Custom Enterprise Software',
    icon: '⚙️',
    description: 'Build completely custom software tailored to your workflow, industry and business goals.',
    examples: ['Internal Company Systems', 'Enterprise Platforms', 'Customer Portals', 'Staff Portals', 'Workflow Automation', 'Cloud-Based Platforms', 'API Integrations', 'Industry-Specific Software'],
    note: 'Our team scopes every custom build around your exact requirements and prepares a tailored quotation before development begins.',
  },
];

const mobileApplicationServices = [
  {
    name: 'Delivery App',
    variant: 'delivery',
    description: 'Courier and logistics apps with live order tracking, route visibility, notifications and delivery coordination.',
    mockups: ['Order Tracking', 'Courier Dispatch'],
    badges: ['Notifications', 'GPS Tracking', 'Live Delivery'],
  },
  {
    name: 'Taxi Booking App',
    variant: 'taxi',
    description: 'Ride-booking apps with map interfaces, driver assignment, trip updates, fares and real-time location graphics.',
    mockups: ['Trip Map', 'Driver ETA'],
    badges: ['Location Pins', 'Smart Routing', 'Ride Status'],
  },
  {
    name: 'Restaurant App',
    variant: 'restaurant',
    description: 'Food ordering apps with menu browsing, cart flows, delivery requests and modern customer ordering experiences.',
    mockups: ['Food Listing', 'Checkout Flow'],
    badges: ['Quick Orders', 'Secure Payments', 'Push Alerts'],
  },
  {
    name: 'Hotel Booking App',
    variant: 'hotel',
    description: 'Luxury booking apps with room listings, guest profiles, reservations and premium mobile hospitality interfaces.',
    mockups: ['Room Booking', 'Guest Profile'],
    badges: ['Premium UI', 'Reservations', 'Guest Services'],
  },
  {
    name: 'Clinic App',
    variant: 'clinic',
    description: 'Appointment-based healthcare apps for patient scheduling, doctor availability, reminders and consultation access.',
    mockups: ['Appointment Screen', 'Doctor Schedule'],
    badges: ['Patient Care', 'Medical Alerts', 'Secure Access'],
  },
  {
    name: 'Pharmacy App',
    variant: 'pharmacy',
    description: 'Medicine ordering apps with prescription upload, refill workflows, delivery coordination and support messaging.',
    mockups: ['Prescription Upload', 'Medicine Order'],
    badges: ['Prescription Flow', 'Cloud Records', 'Fast Delivery'],
  },
  {
    name: 'E-Commerce App',
    variant: 'commerce',
    description: 'Shopping apps with product listing, cart, payments, delivery updates and polished mobile storefront experiences.',
    mockups: ['Shopping Cart', 'Payment Screen'],
    badges: ['Product Grid', 'Digital Checkout', 'Order Updates'],
  },
  {
    name: 'School App',
    variant: 'school',
    description: 'Student dashboards with classes, assignments, results, communication tools and parent-friendly mobile access.',
    mockups: ['Student Dashboard', 'Results Portal'],
    badges: ['Assignments', 'Results', 'Parent Access'],
  },
  {
    name: 'Business App',
    variant: 'business',
    description: 'Business productivity apps with analytics dashboards, charts, approvals, staff tools and mobile reporting.',
    mockups: ['Analytics Dashboard', 'Team Workspace'],
    badges: ['AI Insights', 'Productivity', 'Dashboards'],
  },
  {
    name: 'Booking App',
    variant: 'booking',
    description: 'Appointment and reservation apps with calendars, time slots, confirmations, reminders and smart scheduling.',
    mockups: ['Calendar Booking', 'Time Slots'],
    badges: ['Scheduling', 'Reminders', 'Availability'],
  },
  {
    name: 'Chat App',
    variant: 'chat',
    description: 'Modern messaging apps with conversation threads, notifications, support chats and customer communication tools.',
    mockups: ['Messaging UI', 'Live Conversations'],
    badges: ['Chat Threads', 'Push Messages', 'Online Status'],
  },
  {
    name: 'Finance App',
    variant: 'finance',
    description: 'Mobile banking and wallet apps with transaction flows, balance views, secure payments and modern fintech visuals.',
    mockups: ['Wallet Screen', 'Transactions'],
    badges: ['Secure Payment', 'Digital Wallet', 'Automation'],
  },
];

function getDigitalQuotationMessage(serviceName) {
  return `Hello ApexCole Technology, I'm interested in your ${serviceName} digital solutions for my business. I would like to request a quotation.`;
}

function getMobileQuotationMessage(serviceName) {
  return `Hello ApexCole Technology, I'm interested in ${serviceName}. I would like to request a quotation for a mobile application.`;
}

function HomePage() {
  const [activeService, setActiveService] = useState('website');
  const [expandedSolution, setExpandedSolution] = useState(digitalSolutionCategories[0].name);
  const [expandedWebsitePanel, setExpandedWebsitePanel] = useState('');
  const [expandedServiceCard, setExpandedServiceCard] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Section id="hero" className="hero">
          <div className="hero-card glass">
            <div className="orb one" />
            <div className="orb two" />
            <div className="hero-content">
              <span className="eyebrow">ApexCole Technology</span>
              <h1>Build the Future of Your Business.</h1>
              <p>
                Professional websites, mobile applications and business software designed around your business goals.
              </p>
              <div className="hero-actions">
                <TransitionLink className="btn btn-primary" to="/showcase">
                  Explore Website Showcase
                </TransitionLink>
                <a className="btn btn-secondary" href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">
                  Request a Free Quote
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">Scroll to discover</div>
        </Section>

        <Section id="services">
          <div className="section-heading">
            <div>
              <h2>Our Services</h2>
              <p>Click any service to explore detailed capabilities and solutions.</p>
            </div>
          </div>
          <div className="service-grid expandable-service-grid">
            {services.map((service) => {
              const isOpen = expandedServiceCard === service.id;

              return (
                <article
                  className={`card service-card-interactive ${isOpen ? 'expanded' : ''}`}
                  key={service.id}
                >
                  <div
                    className="service-card-header"
                    onClick={() => setExpandedServiceCard(isOpen ? null : service.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`service-details-${service.id}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedServiceCard(isOpen ? null : service.id);
                      }
                    }}
                  >
                    <div className="service-card-header-top">
                      <div className="service-icon-badge">{service.icon}</div>
                      <div className="service-chevron" aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3>{service.title}</h3>
                    <p className="service-summary">{service.text}</p>
                    <div className="service-toggle-hint">
                      <span>{isOpen ? 'Click to collapse ▲' : 'Click to expand details ▼'}</span>
                    </div>
                  </div>

                  <div
                    id={`service-details-${service.id}`}
                    className={`service-card-body ${isOpen ? 'open' : ''}`}
                  >
                    <div className="service-card-body-inner">
                      <div className="service-expanded-divider" />
                      <h2>{service.title}</h2>

                      <div className="service-paragraphs">
                        {service.paragraphs.map((p) => (
                          <p key={p.slice(0, 25)}>{p}</p>
                        ))}
                      </div>

                      {service.features ? (
                        <div className="service-feature-box">
                          <h4 className="service-subheading">Features Included</h4>
                          <ul className="service-feature-list">
                            {service.features.map((feat) => (
                              <li key={feat}>
                                <span className="feature-check">✔</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {service.examples ? (
                        <div className="service-examples-box">
                          <h4 className="service-subheading">Examples include:</h4>
                          <div className="service-examples-grid">
                            {service.examples.map((ex) => (
                              <div className="example-item" key={ex}>
                                <span className="example-bullet">•</span>
                                <span>{ex}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="service-card-actions">
                        {service.buttonAction === 'website-packages' ? (
                          <button
                            type="button"
                            className="btn btn-primary service-action-btn"
                            onClick={() => {
                              setActiveService('website');
                              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            {service.buttonText} →
                          </button>
                        ) : service.buttonAction === 'custom-solution' ? (
                          <a
                            className="btn btn-primary service-action-btn"
                            href={getWhatsAppLink(WHATSAPP_CUSTOM_SOFTWARE_MESSAGE)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {service.buttonText} →
                          </a>
                        ) : service.buttonAction === 'mobile-app' ? (
                          <a
                            className="btn btn-primary service-action-btn"
                            href={getWhatsAppLink(WHATSAPP_MOBILE_APP_MESSAGE)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {service.buttonText} →
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="pricing" className="pricing-section">
          <div className="service-nav" role="tablist" aria-label="Service navigation">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                id={`service-tab-${tab.id}`}
                role="tab"
                aria-selected={activeService === tab.id}
                aria-controls={`service-panel-${tab.id}`}
                className={`service-tab ${activeService === tab.id ? 'active' : ''}`}
                onClick={() => setActiveService(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div
            key={activeService}
            id={`service-panel-${activeService}`}
            className="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeService}`}
          >
            {activeService === 'website' ? (
              <>
                <div className="section-heading">
                  <div>
                    <h2>Website Packages</h2>
                    <p>Professional websites built for businesses of every size. Choose a package that fits your needs or request a custom quotation.</p>
                  </div>
                </div>

                <div className="promotion-banner" role="status">
                  <div>
                    <p className="promotion-eyebrow">🎉 ApexCole Technology Launch Promotion</p>
                    <h3>For a limited time, enjoy discounted pricing on selected website packages. Secure your website today and save before this promotion ends.</h3>
                  </div>
                  <span className="promotion-badge">Limited Time Offer</span>
                </div>

                <div className="pricing-grid">
                  {websitePackages.map((pkg) => (
                    <article className="card package-card website-package-card" key={pkg.name}>
                      <div className="promotion-badges">
                        <span className="promo-badge">🔥 LIMITED TIME PROMOTION</span>
                        <span className="promo-ribbon">SAVE TODAY</span>
                      </div>
                      <WebsitePackageMockup variant={pkg.variant} />
                      <h3>{pkg.name}</h3>
                      <div className="pricing-block">
                        <p className="package-label">Regular Price</p>
                        <p className="package-regular">{pkg.regularPrice}</p>
                        <p className="package-discount">{pkg.discount}</p>
                        <p className="package-label">Now Only</p>
                        <p className="package-price">{pkg.promoPrice}</p>
                        <p className="package-savings">{pkg.savings}</p>
                      </div>
                      <ul className="package-list">
                        {pkg.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      {pkg.extraFeatures ? (
                        <div className="package-extra-list">
                          <p className="package-extra-title">Examples of selectable features:</p>
                          <ul>
                            {pkg.extraFeatures.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {pkg.note ? <p className="package-note">{pkg.note}</p> : null}
                      {pkg.note2 ? <p className="package-note secondary-note">{pkg.note2}</p> : null}

                      <div className="package-why-choose">
                        <div className="package-why-choose-header">
                          <p className="package-why-choose-eyebrow">Why Choose This Package?</p>
                          <p className="package-why-choose-text">Learn why your ApexCole website is designed around your unique business vision.</p>
                        </div>

                        <div className="package-accordion-list">
                          {websiteConfidencePanels.map((panel) => {
                            const panelKey = `${pkg.name}-${panel.title}`;
                            const isOpen = expandedWebsitePanel === panelKey;
                            const panelId = `website-package-panel-${pkg.variant}-${panel.title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/^-|-$/g, '')}`;

                            return (
                              <div className={`package-accordion-item ${isOpen ? 'open' : ''}`} key={panelKey}>
                                <button
                                  type="button"
                                  className={`package-accordion-trigger ${isOpen ? 'active' : ''}`}
                                  aria-expanded={isOpen}
                                  aria-controls={panelId}
                                  onClick={() => setExpandedWebsitePanel(isOpen ? '' : panelKey)}
                                >
                                  <span className="package-accordion-title">{panel.title}</span>
                                  <span className="package-accordion-chevron" aria-hidden="true">
                                    <svg viewBox="0 0 20 20" focusable="false">
                                      <path d="M5 7.5 10 12.5 15 7.5" />
                                    </svg>
                                  </span>
                                </button>

                                <div id={panelId} className={`package-accordion-body ${isOpen ? 'open' : ''}`}>
                                  <div className="package-accordion-body-inner">
                                    {panel.content.split('\n\n').map((paragraph) => (
                                      <p key={`${panelKey}-${paragraph}`}>{paragraph}</p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <a className="btn btn-primary package-btn" href={getWhatsAppLink(pkg.message)} target="_blank" rel="noreferrer">
                        {pkg.button}
                      </a>
                    </article>
                  ))}
                </div>
              </>
            ) : null}

            {activeService === 'digital' ? (
              <>
                <div className="section-heading">
                  <div>
                    <h2>Digital Solutions</h2>
                    <p>Professional business systems and custom software solutions structured around your operations, workflow and growth goals.</p>
                  </div>
                </div>

                <div className="promotion-banner" role="status">
                  <div>
                    <p className="promotion-eyebrow">Custom App & Software Solutions</p>
                    <h3>Switch through our business solution categories, expand the systems you need and request a tailored quotation with no prices displayed.</h3>
                  </div>
                  <span className="promotion-badge">Quotation Based</span>
                </div>

                <div className="pricing-grid">
                  {digitalSolutionCategories.map((category) => {
                    const isOpen = expandedSolution === category.name;

                    return (
                      <article className="card package-card" key={category.name}>
                        <div className="promotion-badges">
                          <span className="promo-badge">{category.icon} {category.name}</span>
                          <span className="promo-ribbon">{isOpen ? 'Expanded' : 'View Systems'}</span>
                        </div>
                        <h3>{category.name}</h3>
                        <p className="package-description">{category.description}</p>
                        <button
                          type="button"
                          className={`service-accordion-toggle ${isOpen ? 'active' : ''}`}
                          aria-expanded={isOpen}
                          onClick={() => setExpandedSolution(isOpen ? '' : category.name)}
                        >
                          {isOpen ? 'Hide Systems' : 'View Systems'}
                        </button>
                        <div className={`service-accordion-body ${isOpen ? 'open' : ''}`}>
                          <div className="service-accordion-inner">
                            <ul className="package-list">
                              {category.examples.map((example) => (
                                <li key={example}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {category.note ? <p className="package-note secondary-note">{category.note}</p> : null}
                        <a className="btn btn-primary package-btn" href={getWhatsAppLink(getDigitalQuotationMessage(category.name))} target="_blank" rel="noreferrer">
                          Request Quotation
                        </a>
                      </article>
                    );
                  })}
                </div>
              </>
            ) : null}

            {activeService === 'mobile' ? (
              <>
                <div className="section-heading">
                  <div>
                    <h2>Mobile Applications</h2>
                    <p>Custom mobile app services for Android, iPhone and cross-platform business use cases, each available on quotation.</p>
                  </div>
                </div>

                <div className="promotion-banner" role="status">
                  <div>
                    <p className="promotion-eyebrow">Mobile App Services</p>
                    <h3>Each mobile app category includes custom vector visuals, premium device mockups and subtle motion that blends with the current ApexCole Technology design language.</h3>
                  </div>
                  <span className="promotion-badge">Custom Quote</span>
                </div>

                <div className="pricing-grid">
                  {mobileApplicationServices.map((service) => (
                    <article className="card package-card mobile-app-card" key={service.name}>
                      <div className="promotion-badges">
                        <span className="promo-badge">📱 Mobile Service</span>
                        <span className="promo-ribbon">Quotation Only</span>
                      </div>
                      <MobileAppIllustration service={service} />
                      <h3>{service.name}</h3>
                      <p className="package-description">{service.description}</p>
                      <div className="mobile-mockup-list">
                        {service.mockups.map((mockup) => (
                          <span key={mockup} className="mobile-mockup-tag">
                            {mockup}
                          </span>
                        ))}
                      </div>
                      <a
                        className="btn btn-primary package-btn"
                        href={getWhatsAppLink(getMobileQuotationMessage(service.name))}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Request Quotation
                      </a>
                    </article>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </Section>

        <Section id="transformation">
          <div className="transform-card">
            <h2>The World Has Changed.</h2>
            <p className="muted">
              Customers discover businesses online. They book online. They buy online. They communicate online. Your business deserves a professional digital presence.
            </p>
            <div className="hero-actions">
              <TransitionLink className="btn btn-primary" to="/showcase">
                Continue Journey
              </TransitionLink>
            </div>
          </div>
        </Section>

        <Section id="benefits">
          <div className="section-heading">
            <h2>Why Choose ApexCole</h2>
            <p>Clarity, confidence and thoughtful design at every step.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <div className="benefit-icon">✦</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <div className="cta-card">
            <h2>Ready to Build Your Digital Presence?</h2>
            <p className="muted">Let's turn your vision into something people will remember.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <TransitionLink className="btn btn-primary" to="/showcase">
                Explore Website Showcase
              </TransitionLink>
              <a className="btn btn-secondary" href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">
                Request Quote
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>ApexCole</h3>
            <p className="muted">Premium digital experiences for growing businesses.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li>Services</li>
              <li>Showcase</li>
              <li>Pricing</li>
              <li>Quote</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>WhatsApp</li>
              <li>Email</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
