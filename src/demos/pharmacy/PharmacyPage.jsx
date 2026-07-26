import { useEffect, useMemo, useState } from 'react';
import './pharmacy.css';

const heroSlides = [
  {
    title: 'Trusted Medicines For Your Family',
    copy: 'Discover dependable pharmacy essentials, prescription support and fast delivery in one modern experience.',
    button: 'Browse Medicines',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=84',
  },
  {
    title: 'Upload Your Prescription',
    copy: 'Send prescriptions securely and get a guided review from our pharmacy team in minutes.',
    button: 'Upload Prescription',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=84',
  },
  {
    title: 'Fast Medicine Delivery To Your Door',
    copy: 'Enjoy same-day delivery options, thoughtful packing and dependable doorstep service.',
    button: 'Learn About Delivery',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=84',
  },
];

const categories = [
  { title: 'Pain Relief', icon: '🩹', description: 'Fast support for everyday discomfort.' },
  { title: 'Cold & Flu', icon: '🤧', description: 'Reliable relief for symptoms and recovery.' },
  { title: 'Vitamins', icon: '💊', description: 'Daily nutrition and wellness support.' },
  { title: 'Baby Care', icon: '🍼', description: 'Gentle essentials for family comfort.' },
  { title: 'First Aid', icon: '🩺', description: 'Everyday medical readiness at home.' },
  { title: 'Blood Pressure', icon: '❤️', description: 'Supportive options for ongoing care.' },
];

const products = [
  {
    id: 'paracetamol',
    name: 'Paracetamol 500mg',
    category: 'Pain Relief',
    price: 'K45',
    description: 'Rapid relief for headaches, fever and mild pain.',
    availability: 'In Stock',
    prescription: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=84',
    strength: '500mg',
    packageSize: '24 tablets',
    instructions: 'Take 1-2 tablets every 4-6 hours as needed.',
    warnings: 'Do not exceed the recommended daily dose.',
    storage: 'Store below 25°C in a cool, dry place.',
  },
  {
    id: 'flu-relief',
    name: 'Flu Relief Syrup',
    category: 'Cold & Flu',
    price: 'K88',
    description: 'Helpful symptom support for congestion and cold discomfort.',
    availability: 'Limited Stock',
    prescription: false,
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=84',
    strength: '120ml',
    packageSize: '1 bottle',
    instructions: 'Take as directed by the packaging label or pharmacist.',
    warnings: 'Consult a clinician if symptoms persist longer than 3 days.',
    storage: 'Keep the bottle tightly closed at room temperature.',
  },
  {
    id: 'multivitamin',
    name: 'Daily Multivitamin',
    category: 'Vitamins',
    price: 'K120',
    description: 'Daily nutrition support for busy modern lifestyles.',
    availability: 'In Stock',
    prescription: false,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=84',
    strength: 'One a day',
    packageSize: '30 capsules',
    instructions: 'Take one capsule daily with food.',
    warnings: 'Keep out of reach of children.',
    storage: 'Store in a dry place away from direct sunlight.',
  },
  {
    id: 'insulin',
    name: 'Insulin Pen Support Kit',
    category: 'Diabetes Care',
    price: 'K360',
    description: 'Care kit for insulin administration and safe storage habits.',
    availability: 'By Prescription',
    prescription: true,
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=84',
    strength: 'Complete care kit',
    packageSize: '1 kit',
    instructions: 'Use only as directed by a licensed healthcare professional.',
    warnings: 'Prescription required before purchase.',
    storage: 'Keep refrigerated as directed on the packaging.',
  },
  {
    id: 'blood-pressure',
    name: 'BP Monitor',
    category: 'Blood Pressure',
    price: 'K650',
    description: 'Easy home monitoring for routine blood pressure tracking.',
    availability: 'In Stock',
    prescription: false,
    image: 'https://images.unsplash.com/photo-1576765607924-b4f4cefae0d1?auto=format&fit=crop&w=900&q=84',
    strength: 'Digital',
    packageSize: '1 device',
    instructions: 'Measure in a calm setting and follow the included guide.',
    warnings: 'Consult a clinician if readings remain elevated.',
    storage: 'Store on a flat surface in a dry room.',
  },
  {
    id: 'baby-oil',
    name: 'Baby Gentle Oil',
    category: 'Baby Care',
    price: 'K95',
    description: 'Soft nourishment for comfort, massage and daily care.',
    availability: 'In Stock',
    prescription: false,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=84',
    strength: '100ml',
    packageSize: '1 bottle',
    instructions: 'Apply lightly to the skin as needed.',
    warnings: 'Patch test before regular use on sensitive skin.',
    storage: 'Keep tightly closed and away from heat.',
  },
];

