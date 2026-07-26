const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const restaurantContent = {
  brand: {
    name: 'Zed Bites',
    monogram: 'ZB',
    tagline: 'Local food, hot and ready to deliver.',
    description: 'A proudly Zambian kitchen serving hearty staples, sizzling steaks and fresh sides for every table.',
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Order', href: '#order' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: 'Real Zambian flavour, delivered hot.',
    subheadline: 'Enjoy nshima, grilled steaks, kapenta, chips and house sauces from our kitchen to your doorstep.',
    actions: [
      { label: 'Order now', href: '#order', variant: 'primary' },
      { label: 'View menu', href: '#menu', variant: 'secondary' },
    ],
    imageLabel: 'Freshly plated Zambian favourites',
    image: image('photo-1414235077428-338989a2e8c0', 1400),
  },
  welcome: {
    title: 'Freshly prepared, proudly Zambian.',
    description: 'We serve generous portions of local favourites with warm hospitality and quick delivery across town.',
  },
  about: {
    title: 'Comfort food with real local character.',
    features: [
      'Hearty nshima, grilled meat and golden chips made fresh every day.',
      'Fast delivery with friendly service and clear pricing for every order.',
      'Perfect for lunch, dinner, family meals and last-minute cravings.',
    ],
  },
  dishes: [
    { name: 'Steak & Chips', description: 'Chargrilled beef steak with crisp chips and pepper sauce.', price: 'K95', image: image('photo-1558030006-450675393462', 900), tags: ['Popular'] },
    { name: 'Nshima with Chicken', description: 'Soft nshima with spicy chicken stew and fresh relish.', price: 'K70', image: image('photo-1547592180-85f173990554', 900), tags: ['Local favourite'] },
    { name: 'Kapenta Plate', description: 'Smoky kapenta, nshima and a fresh tomato salsa.', price: 'K65', image: image('photo-1517248135467-4c7edcad34c4', 900), tags: ['Fresh'] },
  ],
  menu: [
    {
      category: 'Nshima Plates',
      items: [
        { id: 'nshima-chicken', name: 'Nshima with Chicken Stew', description: 'Soft nshima served with rich chicken stew, greens and a little chilli.', price: 70, tag: 'Popular', image: image('photo-1547592180-85f173990554', 900) },
        { id: 'nshima-beef', name: 'Nshima with Beef Ribs', description: 'Tender beef ribs, relish and a generous scoop of nshima.', price: 95, tag: 'Best seller', image: image('photo-1558030006-450675393462', 900) },
        { id: 'nshima-fish', name: 'Nshima with Kapenta', description: 'Smoky kapenta, tomato relish and a fresh side of greens.', price: 65, tag: 'Fresh', image: image('photo-1517248135467-4c7edcad34c4', 900) },
      ],
    },
    {
      category: 'Steaks & Grill',
      items: [
        { id: 'steak-chips', name: 'Steak & Chips', description: 'Juicy grilled steak with chips and house pepper sauce.', price: 95, tag: 'Popular', image: image('photo-1558030006-450675393462', 900) },
        { id: 'chicken-grill', name: 'Grilled Chicken', description: 'Spiced chicken thighs served with salad and fries.', price: 75, tag: 'Spicy', image: image('photo-1546833999-b9f581a1996d', 900) },
        { id: 'sausage-plate', name: 'Boiled Beef Sausages', description: 'Savory sausages with relish, chips and a side of coleslaw.', price: 68, tag: 'Comfort', image: image('photo-1529042410759-befb1204b468', 900) },
        { id: 'goat-ribs', name: 'Goat Ribs', description: 'Slow-cooked goat ribs with a smoky relish and extra chips.', price: 110, tag: 'Special', image: image('photo-1547592180-85f173990554', 900) },
      ],
    },
    {
      category: 'Sides & Snacks',
      items: [
        { id: 'chips', name: 'Crispy Chips', description: 'Golden chips with a sprinkle of salt and house sauce.', price: 25, tag: 'Quick bite', image: image('photo-1576107232684-1279f390859f', 900) },
        { id: 'chikanda', name: 'Chikanda Plate', description: 'Traditional chikanda bites with onion relish and fresh herbs.', price: 35, tag: 'Local', image: image('photo-1547592180-85f173990554', 900) },
        { id: 'egg-rolls', name: 'Egg Rolls', description: 'Crispy rolls filled with vegetables and a little spice.', price: 20, tag: 'Snack', image: image('photo-1512058564366-18510be2db19', 900) },
        { id: 'mukimo', name: 'Mukimo Bowl', description: 'Mashed vegetables and greens served in a hearty local bowl.', price: 40, tag: 'Vegetarian', image: image('photo-1504674900247-0877df9cc836', 900) },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { id: 'mosi', name: 'Mosi Lager', description: 'Cool bottle of local lager to pair with your meal.', price: 30, tag: 'Cold', image: image('photo-1513558161293-cdaf765ed2fd', 900) },
        { id: 'juice', name: 'Fresh Fruit Juice', description: 'Pineapple, mango or passion fruit served chilled.', price: 18, tag: 'Fresh', image: image('photo-1497534446932-c925b458314e', 900) },
        { id: 'tea', name: 'Sweet Chai', description: 'Warm spiced tea for a satisfying finish.', price: 15, tag: 'Comfort', image: image('photo-1495474472287-4d71bcdd2085', 900) },
        { id: 'soda', name: 'Sparkling Lemon Soda', description: 'Refreshing drink for a quick lunch break.', price: 12, tag: 'Cold', image: image('photo-1513104890138-7c749659a591', 900) },
      ],
    },
  ],
  specials: [
    { title: 'Family Feast', description: 'A hearty pack with nshima, chicken, chips and drinks for sharing.', price: 'From K180', image: image('photo-1547592180-85f173990554', 900) },
    { title: 'Lunch Combo', description: 'Choose a steak or chicken plate with chips and a drink.', price: 'From K110', image: image('photo-1558030006-450675393462', 900) },
    { title: 'Weekend Deal', description: 'Free delivery on orders above K200 on Friday and Saturday.', price: 'K200+', image: image('photo-1512058564366-18510be2db19', 900) },
    { title: 'Office Pack', description: 'A stack of quick bites for team lunches and small meetings.', price: 'From K140', image: image('photo-1517248135467-4c7edcad34c4', 900) },
  ],
  testimonials: [
    { quote: 'Their nshima and chicken stew tastes just like home. Delivery was fast too.', customer: 'Mabel S.', role: 'Lusaka regular' },
    { quote: 'The steak and chips were cooked perfectly and arrived hot.', customer: 'Daniel K.', role: 'Office lunch fan' },
    { quote: 'Reliable service and genuinely friendly people. We order every Friday.', customer: 'Amina T.', role: 'Family order' },
  ],
  reservation: {
    title: 'Order online for delivery.',
    description: 'Add your favourite dishes to the cart, then share your address and we will bring them to you.',
  },
  hours: [
    { day: 'Monday - Thursday', details: '11:00 AM – 10:00 PM' },
    { day: 'Friday', details: '11:00 AM – 11:00 PM' },
    { day: 'Saturday', details: '10:00 AM – 11:00 PM' },
    { day: 'Sunday', details: '10:00 AM – 8:00 PM' },
  ],
  contact: {
    location: 'Plot 26, Great East Road, Lusaka',
    phone: '+260 977 001 111',
    email: 'orders@zedbites.com',
  },
  social: [
    { label: 'Instagram', url: '#' },
    { label: 'Facebook', url: '#' },
    { label: 'WhatsApp', url: 'https://wa.me/260777909863?text=Hello%20ApexCole%20Technology%2C%20I%20would%20like%20a%20quotation%20for%20a%20website.' },
  ],
  footerNote: 'Zed Bites is a demo concept made for a proudly Zambian food experience with online ordering and delivery.',
};

export default restaurantContent;
