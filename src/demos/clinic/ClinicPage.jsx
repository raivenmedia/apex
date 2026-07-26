import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './clinic.css';

const heroSlides = [
  {
    eyebrow: 'General Healthcare',
    title: 'Compassionate Healthcare You Can Trust',
    copy: 'A calm, premium care experience for adults, families and long-term wellness planning.',
    button: 'Book Appointment',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=84',
  },
  {
    eyebrow: 'Child Healthcare',
    title: 'Caring For Every Child’s Future',
    copy: 'Gentle, expert-led paediatric support designed around comfort, growth and reassurance.',
    button: 'Meet Our Specialists',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=84',
  },
  {
    eyebrow: 'Women’s Health',
    title: 'Complete Women’s Healthcare',
    copy: 'Personalised support for wellness, screenings, maternity care and ongoing confidence.',
    button: 'Explore Services',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=84',
  },
  {
    eyebrow: 'Laboratory Services',
    title: 'Accurate Testing. Reliable Results.',
    copy: 'Fast diagnostics and precise reporting that support better, more informed care decisions.',
    button: 'View Laboratory',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=84',
  },
  {
    eyebrow: 'Emergency Care',
    title: 'Ready When Every Second Matters',
    copy: 'Trusted emergency guidance, rapid triage and immediate specialist direction around the clock.',
    button: 'Emergency Contacts',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=84',
  },
];

const quickAccess = [
  { icon: '🗓️', title: 'Book Appointment', description: 'Reserve a visit in minutes' },
  { icon: '🩺', title: 'Find a Doctor', description: 'Meet our trusted specialists' },
  { icon: '🏥', title: 'Medical Departments', description: 'Care pathways by speciality' },
  { icon: '💚', title: 'Health Packages', description: 'Preventive plans for every need' },
  { icon: '🧪', title: 'Laboratory', description: 'Advanced diagnostics and reports' },
  { icon: '💊', title: 'Pharmacy', description: 'Medication support and guidance' },
  { icon: '🚑', title: 'Emergency Contact', description: 'Immediate care support' },
];

const services = [
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=84',
    title: 'General Consultation',
    description: 'Personalised evaluation and ongoing care for everyday health concerns.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=84',
    title: 'Paediatrics',
    description: 'Supportive, family-centred care for infants, children and growing adolescents.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=84',
    title: 'Women’s Health',
    description: 'A calm, respectful approach to reproductive, preventive and wellness care.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=84',
    title: 'Men’s Health',
    description: 'Routine screening and practical care tailored to men’s unique health needs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=84',
    title: 'Dental Care',
    description: 'Preventive and restorative dental support for the whole family.',
  },
  {
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=84',
    title: 'Eye Clinic',
    description: 'Clinical insight and vision care in a bright, reassuring environment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=84',
    title: 'Laboratory',
    description: 'Accurate testing, trusted turnaround times and clear follow-up guidance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=84',
    title: 'Pharmacy',
    description: 'Practical medication guidance and convenient support for everyday needs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=84',
    title: 'Vaccination',
    description: 'Protected and guided preventive care for children and adults.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=84',
    title: 'Ultrasound',
    description: 'High-quality imaging to support accurate diagnosis and timely decisions.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=84',
    title: 'Physiotherapy',
    description: 'Recovery planning and guided movement support with a patient-centred approach.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=84',
    title: 'Minor Surgery',
    description: 'Safe and comfortable procedures delivered with professionalism and care.',
  },
  {
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=84',
    title: 'Health Screening',
    description: 'Proactive assessments that help patients stay ahead of long-term risks.',
  },
];

