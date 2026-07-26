const salonContent = {
  brand: {
    name: 'Maison Lumière Salon',
    tagline: 'Where beauty becomes effortless.',
    description:
      'A premium salon retreat for modern women and men, designed to deliver transformative beauty services in an elegant setting.',
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    title: 'Luxury salon care with a beautiful, calm presence.',
    subtitle:
      'Elegant hair, skin and beauty services crafted for every celebration, every day, and every personal transformation.',
    actions: [
      { label: 'Book an Appointment', href: '#booking', variant: 'primary' },
      { label: 'View Services', href: '#services', variant: 'secondary' },
    ],
  },
  about: {
    title: 'A boutique salon experience for modern beauty.',
    details:
      'Maison Lumière blends premium styling, spa rituals, and expert care to create confidence and calm for every guest. Our team guides each appointment with precision, warmth, and luxurious attention.',
  },
  stylists: [
    {
      name: 'Sofia Hart',
      role: 'Creative Director & Color Specialist',
      highlight: 'Master stylist for refined color and modern cuts.',
    },
    {
      name: 'Ava Reed',
      role: 'Signature Stylist & Bridal Specialist',
      highlight: 'Expert in polished styling, bridal beauty and soft glamour.',
    },
    {
      name: 'Mila Chen',
      role: 'Luxury Skin Therapist',
      highlight: 'Focused on facials, glow rituals and spa wellness.',
    },
  ],
  services: [
    { title: 'Hair Styling', description: 'Tailored styling for events, editorial looks and everyday elegance.' },
    { title: 'Hair Cutting', description: 'Precision cuts that enhance texture, shape and movement.' },
    { title: 'Hair Coloring', description: 'Luxury color services from balayage to rich tonal treatments.' },
    { title: 'Makeup', description: 'Refined makeup for day looks, evening events, and weddings.' },
    { title: 'Nails & Beauty', description: 'Manicures, pedicures and polished finishing touches.' },
    { title: 'Facials & Spa', description: 'Glow-boosting skin care, calming masks, and radiant results.', },
  ],
  pricing: [
    { tier: 'Signature Cut', price: '$120', description: 'Custom haircut with precision styling and finishing.' },
    { tier: 'Luxury Color', price: '$180', description: 'One-step color service with luxury gloss treatment.' },
    { tier: 'Glow Facial', price: '$95', description: 'Rebalancing facial with hydration and radiant glow.', },
    { tier: 'Bridal Package', price: '$320', description: 'Hair, makeup and styling for special events.', },
  ],
  gallery: [
    { label: 'Blonde transformation', style: 'image-large' },
    { label: 'Evening styling', style: 'image-medium' },
    { label: 'Skin ritual', style: 'image-small' },
    { label: 'Soft blowout', style: 'image-medium' },
    { label: 'Bridal glow', style: 'image-large' },
  ],
  packages: [
    { title: 'Renewal Ritual', description: 'Facial, manicure and styling refresh for luminous confidence.', detail: '90 minutes of attentive care.' },
    { title: 'Event Beauty', description: 'Hair, makeup and finish for a polished, camera-ready presence.', detail: '120 minutes of full service.' },
    { title: 'Signature Sculpt', description: 'Custom cut and bespoke color finish with styling guidance.', detail: '105 minutes of expert care.' },
  ],
  testimonials: [
    { quote: 'Maison Lumière made me feel completely seen. My hair has never looked more luminous.', customer: 'Eleanor M.' },
    { quote: 'Elegant service, thoughtful attention and a truly beautiful salon experience.', customer: 'Nina R.' },
    { quote: 'The team understood exactly what I wanted. It feels luxurious and calming.', customer: 'Lydia S.' },
  ],
  booking: {
    title: 'Reserve your appointment',
    description: 'Book a personalized salon visit and let our team prepare a boutique beauty experience.',
  },
  hours: [
    { day: 'Mon - Fri', details: '10:00 AM – 8:00 PM' },
    { day: 'Saturday', details: '10:00 AM – 6:00 PM' },
    { day: 'Sunday', details: 'Closed for restoration.' },
  ],
  contact: {
    address: '81 Bellecourt Avenue, Downtown City',
    phone: '(555) 381-0924',
    email: 'hello@maisonlumiere.com',
  },
  footerNote:
    'This website is a demonstration created by ApexCole Technology. Every client website is uniquely designed around their business, brand and vision.',
};

export default salonContent;
