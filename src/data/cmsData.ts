/**
 * Static CMS Data for Zash Makeup Artistry
 * Easy to update, fully typed, and structured.
 * You can modify any text, price, or image path in this file to update the website instantly.
 */

export interface StatItem {
  value: string;
  label: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  handle: string;
  location: string;
  bio: string[];
  certifications: string[];
  experience: string;
  totalClients: string;
  rating: string;
  socials: {
    instagram: string;
    whatsapp: string;
    email: string;
    phone: string;
  };
  stats: StatItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "bridal" | "nude" | "engagement" | "hd-soft-glam";
  image: string;
  description: string;
  tags: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  popular: boolean;
  inclusions: string[];
  category: "bridal" | "engagement" | "party" | "editorial" | "masterclass";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const brandInfo: BrandInfo = {
  name: "Zash Makeup Artistry",
  tagline: "Soft Glam & High Definition Luxury Bridal Makeup",
  handle: "@zash_mackup_mua_from_alighar",
  location: "Aligarh, Uttar Pradesh, India",
  bio: [
    "Certified professional makeup artist from VLCC with a passion for creating pristine, radiant bridal transformations.",
    "Specializing in luxury soft glam and high-definition looks designed to capture your natural radiance and stay flawless all day and night.",
    "Over 5 years of professional experience with over 300 successful bridal transformations, crafting custom-tailored aesthetics for every unique skin tone and style."
  ],
  certifications: [
    "Certified from VLCC Institute of Beauty & Nutrition",
    "Advanced Bridal Masterclass Certified",
    "HD Airbrush & Contemporary Styling Specialist"
  ],
  experience: "5+ Years",
  totalClients: "300+ Brides",
  rating: "4.9/5.0",
  socials: {
    instagram: "https://instagram.com/zash_mackup_mua_from_alighar",
    whatsapp: "https://wa.me/910000000000?text=Hi%20Zash%20Makeup%2C%20I%20would%20like%20to%20inquire%20about%20a%20bridal%20booking%21",
    email: "zashmakeup@gmail.com",
    phone: "+91 98765 43210"
  },
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "300+", label: "Happy Brides" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "VLCC", label: "Certified" }
  ]
};

export const heroSection = {
  title: "Empowering Your Elegance",
  subtitle: "Luxury Soft Glam & High-Definition Bridal Makeup tailored perfectly for your most memorable moments.",
  primaryButtonText: "Book Your Consultation",
  secondaryButtonText: "Explore Portfolio",
  heroImage: "/src/assets/images/bridal_hero_1782466168510.jpg"
};

export const highlights = [
  {
    id: "bridal",
    title: "Bridal Look",
    description: "Royal, long-lasting South Asian bridal makeup with premium styling, customized accessories draping, and flawless HD/Airbrush finish.",
    image: "/src/assets/images/bridal_hero_1782466168510.jpg"
  },
  {
    id: "nude",
    title: "Nude Makeup",
    description: "Soft, earthy dewy look designed to celebrate your authentic features with flawless skin texture and effortless, glowing elegance.",
    image: "/src/assets/images/look_nude_makeup_1782466205071.jpg"
  },
  {
    id: "engagement",
    title: "Engagement Look",
    description: "Elegant pastel shimmers, dewy highlighting, and modern minimalist hairstyles tailored to complement elegant pre-wedding ensembles.",
    image: "/src/assets/images/look_engagement_1782466223892.jpg"
  },
  {
    id: "hd-soft-glam",
    title: "HD Soft Glam",
    description: "Perfect professional contouring, defined smoky eyes, and velvet lip pairings engineered to look spectacular on camera and in person.",
    image: "/src/assets/images/look_hd_glam_1782466239043.jpg"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Royal Crimson Bridal Glam",
    category: "bridal",
    image: "/src/assets/images/bridal_hero_1782466168510.jpg",
    description: "Traditional crimson bridal look with royal gold jewelry. Finished with a long-wear velvet base, warm gold shimmer eyelids, and classic bold lips.",
    tags: ["Bridal Glam", "HD Makeup", "Traditional Look", "Lash Volume"]
  },
  {
    id: "p2",
    title: "Minimalist Peach Nude Radiance",
    category: "nude",
    image: "/src/assets/images/look_nude_makeup_1782466205071.jpg",
    description: "An effortless daytime look designed with dewy skin, a subtle peach cheek flush, neutral satin eyes, and hydrated gloss nude lips.",
    tags: ["No-Makeup Look", "Dewy Skin", "Satin Lips", "Soft Contour"]
  },
  {
    id: "p3",
    title: "Champagne Shimmer Engagement",
    category: "engagement",
    image: "/src/assets/images/look_engagement_1782466223892.jpg",
    description: "Beautiful pastel pink themes with champagne shimmer shadows and high-definition cheek glow, designed to complement elegant engagement couture.",
    tags: ["Engagement Glam", "Shimmer Eyes", "Glowing Highlights", "Pastel Theme"]
  },
  {
    id: "p4",
    title: "Sultry Bronze HD Soft Glam",
    category: "hd-soft-glam",
    image: "/src/assets/images/look_hd_glam_1782466239043.jpg",
    description: "Sophisticated smoky bronze eyeshadow paired with high-definition airbrushed base contouring, ideal for luxury events, receptions, and photoshoots.",
    tags: ["Soft Glam", "Smoky Eye", "Airbrush Finish", "Nude Matte"]
  },
  {
    id: "p5",
    title: "Golden Hour Reception Elegance",
    category: "bridal",
    image: "/src/assets/images/bridal_hero_1782466168510.jpg", // reuse for consistency, or standard Fallback
    description: "Warm sunset tones featuring sparkling copper metallic lids, fluffy mink lashes, and deep berry-rose lips with hair draped in standard soft curls.",
    tags: ["Reception Look", "Golden Shimmer", "Berry Lips", "Luxury Draping"]
  },
  {
    id: "p6",
    title: "Dewy Matte Mocha",
    category: "nude",
    image: "/src/assets/images/look_nude_makeup_1782466205071.jpg",
    description: "Soft mocha tones with subtle tightlining and an ultra-light breathable matte base that retains skin's natural dewy texture.",
    tags: ["Mocha Nude", "Subtle Highlight", "Sophisticated Finish"]
  }
];