const departments = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=84',
    title: 'General Practice',
    lead: 'Dr. J. Banda',
    hours: 'Open 07:00 – 20:00',
    overview: 'Primary care, wellness guidance and personalised support for everyday health needs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=84',
    title: 'Paediatric Clinic',
    lead: 'Dr. A. Chileshe',
    hours: 'Daily · 08:00 – 17:00',
    overview: 'Child-focused consultations, development reviews and family reassurance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=84',
    title: 'Women’s Wellness',
    lead: 'Dr. K. Phiri',
    hours: 'Mon – Fri · 09:00 – 18:00',
    overview: 'Preventive and restorative services in a supportive, calm and respectful setting.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=84',
    title: 'Diagnostics',
    lead: 'Lab Lead · Ms. S. Mwale',
    hours: '24/7 support with rapid reporting',
    overview: 'Laboratory processing, imaging coordination and guidance around clinical findings.',
  },
];

const doctors = [
  {
    name: 'Dr. Naledi Mbewe',
    specialty: 'Family Medicine',
    qualifications: 'MBChB, MSc Clinical Practice',
    experience: '14 years',
    availability: 'Mon – Fri · 08:00 – 16:00',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Dr. Amina Chileshe',
    specialty: 'Paediatrics',
    qualifications: 'MBChB, Paediatrics Fellowship',
    experience: '11 years',
    availability: 'Mon – Sat · 09:00 – 17:00',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Dr. Kangwa Phiri',
    specialty: 'Women’s Health',
    qualifications: 'MBChB, Obstetrics & Gynaecology',
    experience: '16 years',
    availability: 'Tue – Fri · 10:00 – 18:00',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=84',
  },
];

const packages = [
  { name: 'General Health Check', price: 'K850', note: 'Includes vitals, consultation review and screening guidance.' },
  { name: 'Executive Checkup', price: 'K2,500', note: 'Extended overall health review with specialist recommendations.' },
  { name: 'Family Wellness', price: 'K1,800', note: 'Shared care plan for multiple family members in one visit.' },
  { name: 'Women’s Wellness', price: 'K1,350', note: 'Focused screening, counselling and preventive care.' },
  { name: 'Child Wellness', price: 'K650', note: 'Development, growth and preventive care review for children.' },
];

