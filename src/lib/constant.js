const team = [
  { id: 0, name: "Jennifer Anderson", credential: "LMFT" },
  {
    id: 1,
    name: "Candace Bletscher",
    credential: "AMFT",
  },
  {
    id: 2,
    name: "Heather Williams-Baumgart",
    credential: "AMFT",
  },
  {
    id: 3,
    name: "Samantha Jhonson",
    credential: "AMFT",
  },
  {
    id: 4,
    name: "Autumn Bodily",
    credential: "AMFT",
  },
  {
    id: 5,
    name: "Andrea Watkins",
    credential: "APCC",
  },
  {
    id: 6,
    name: "Rosa Gomez",
    credential: "AMFT",
  },
  {
    id: 7,
    name: "Chad Flores",
    credential: "AMFT",
  },
];

const specialities = [
  {
    id: 0,
    label: "Anxiety",
  },
  {
    id: 1,
    label: "Panic",
  },
  {
    id: 2,
    label: "Trauma",
  },
  {
    id: 3,
    label: "Burnout",
  },
  {
    id: 4,
    label: "Perfectionism",
  },
  {
    id: 5,
    label: "Chronic Stress",
  },
  {
    id: 6,
    label: "Overthinking",
  },
  {
    id: 7,
    label: "Sleep Difficulties",
  },
  {
    id: 8,
    label: "Past Experiences",
  },
  {
    id: 9,
    label: "Emotional Regulation",
  },
  {
    id: 10,
    label: "High Internal Pressure",
  },
];

const whoWeHelp = [
  {
    id: 0,
    title: "Anxiety & Panic",
    image: "/images/ourhelp/Image1.png",
    alt: "A woman sitting quietly on the edge of her bed in warm morning light, appearing thoughtful and emotionally overwhelmed.",
    description:
      "When worry, overthinking, or panic leave you feeling constantly on edge, I help you understand these patterns and find practical ways to feel more grounded.",
  },

  {
    id: 1,
    title: "Trauma & Past Experiences",
    image: "/images/ourhelp/Image2.png",
    alt: "A woman standing in a quiet doorway, reflecting in a calm, softly lit home environment.",
    description:
      "Some experiences stay with us long after they happen, shaping how we see ourselves, our relationships, and our sense of safety. I create space to work through them carefully and at a pace that feels safe.",
  },

  {
    id: 2,
    title: "Burnout & Perfectionism",
    image: "/images/ourhelp/Image3.png",
    alt: "A tired professional sitting at his desk late at night, taking a moment to pause from work.",
    description:
      "Constantly pushing yourself can leave you exhausted and disconnected. I help you understand that pressure, step back from perfectionism, and reconnect with yourself.",
  },
];

const methods = [
  { id: 0, label: "CBT" },
  { id: 1, label: "EMDR" },
  { id: 2, label: "Mindfulness-Based Practices" },
  { id: 3, label: "Body-Oriented Techniques" },
];

const expertiseAreas = [
  "Anxiety & Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Chronic Stress",
  "Past Experiences",
  "Overthinking",
  "Emotional Regulation",
  "Body-Based Stress",
  "High Internal Pressure",
  "Mindfulness-Based Practices",
  "CBT & EMDR",
];

const navigation = [
  { id: 0, label: "About", href: "#about", arrow: false },
  {
    id: 2,
    label: "Specialties",
    href: "#specialties",
    dropdown: specialities,
    arrow: true,
  },
  { id: 3, label: "Methods", href: "#methods", dropdown: methods, arrow: true },
  { id: 4, label: "FAQs", href: "#faqs", arrow: false },
];

const specialties = [
  {
    id: 0,
    title: "Anxiety & Panic",
    description:
      "Anxiety can make it difficult to quiet your mind, settle your body, or feel present in everyday life. In therapy, I’ll help you understand the patterns behind your worry and panic, develop practical ways to feel more grounded, and respond to what you’re experiencing with greater awareness.",
  },
  {
    id: 1,
    title: "Trauma & Past Experiences",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    id: 2,
    title: "Burnout & Perfectionism",
    description:
      "When you’ve spent years pushing yourself and meeting high expectations, it can become difficult to recognize what you need for yourself. In therapy, I’ll help you understand the pressure beneath perfectionism and burnout, step back from the constant push, and begin reconnecting with yourself.",
  },
  {
    id: 3,
    title: "Chronic Stress",
    description:
      "Living with ongoing stress can leave you feeling emotionally on edge, physically tense, or constantly prepared for something to go wrong. In therapy, I’ll help you understand these patterns, develop ways to feel more grounded and regulated, and create space for greater insight and resilience.",
  },
];

const footerNavigation = [
  { id: 0, label: "Home", href: "/" },
  { id: 0, label: "About", href: "#about" },
  { id: 0, label: "FAQs", href: "#faq" },
  { id: 0, label: "Contact", href: "#contact" },
];

const footerContact = {
  address: ["123th Street 45 W", "Santa Monica, CA 90401"],
  email: "dr.maya.reynolds@example.com",
  phone: "(310) 555-0147",
  servingAreas:
    "Serving Santa Monica and clients throughout California via secure telehealth",
};

const footerBrand = {
  description:
    "I offer in-person therapy at my Santa Monica office and secure telehealth throughout California. My goal is to provide a calm, supportive space where you can slow down and focus on what matters.",
};

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export {
  navigation,
  team,
  methods,
  specialities,
  whoWeHelp,
  expertiseAreas,
  specialties,
  footerNavigation,
  footerContact,
  footerBrand,
  legalLinks,
};
