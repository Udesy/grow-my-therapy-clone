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
    label: "Dissociation",
  },
  {
    id: 1,
    label: "Trauma",
  },
  {
    id: 2,
    label: "Special Needs Parenting",
  },
  {
    id: 3,
    label: "Couples",
  },
  {
    id: 4,
    label: "Children & Teens",
  },
  {
    id: 5,
    label: "Anxiety & Depression",
  },
  {
    id: 6,
    label: "Adoption",
  },
];

const whoWeHelp = [
  {
    id: 0,
    title: "Adults",
    image: "/images/ourhelp/Image1.jpg",
    alt: "Two women sitting on the beach looking out at the water",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    id: 1,
    title: "Couples",
    image: "/images/ourhelp/Image2.jpg",
    alt: "Couple embracing on the beach",
    description:
      "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    id: 2,
    title: "Children & Teens",
    image: "/images/ourhelp/Image3.jpg",
    alt: "Brother and sister playing at the shoreline",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

const methods = [
  { id: 0, label: "EMDR" },
  { id: 1, label: "Brainspotting" },
  { id: 2, label: "Somatic Therapy" },
  { id: 3, label: "Parts Work Therapy" },
];

const expertiseAreas = [
  "Dissociation",
  "Trauma",
  "Family Conflict",
  "Special Needs Parenting",
  "Depression",
  "Marriage",
  "Anxiety",
  "Relationships",
  "Children",
  "Teens",
  "Intimacy & Connection",
  "...and more.",
];

const navigation = [
  { id: 0, label: "About", href: "#about", arrow: false },
  { id: 1, label: "Our Team", href: "#team", dropdown: team, arrow: true },
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
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

const footerNavigation = [
  { id: 0, label: "Home", href: "/" },
  { id: 0, label: "About", href: "#about" },
  { id: 0, label: "FAQs", href: "#faq" },
  { id: 0, label: "Contact", href: "#contact" },
];

const footerContact = {
  address: ["925 Broadbeck Dr", "Suites 200 and 225", "Newbury Park, CA 91320"],
  email: "info@conejovalleycounseling.com",
  phone: "805.242.3120",
  servingAreas:
    "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
};

const footerBrand = {
  description:
    "We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
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