const articles = [
  { category: 'Healthy Living', title: 'Five habits that make everyday wellness easier', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=84' },
  { category: 'Child Vaccination', title: 'A practical guide to staying on schedule', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=84' },
  { category: 'Blood Pressure', title: 'Managing blood pressure with calm consistency', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=84' },
  { category: 'Women’s Health', title: 'Small wellness steps that make a big difference', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=84' },
];

const testimonials = [
  {
    quote: 'The team made me feel comfortable from the first moment. Every step felt calm, clear and professional.',
    author: 'Lusungu M.',
    role: 'General Consultation',
  },
  {
    quote: 'Booking and follow-up were smooth, and the consultation gave me the reassurance I needed.',
    author: 'Micheal H.',
    role: 'Executive Checkup',
  },
  {
    quote: 'This clinic feels premium, welcoming and deeply trustworthy. It is exactly the kind of care experience patients want.',
    author: 'Grace C.',
    role: 'Women’s Wellness',
  },
];

const gallery = [
  { title: 'Reception', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=84' },
  { title: 'Waiting Area', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=84' },
  { title: 'Laboratory', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=84' },
  { title: 'Doctors', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=84' },
  { title: 'Treatment Rooms', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=84' },
  { title: 'Pharmacy', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=84' },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-kicker"><span /> {eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}

function ClinicNav({ open, setOpen }) {
  return (
    <header className="clinic-topbar">
      <div className="clinic-topbar-inner">
        <Link className="clinic-brand" to="/demos/clinic" onClick={() => setOpen(false)}>
          <span className="clinic-brand-icon">✚</span>
          <span>
            <strong>APEXCOLE HEALTH</strong>
            <small>Premium Private Care</small>
          </span>
        </Link>
        <button className="clinic-menu" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button>
        <nav className={`clinic-nav ${open ? 'open' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setOpen(false)}>Medical Services</a>
          <a href="#departments" onClick={() => setOpen(false)}>Departments</a>
          <a href="#doctors" onClick={() => setOpen(false)}>Our Doctors</a>
          <a href="#packages" onClick={() => setOpen(false)}>Health Packages</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#appointment" onClick={() => setOpen(false)}>Appointments</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" onClick={() => setOpen(false)} className="clinic-pill">Emergency</a>
        </nav>
      </div>
    </header>
  );
}

function ClinicPage() {
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({ specialists: 0, services: 0, patients: 0 });

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(sliderTimer);
  }, []);

  useEffect(() => {
    const testimonialTimer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(testimonialTimer);
  }, []);

  useEffect(() => {
    const targets = { specialists: 20, services: 40, patients: 15000 };
    const duration = 1400;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setStats({
        specialists: Math.round(targets.specialists * progress),
        services: Math.round(targets.services * progress),
        patients: Math.round(targets.patients * progress),
      });

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    }

    window.requestAnimationFrame(tick);
  }, []);

  function handleTouchStart(event) {
    setTouchStart(event.touches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStart === null) return;

    const delta = event.changedTouches[0].clientX - touchStart;
    if (delta > 50) {
      setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
    }
    if (delta < -50) {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }
    setTouchStart(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="clinic-shell">
      <ClinicNav open={open} setOpen={setOpen} />

      <main>
        <section id="home" className="clinic-hero" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="clinic-hero-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {heroSlides.map((slide) => (
              <div
                key={slide.title}
                className="clinic-hero-panel"
                style={{ backgroundImage: `linear-gradient(90deg, rgba(4,21,40,.86) 0%, rgba(7,37,64,.68) 45%, rgba(7,37,64,.28) 100%), url(${slide.image})` }}
              >
                <div className="clinic-container clinic-hero-inner">
                  <div className="clinic-hero-copy">
                    <div className="clinic-hero-eyebrow">{slide.eyebrow}</div>
                    <h1>{slide.title}</h1>
                    <p>{slide.copy}</p>
                    <div className="clinic-action-row">
                      <a className="clinic-button primary" href="#appointment">{slide.button}</a>
                      <a className="clinic-button secondary" href="#services">Explore Services</a>
                    </div>
                  </div>

                  <div className="clinic-hero-card">
                    <h3>Why Families Choose Us</h3>
                    <div className="clinic-quick-grid">
                      <div className="clinic-quick-item"><strong>24/7</strong><span>Emergency support</span></div>
                      <div className="clinic-quick-item"><strong>Fast</strong><span>Diagnostics & reporting</span></div>
                      <div className="clinic-quick-item"><strong>Trusted</strong><span>Experienced specialists</span></div>
                      <div className="clinic-quick-item"><strong>Calm</strong><span>Patient-first experience</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="clinic-hero-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? 'active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="clinic-container">
          <div className="clinic-notice">
            <span>i</span>
            <p>This website is a demonstration created by ApexCole Technology. Medical information, prices and services are for demonstration purposes only.</p>
          </div>
        </div>

        <section className="section-block clinic-quick-access-section">
          <div className="clinic-container">
            <div className="clinic-quick-access-grid">
              {quickAccess.map((item) => (
                <article className="quick-access-card" key={item.title}>
                  <div className="quick-access-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="About Us"
              title="A modern private hospital experience built on trust."
              copy="We blend premium hospitality, contemporary design and expert-led medical care to create a reassuring first impression for every patient."
            />
            <div className="about-grid">
              <div className="about-panel">
                <p>
                  From the moment patients arrive, the experience is shaped around calm guidance, clear communication and modern care standards.
                  Our clinicians and clinical teams are focused on making every visit feel thoughtful, precise and reassuring.
                </p>
                <div className="about-points">
                  <div>
                    <span>✓</span>
                    <div>
                      <strong>Patient-first experience</strong>
                      <p>Warm communication, clear next steps and thoughtful support.</p>
                    </div>
                  </div>
                  <div>
                    <span>✓</span>
                    <div>
                      <strong>Integrated clinical excellence</strong>
                      <p>Diagnostics, specialists and preventive services aligned in one place.</p>
                    </div>
                  </div>
                  <div>
                    <span>✓</span>
                    <div>
                      <strong>Premium comfort</strong>
                      <p>Bright interiors, efficient flow and a calm environment throughout.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-visual" />
            </div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Medical Services"
              title="Specialised care for everyday wellness and complex needs."
              copy="Our service portfolio is designed to feel comprehensive, modern and deeply reassuring for patients and families alike."
            />
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-media" style={{ backgroundImage: `url(${service.image})` }} />
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#appointment">Learn More →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="departments" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Departments"
              title="Modern departments designed around patient flow."
              copy="Each department offers focused expertise, streamlined access and a polished clinical experience."
            />
            <div className="departments-grid">
              {departments.map((department) => (
                <article className="department-card" key={department.title}>
                  <div className="department-media" style={{ backgroundImage: `url(${department.image})` }} />
                  <div className="department-content">
                    <h3>{department.title}</h3>
                    <p className="department-lead">Lead specialist · {department.lead}</p>
                    <p className="department-hours">{department.hours}</p>
                    <p>{department.overview}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="doctors" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Our Doctors"
              title="Elegant clinical expertise with a warm, human touch."
              copy="Every doctor is selected for both medical skill and the ability to create trust through calm, clear care."
            />
            <div className="doctor-grid">
              {doctors.map((doctor) => (
                <article className="doctor-card" key={doctor.name}>
                  <div className="doctor-photo" style={{ backgroundImage: `url(${doctor.photo})` }} />
                  <div className="doctor-content">
                    <span>{doctor.specialty}</span>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.qualifications}</p>
                    <p>{doctor.experience} experience</p>
                    <p>{doctor.availability}</p>
                    <a className="clinic-button primary" href="#appointment">Book Appointment</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Premium care that feels calm, clear and consistently reliable."
              copy="Designed to make every visit feel organised, professional and deeply reassuring."
            />
            <div className="stats-grid">
              <div className="stat-card">
                <strong>{stats.specialists}+</strong>
                <span>Medical Specialists</span>
              </div>
              <div className="stat-card">
                <strong>{stats.services}+</strong>
                <span>Healthcare Services</span>
              </div>
              <div className="stat-card">
                <strong>{stats.patients.toLocaleString()}+</strong>
                <span>Patients Served</span>
              </div>
              <div className="stat-card">
                <strong>24/7</strong>
                <span>Emergency Support</span>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Health Packages"
              title="Preventive care packages shaped for modern households."
              copy="These demonstration health plans reflect premium service presentation and are intended for showcasing the clinic experience."
            />
            <div className="packages-grid">
              {packages.map((pkg) => (
                <article className="package-card" key={pkg.name}>
                  <span className="tag">Care plan</span>
                  <h3>{pkg.name}</h3>
                  <span className="price">{pkg.price}</span>
                  <p>{pkg.note}</p>
                  <div className="package-note">Demonstration Prices</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Patient Testimonials"
              title="Trust is built through how care feels and how it is delivered."
              copy="Every interaction is shaped to feel reassuring, respectful and consistently polished."
            />
            <div className="testimonial-shell">
              <div className="testimonial-card active">
                <div className="testimonial-rating">★★★★★</div>
                <blockquote>“{testimonials[activeTestimonial].quote}”</blockquote>
                <footer>
                  <strong>{testimonials[activeTestimonial].author}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </footer>
              </div>
              <div className="testimonial-nav">
                <button type="button" onClick={() => setActiveTestimonial((current) => (current === 0 ? testimonials.length - 1 : current - 1))}>
                  ←
                </button>
                <button type="button" onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}>
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Health Articles"
              title="Helpful reads for stronger everyday wellness."
              copy="A modern clinic website should educate as well as inspire confidence."
            />
            <div className="articles-grid">
              {articles.map((article) => (
                <article className="article-card" key={article.title}>
                  <div className="article-media" style={{ backgroundImage: `url(${article.image})` }} />
                  <div className="article-content">
                    <span>{article.category}</span>
                    <h3>{article.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Gallery"
              title="A bright, premium environment designed for comfort."
              copy="The atmosphere balances clinical confidence with a refined and welcoming patient experience."
            />
            <div className="gallery-grid">
              {gallery.map((item) => (
                <article className="gallery-card" key={item.title}>
                  <div className="gallery-media" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="gallery-caption">{item.title}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Appointments"
              title="Request an appointment with confidence."
              copy="This demo form is beautifully presented and ready to be adapted for real booking workflows."
            />
            <div className="appointment-layout">
              <aside className="appointment-side">
                <h3>Opening Hours</h3>
                <div className="hours-list">
                  <div><span>Monday – Friday</span><strong>08:00 – 18:00</strong></div>
                  <div><span>Saturday</span><strong>09:00 – 15:00</strong></div>
                  <div><span>Sunday</span><strong>Emergency only</strong></div>
                </div>
                <h3>Emergency Contacts</h3>
                <p>+260 955 123 456</p>
                <p>+260 977 123 456</p>
                <a href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">WhatsApp · +260 777 909 863</a>
              </aside>

              <div className="appointment-form-card">
                <h3>Appointment Request</h3>
                <p>Share your details and our team will confirm the best available slot.</p>
                <form className="appointment-form" onSubmit={handleSubmit}>
                  <label>
                    Patient Name
                    <input type="text" placeholder="Enter patient name" required />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" placeholder="Enter phone number" required />
                  </label>
                  <label>
                    Email
                    <input type="email" placeholder="Enter email address" required />
                  </label>
                  <label>
                    Preferred Date
                    <input type="date" required />
                  </label>
                  <label>
                    Department
                    <select required>
                      <option value="">Select department</option>
                      <option>General Consultation</option>
                      <option>Paediatrics</option>
                      <option>Women’s Health</option>
                      <option>Laboratory</option>
                      <option>Emergency</option>
                    </select>
                  </label>
                  <label>
                    Reason for Visit
                    <textarea placeholder="Briefly describe your visit" required />
                  </label>
                  <button className="clinic-button primary" type="submit">Submit Request</button>
                  {submitted && <div className="booking-success">Thank you. This demonstration booking request is ready.</div>}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block">
          <div className="clinic-container">
            <SectionHeading
              eyebrow="Contact"
              title="Visit us in a place that feels welcoming from the moment you arrive."
              copy="Modern care should be easy to reach, easy to understand and easy to trust."
            />
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Connect With Us</h3>
                <p>Phone: +260 955 123 456</p>
                <p>Email: hello@apexcolehealth.co.zm</p>
                <a href={getWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noreferrer">WhatsApp: +260 777 909 863</a>
                <p>Address: Great East Road, Lusaka, Zambia</p>
              </div>
              <div className="contact-card">
                <h3>Working Hours</h3>
                <p>Mon – Fri · 08:00 – 20:00</p>
                <p>Sat · 09:00 – 15:00</p>
                <p>Emergency · 24/7</p>
                <div className="map-placeholder">Google Maps Placeholder</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="clinic-footer">
        <div className="clinic-container clinic-footer-grid">
          <div>
            <h3>ApexCole Health</h3>
            <p>Premium private care, thoughtfully designed for confidence and trust.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#departments">Departments</a>
            <a href="#appointment">Appointments</a>
          </div>
          <div>
            <h4>Emergency Contacts</h4>
            <p>+260 955 123 456</p>
            <p>+260 977 123 456</p>
          </div>
          <div>
            <h4>Newsletter</h4>
            <div className="newsletter-row">
              <input type="email" placeholder="Email address" />
              <button type="button">Join</button>
            </div>
          </div>
        </div>
        <div className="clinic-container clinic-footer-note">
          This website is a demonstration created by ApexCole Technology. Medical information, prices and services are for demonstration purposes only.
        </div>
      </footer>
    </div>
  );
}

export default ClinicPage;