const services = [
  { title: 'Health Advice', copy: 'Talk through everyday symptoms and safe medication use with a pharmacist.' },
  { title: 'Medication Reminders', copy: 'Set reminders and stay consistent with regular treatment plans.' },
  { title: 'Pharmacist Consultation', copy: 'Request a private consultation for product guidance and confidence.' },
];

const articles = [
  { title: 'How to store medicines safely at home', tag: 'Health Advice' },
  { title: 'When to seek urgent pharmacy guidance', tag: 'Medication Support' },
  { title: 'What to keep in a home first aid kit', tag: 'Family Care' },
];

const faqs = [
  { question: 'Do I need a prescription for every medicine?', answer: 'Only selected medicines require a prescription. Clear labels highlight these products.' },
  { question: 'Can I upload a photo of my prescription?', answer: 'Yes. PDF, JPG and PNG files are all supported in this demonstration experience.' },
  { question: 'Do you offer same-day delivery?', answer: 'Same-day delivery is available in selected delivery zones and is shown at checkout.' },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function PharmacyPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [prescriptionStep, setPrescriptionStep] = useState('form');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [prescriptionForm, setPrescriptionForm] = useState({ name: '', phone: '', email: '', notes: '', file: null });
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [suggestedMedicines, setSuggestedMedicines] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (prescriptionStep !== 'uploading') return undefined;

    const timer = window.setInterval(() => {
      setUploadProgress((current) => {
        const next = current + 10;
        if (next >= 100) {
          window.clearInterval(timer);
          setPrescriptionStep('reviewed');
          const noteValue = prescriptionForm.notes.toLowerCase();
          const suggested = noteValue.includes('cold') || noteValue.includes('flu')
            ? products.filter((item) => item.category === 'Cold & Flu' || item.category === 'Pain Relief').slice(0, 3)
            : noteValue.includes('blood') || noteValue.includes('pressure')
              ? products.filter((item) => item.category === 'Blood Pressure').slice(0, 2)
              : noteValue.includes('baby') || noteValue.includes('infant')
                ? products.filter((item) => item.category === 'Baby Care').slice(0, 2)
                : products.slice(0, 3);
          setSuggestedMedicines(suggested);
          return 100;
        }
        return next;
      });
    }, 400);

    return () => window.clearInterval(timer);
  }, [prescriptionForm.notes, prescriptionStep]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + Number(item.price.replace('K', '')) * item.quantity, 0);
  }, [cart]);

  function handleSlideChange(direction) {
    setActiveSlide((current) => {
      if (direction === 'next') return (current + 1) % heroSlides.length;
      return current === 0 ? heroSlides.length - 1 : current - 1;
    });
  }

  function handleTouchStart(event) {
    setTouchStart(event.touches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (delta > 50) handleSlideChange('prev');
    if (delta < -50) handleSlideChange('next');
    setTouchStart(null);
  }

  function handleFormChange(event) {
    const { name, value, files } = event.target;
    if (name === 'file') {
      const fileValue = files && files[0] ? files[0] : null;
      setPrescriptionForm((current) => ({ ...current, file: fileValue }));
      setUploadedFileName(fileValue ? fileValue.name : '');
      return;
    }
    setPrescriptionForm((current) => ({ ...current, [name]: value }));
  }

  function handleUploadSubmit(event) {
    event.preventDefault();
    setPrescriptionStep('uploading');
    setUploadProgress(0);
    setSuggestedMedicines([]);
    setCheckoutMessage('');
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }

  function updateCartQuantity(id, delta) {
    setCart((current) => current.flatMap((item) => {
      if (item.id !== id) return [item];
      const nextQuantity = item.quantity + delta;
      return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
    }));
  }

  function handleCheckout() {
    setCheckoutMessage('Demonstration checkout is ready. A licensed pharmacist will confirm your order.');
  }

  return (
    <div className="pharmacy-shell">
      <header className="pharmacy-header">
        <div className="pharmacy-header-inner">
          <a href="#home" className="pharmacy-brand">
            <span className="brand-icon">✚</span>
            <span>
              <strong>MediCare Pharmacy Zambia</strong>
              <small>Your Health. Delivered With Care.</small>
            </span>
          </a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
            ☰
          </button>
          <nav className={`pharmacy-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop Medicines</a>
            <a href="#prescription" onClick={() => setMenuOpen(false)}>Prescription Upload</a>
            <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#track" onClick={() => setMenuOpen(false)}>Track Order</a>
          </nav>
          <div className="pharmacy-tools">
            <label className="search-pill">
              <span>🔎</span>
              <input type="text" placeholder="Search medicines" />
            </label>
            <button type="button" className="tool-button" aria-label="Cart">🛒</button>
            <button type="button" className="tool-button" aria-label="Profile">👤</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero-section" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="hero-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {heroSlides.map((slide) => (
              <div key={slide.title} className="hero-slide" style={{ backgroundImage: `linear-gradient(90deg, rgba(6, 39, 74, 0.82) 0%, rgba(7, 54, 98, 0.68) 45%, rgba(12, 60, 95, 0.32) 100%), url(${slide.image})` }}>
                <div className="pharmacy-container hero-inner">
                  <div className="hero-copy">
                    <p className="eyebrow">Premium Online Pharmacy</p>
                    <h1>{slide.title}</h1>
                    <p>{slide.copy}</p>
                    <div className="hero-actions">
                      <a href="#shop" className="primary-btn">{slide.button}</a>
                      <a href="#prescription" className="secondary-btn">Prescription Support</a>
                    </div>
                  </div>
                  <div className="hero-badge">
                    <h3>Fast & Trusted</h3>
                    <p>Secure uploads, quick delivery and trusted pharmacy guidance.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-dots">
            {heroSlides.map((slide, index) => (
              <button key={slide.title} type="button" className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Slide ${index + 1}`} />
            ))}
          </div>
        </section>

        <div className="pharmacy-container">
          <div className="notice-card">
            <span>ℹ</span>
            <p>This pharmacy website is a demonstration created by ApexCole Technology. Products, prices and prescription reviews are fictional and provided for demonstration purposes only.</p>
          </div>
        </div>

        <section id="prescription" className="section-block">
          <div className="pharmacy-container">
            <SectionHeading eyebrow="Prescription Upload" title="Fast prescription review with professional support." copy="Upload a prescription photo or document and receive a guided demonstration review on the spot." />
            <div className="prescription-layout">
              <form className="upload-card" onSubmit={handleUploadSubmit}>
                <h3>Upload Prescription</h3>
                <p>Supported files: PDF, JPG, PNG.</p>
                <label>
                  Patient Name
                  <input type="text" name="name" value={prescriptionForm.name} onChange={handleFormChange} placeholder="Enter patient name" required />
                </label>
                <label>
                  Phone Number
                  <input type="tel" name="phone" value={prescriptionForm.phone} onChange={handleFormChange} placeholder="Enter phone number" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={prescriptionForm.email} onChange={handleFormChange} placeholder="Enter email address" required />
                </label>
                <label>
                  Upload Prescription
                  <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFormChange} required />
                </label>
                <label>
                  Optional Notes
                  <textarea name="notes" value={prescriptionForm.notes} onChange={handleFormChange} placeholder="Add any notes for the pharmacy team" />
                </label>
                <button className="primary-btn" type="submit">Submit Prescription</button>
              </form>

              <div className="review-card">
                {prescriptionStep === 'form' && (
                  <>
                    <h3>Professional Review</h3>
                    <p>Your prescription will be reviewed by a licensed pharmacy professional before any medicines are dispensed.</p>
                    <div className="review-pill">✔ Secure upload</div>
                    <div className="review-pill">✔ Guided assessment</div>
                    <div className="review-pill">✔ Trusted advice</div>
                  </>
                )}

                {prescriptionStep === 'uploading' && (
                  <>
                    <h3>Prescription Received</h3>
                    <p>Our pharmacy team is reviewing your uploaded prescription.</p>
                    <div className="progress-bar"><span style={{ width: `${uploadProgress}%` }} /></div>
                    <p className="progress-copy">{uploadProgress}% complete</p>
                  </>
                )}

                {prescriptionStep === 'reviewed' && (
                  <>
                    <h3>Prescription reviewed successfully.</h3>
                    <p>Suggested medicines are shown below based on the uploaded prescription details.</p>
                    <div className="review-pill">✔ Prescription Reviewed</div>
                    {!suggestedMedicines.length ? <p>No suggestions available, but a pharmacist will confirm the final order.</p> : <div className="suggested-products">{suggestedMedicines.map((item) => <div key={item.id} className="suggested-product"><strong>{item.name}</strong><span>{item.price}</span></div>)}</div>}
                    <p className="small-note">This is a demonstration only. Medicines are not dispensed automatically. A licensed pharmacy professional reviews every prescription before dispensing.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="section-block">
          <div className="pharmacy-container">
            <SectionHeading eyebrow="Online Pharmacy" title="Shop trusted medicines in a premium digital experience." copy="Products are arranged into clear categories with modern product cards and reliable availability information." />
            <div className="category-row">
              {categories.map((category) => (
                <div className="category-pill" key={category.title}><span>{category.icon}</span>{category.title}</div>
              ))}
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-media" style={{ backgroundImage: `url(${product.image})` }} />
                  <div className="product-content">
                    <div className="product-meta-row">
                      <span className="category-label">{product.category}</span>
                      {product.prescription ? <span className="prescription-badge">Prescription Required</span> : null}
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-footer">
                      <strong>{product.price}</strong>
                      <span>{product.availability}</span>
                    </div>
                    <div className="product-actions">
                      <button className="secondary-btn" type="button" onClick={() => { setSelectedProduct(product); setShowDetails(true); }}>View Details</button>
                      <button className="primary-btn" type="button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="pharmacy-container cart-layout">
            <div className="cart-card">
              <div className="section-heading compact">
                <div>
                  <p className="eyebrow">Shopping Cart</p>
                  <h2>Review your chosen medicines.</h2>
                </div>
              </div>
              {cart.length === 0 ? <p className="empty-cart">Your cart is currently empty. Add medicines to build your order.</p> : (
                <div className="cart-list">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.price}</p>
                      </div>
                      <div className="cart-controls">
                        <button type="button" onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="cart-total">
                <span>Estimated Total</span>
                <strong>K{cartTotal}</strong>
              </div>
              <button className="primary-btn full-width" type="button" onClick={handleCheckout}>Proceed to Demonstration Checkout</button>
              {checkoutMessage ? <p className="checkout-message">{checkoutMessage}</p> : null}
            </div>

            <div className="delivery-card" id="delivery">
              <SectionHeading eyebrow="Delivery" title="Reliable medicine delivery for everyday convenience." copy="Choose from home delivery, same-day arrival and store pickup based on availability." />
              <div className="delivery-grid">
                <div>
                  <h3>Home Delivery</h3>
                  <p>Daily delivery to select residential areas.</p>
                </div>
                <div>
                  <h3>Same-Day Delivery</h3>
                  <p>Available for eligible orders and locations.</p>
                </div>
                <div>
                  <h3>Store Pickup</h3>
                  <p>Collect your order from our pharmacy counter.</p>
                </div>
              </div>
              <div className="delivery-details">
                <p><strong>Delivery Areas:</strong> Lusaka Central, Northmead, Kabulonga and nearby districts.</p>
                <p><strong>Estimated Delivery Time:</strong> 1–3 hours for same-day orders.</p>
                <p><strong>Delivery Charges:</strong> Demo fee from K35.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="pharmacy-container">
            <SectionHeading eyebrow="Health Services" title="More than medicine, a trusted care experience." copy="From pharmacist consultations to medication reminders, every touchpoint is designed to feel reassuring and simple." />
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="pharmacy-container">
            <SectionHeading eyebrow="Health Articles" title="Helpful reads for everyday wellbeing." copy="Keep up with advice that helps families use medicines safely and confidently." />
            <div className="article-grid">
              {articles.map((article) => (
                <article className="article-card" key={article.title}>
                  <p className="article-tag">{article.tag}</p>
                  <h3>{article.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="about">
          <div className="pharmacy-container faq-layout">
            <div className="faq-card">
              <SectionHeading eyebrow="Frequently Asked Questions" title="Everything you need to know before ordering." copy="A premium experience should feel clear, helpful and easy to trust." />
              <div className="faq-list">
                {faqs.map((item) => (
                  <div className="faq-item" key={item.question}>
                    <strong>{item.question}</strong>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-card" id="contact">
              <h3>Contact MediCare Pharmacy</h3>
              <p>Phone: +260 955 123 456</p>
              <p>Email: hello@medicarepharmacy.co.zm</p>
              <a href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">WhatsApp: +260 777 909 863</a>
              <p>Address: Great East Road, Lusaka, Zambia</p>
              <div className="contact-map">Google Maps Placeholder</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pharmacy-footer">
        <div className="pharmacy-container pharmacy-footer-grid">
          <div>
            <h3>MediCare Pharmacy Zambia</h3>
            <p>Modern pharmacy care, thoughtful delivery and dependable digital support.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#shop">Shop Medicines</a>
            <a href="#prescription">Prescription Upload</a>
            <a href="#delivery">Delivery</a>
          </div>
          <div>
            <h4>Track Order</h4>
            <p>Track your order status in the demo experience.</p>
          </div>
        </div>
        <div className="pharmacy-container footer-note">
          This pharmacy website is a demonstration created by ApexCole Technology. Products, prices and prescription reviews are fictional and provided for demonstration purposes only.
        </div>
      </footer>

      {showDetails ? (
        <div className="modal-backdrop" onClick={() => setShowDetails(false)}>
          <div className="details-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setShowDetails(false)}>×</button>
            <div className="details-media" style={{ backgroundImage: `url(${selectedProduct.image})` }} />
            <div className="details-content">
              <p className="eyebrow">Product Details</p>
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.description}</p>
              <div className="detail-list">
                <div><span>Usage</span><strong>{selectedProduct.instructions}</strong></div>
                <div><span>Strength</span><strong>{selectedProduct.strength}</strong></div>
                <div><span>Package Size</span><strong>{selectedProduct.packageSize}</strong></div>
                <div><span>Warnings</span><strong>{selectedProduct.warnings}</strong></div>
                <div><span>Storage</span><strong>{selectedProduct.storage}</strong></div>
              </div>
              <div className="details-price-row">
                <strong>{selectedProduct.price}</strong>
                <button className="primary-btn" type="button" onClick={() => { addToCart(selectedProduct); setShowDetails(false); }}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PharmacyPage;
