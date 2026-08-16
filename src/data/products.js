export const products = {
  'PB-001': {
    id: 'PB-001',
    name: 'Pro Carbon Paddle',
    category: 'Paddles',
    categorySlug: 'paddles',
    material: 'Carbon Fiber',
    price: 89.99,
    shortDescription: 'USAPA approved carbon fiber paddle with honeycomb core for ultimate performance.',
    images: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      {
        title: 'Carbon Fiber Face',
        description: 'High-modulus carbon fiber surface delivers exceptional spin and control on every shot.',
        image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Honeycomb Polymer Core',
        description: 'Advanced honeycomb core technology provides the perfect balance of power and touch.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'USAPA Approved',
        description: 'Officially approved for tournament play. Meets all USAPA specifications.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Premium Grip',
        description: 'Ergonomic handle with sweat-absorbent grip tape for all-day comfort.',
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
      },
    ],
    specifications: {
      Material: 'Carbon Fiber + Polymer Honeycomb',
      Size: '16" × 8"',
      Weight: '7.5 oz (213g)',
      Grip: '4 1/4" circumference',
      Surface: 'Textured graphite',
      Colors: ['Black', 'White', 'Red', 'Blue'],
      'Skill Level': 'All Levels',
      'Core Thickness': '14mm',
    },
    packaging: {
      type: 'PE bag + carton box',
      moq: '100 pcs',
      customization: ['Logo printing', 'Color customization', 'Packaging design'],
    },
    usage: [
      {
        title: 'How to Use',
        content: 'Hold the paddle with a firm but relaxed grip. Position your hand at the bottom of the handle for maximum control. Use short, compact swings for dinks and longer swings for power shots.',
      },
      {
        title: 'Cleaning & Care',
        content: 'Wipe the paddle surface with a clean, dry cloth after each use. For stubborn marks, use a slightly damp cloth with mild soap. Avoid prolonged exposure to direct sunlight.',
      },
      {
        title: 'Storage',
        content: 'Store in a paddle bag or protective sleeve when not in use. Keep away from extreme temperatures and high humidity environments.',
      },
      {
        title: 'Safety Tips',
        content: 'Always wear protective eyewear during play. Inspect the paddle for cracks or damage before each use. Replace if structural damage is detected.',
      },
    ],
    relatedIds: ['PB-002', 'GT-002', 'BG-003'],
    downloads: [
      { name: 'Product Catalog PDF', size: '2.4MB' },
      { name: 'Usage Guide', size: '1.1MB' },
    ],
  },
  'GT-002': {
    id: 'GT-002',
    name: 'Premium Grip Tape Roll',
    category: 'Accessories',
    categorySlug: 'accessories',
    material: 'Polymer',
    price: 12.99,
    shortDescription: 'Sweat-absorbent, non-slip grip tape for ultimate handle control.',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Super Absorbent', description: 'Advanced sweat-wicking material keeps your hands dry in intense matches.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' },
      { title: 'Non-Slip Surface', description: 'Textured pattern provides exceptional grip in all weather conditions.', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80' },
      { title: 'Easy Installation', description: 'Self-adhesive backing, wraps in under 2 minutes. No tools required.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' },
    ],
    specifications: {
      Material: 'Polymer blend with adhesive backing',
      Length: '42 inches (107cm)',
      Width: '1.2 inches (3cm)',
      Thickness: '1.5mm',
      Colors: ['Black', 'Red', 'Blue', 'Pink', 'Green'],
    },
    packaging: { type: 'Polybag', moq: '50 pcs', customization: ['Logo printing', 'Color'] },
    usage: [
      { title: 'Application', content: 'Clean the handle thoroughly. Start wrapping from the bottom, overlapping by 1/4 inch. Cut excess and press firmly to seal.' },
      { title: 'Replacement', content: 'Replace grip tape every 1-3 months depending on usage frequency. Replace immediately if it becomes slippery or worn.' },
    ],
    relatedIds: ['PB-001', 'EW-004', 'BG-003'],
    downloads: [{ name: 'Installation Guide', size: '800KB' }],
  },
  'BG-003': {
    id: 'BG-003',
    name: 'Tournament Pickleball Bag',
    category: 'Bags',
    categorySlug: 'bags',
    material: 'Composite',
    price: 79.99,
    shortDescription: '6-paddle capacity tournament bag with thermal insulation and waterproof base.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: '6-Paddle Capacity', description: 'Spacious main compartment holds up to 6 paddles with room for balls and accessories.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80' },
      { title: 'Thermal Insulation', description: 'Protects your paddles from extreme temperatures. Prevents warping in hot weather.', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80' },
      { title: 'Waterproof Base', description: 'Molded waterproof bottom keeps your gear dry on any court surface.', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' },
    ],
    specifications: {
      Material: '600D Oxford Fabric + Waterproof Base',
      Capacity: '6 Paddles + 100 Balls',
      Dimensions: '30" × 12" × 12"',
      Weight: '2.5 lbs',
      'Shoulder Strap': 'Padded, adjustable',
      Colors: ['Black', 'Navy', 'Gray'],
    },
    packaging: { type: 'Polybag + Carton', moq: '20 pcs', customization: ['Logo printing', 'Color', 'Zipper pulls'] },
    usage: [
      { title: 'Care Instructions', content: 'Wipe clean with damp cloth. Air dry at room temperature. Do not machine wash.' },
      { title: 'Storage', content: 'Store in a cool, dry place. Avoid prolonged direct sunlight to prevent fading.' },
    ],
    relatedIds: ['PB-001', 'PB-002', 'GT-002'],
    downloads: [{ name: 'Product Specs PDF', size: '1.5MB' }],
  },
  'EW-004': {
    id: 'EW-004',
    name: 'Protective Pickleball Eyewear',
    category: 'Accessories',
    categorySlug: 'accessories',
    material: 'Composite',
    price: 29.99,
    shortDescription: 'Impact-resistant sports eyewear with UV400 protection and anti-fog coating.',
    images: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Impact Resistant', description: 'Polycarbonate lenses withstand high-speed pickleball impacts without cracking.', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80' },
      { title: 'UV400 Protection', description: 'Full spectrum UV protection shields your eyes during outdoor play.', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80' },
      { title: 'Anti-Fog Coating', description: 'Advanced anti-fog technology ensures clear vision throughout intense matches.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80' },
    ],
    specifications: {
      Material: 'Polycarbonate lenses + TR90 frame',
      'UV Protection': 'UV400',
      'Lens Width': '65mm',
      'Frame Width': '135mm',
      Weight: '28g',
      Colors: ['Black', 'Clear', 'Smoke'],
    },
    packaging: { type: 'Hard case + microfiber cloth', moq: '30 pcs', customization: ['Logo printing', 'Lens color'] },
    usage: [
      { title: 'Care', content: 'Clean with provided microfiber cloth. Avoid wiping with paper towels. Store in protective case.' },
      { title: 'Safety', content: 'Always wear during play. Replace lenses immediately if scratched or damaged.' },
    ],
    relatedIds: ['PB-001', 'GT-002', 'BG-003'],
    downloads: [{ name: 'Safety Certifications', size: '2.1MB' }],
  },
}

export function getProduct(id) {
  return products[id] || null
}

export function getAllProducts() {
  return Object.values(products)
}

export function getRelatedProducts(id) {
  const product = products[id]
  if (!product) return []
  return product.relatedIds
    .map((rid) => products[rid])
    .filter(Boolean)
}

export function getProductsByCategory(categorySlug) {
  return Object.values(products).filter((p) => p.categorySlug === categorySlug)
}

export function getCategories() {
  const map = {}
  Object.values(products).forEach((p) => {
    if (!map[p.categorySlug]) {
      map[p.categorySlug] = { slug: p.categorySlug, name: p.category, count: 0 }
    }
    map[p.categorySlug].count++
  })
  return Object.values(map)
}

export function getCategoryBySlug(slug) {
  const cats = getCategories()
  return cats.find((c) => c.slug === slug) || null
}