export const services: ServicePackage[] = [
  {
    id: "s1",
    title: "Elite Royal Bridal Package",
    price: "₹18,000",
    priceSuffix: "per event",
    description: "The complete luxury bridal experience. Personalized makeup customized for your face shape, wedding outfit, and skin profile.",
    popular: true,
    inclusions: [
      "Signature High-Definition (HD) long-wear bridal makeup",
      "Premium premium eyelashes & eye styling",
      "Outfit draping (Saree, Dupatta, or Lehenga setting)",
      "Luxury hair styling (traditional buns, floral details, or soft waves)",
      "Pre-wedding consultation & skin prep guidance",
      "On-site mini-touch-up kit"
    ],
    category: "bridal"
  },
  {
    id: "s2",
    title: "Signature Engagement / Sagan Look",
    price: "₹10,500",
    priceSuffix: "per event",
    description: "Specially formulated for pre-wedding functions, providing an elegant transition look with pastel shimmers and gorgeous custom hairstyles.",
    popular: false,
    inclusions: [
      "HD Glow Makeup with airbrush-mimic finish",
      "Standard lash placement & brow architecture",
      "Hair styling tailored to your attire",
      "Lehenga / Saree draping setup",
      "15-minute virtual styling consultation"
    ],
    category: "engagement"
  },
  {
    id: "s3",
    title: "Luxury Party / Guest Soft Glam",
    price: "₹6,000",
    priceSuffix: "per event",
    description: "Perfect for bridesmaids, close family, or high-end evening events where you want a stunning, sophisticated, camera-ready presence.",
    popular: false,
    inclusions: [
      "Custom Soft Glam or Nude Glow makeup",
      "Eyelash application (Standard)",
      "Standard party hair styling (curls/straightening)",
      "Draping services (optional, add-on)"
    ],
    category: "party"
  },
  {
    id: "s4",
    title: "Personal Grooming Masterclass",
    price: "₹4,500",
    priceSuffix: "session",
    description: "Learn the secrets of flawless self-makeup! A 1-on-1 private lesson with Zash covering skin prep, contouring, and creating your daily soft glam.",
    popular: false,
    inclusions: [
      "3-Hour hands-on practical masterclass",
      "Custom product & shade matching review",
      "Certificate of completion from VLCC certified trainer",
      "Digital guide on skincare & morning prep checklists"
    ],
    category: "masterclass"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Riya Sharma",
    role: "Bride (Dec 2025)",
    review: "Zash is an absolute magician! My wedding look was everything I had dreamed of. The HD makeup was completely weightless, and even after 10 hours of rituals under heavy lighting, my skin looked radiant and dewy in photos and in person. VLCC certified quality indeed!",
    rating: 5,
    date: "Dec 18, 2025"
  },
  {
    id: "t2",
    name: "Anjali Agarwal",
    role: "Engagement Client (Feb 2026)",
    review: "I requested a very specific soft glam nude look for my ring ceremony, and she delivered beyond perfection! Everyone complimented my makeup. She is so polite, patient, and uses highly hygienic premium products. Highly recommend her for bridal packages!",
    rating: 5,
    date: "Feb 05, 2026"
  },
  {
    id: "t3",
    name: "Mehak Khan",
    role: "Sister of Bride / Party Glam (Nov 2025)",
    review: "Booked Zash for my sister's wedding and myself. Her outfit draping was incredibly clean and stayed perfectly intact all night. Her attention to detail with hairstyles and lash selection is unmatched in Aligarh!",
    rating: 5,
    date: "Nov 22, 2025"
  }
];

export const FAQs: FAQItem[] = [
  {
    question: "Do you travel to the wedding venue / locations?",
    answer: "Yes! For bridal packages, we offer on-site makeup services at your hotel, home, or wedding venue. Outstation travel can be arranged with pre-booked transport and lodging accommodations."
  },
  {
    question: "Which makeup brands and products do you use?",
    answer: "We use exclusively premium, luxury cosmetic brands to ensure durability and skin health. This includes MAC, Estée Lauder, Huda Beauty, Anastasia Beverly Hills, NARS, Charlotte Tilbury, and Fenty Beauty. All brushes and tools are fully sanitized before every client."
  },
  {
    question: "How far in advance should I book my bridal package?",
    answer: "To secure your date, we recommend booking 3 to 6 months in advance, especially during peak wedding seasons (October to March). All bookings are confirmed only upon receipt of an advance deposit."
  },
  {
    question: "Do you offer makeup trials before the main day?",
    answer: "Yes, we offer bridal trials at a paid nominal fee which is fully adjusted against the final package price upon confirmation of booking."
  },
  {
    question: "Can you accommodate dry or acne-prone sensitive skin?",
    answer: "Absolutely. Having certified training from VLCC, we start every session with a skin analysis and apply medical-grade barrier primers and hydrating serums tailored for sensitive, acne-prone, oily, or extremely dry skin profiles."
  }
];
