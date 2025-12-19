// Campaign Configuration - All content is dynamic and editable here

export interface CandidateInfo {
  name: string;
  position: string;
  tagline: string;
  subTagline: string;
  ward: string;
  party: string;
  heroImage: string;
  profileImage: string;
  phone: string;
  whatsapp: string;
  email: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface AboutContent {
  headline: string;
  story: string[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface PastWork {
  id: string;
  title: string;
  description: string;
  location: string;
  year: string;
  image?: string;
  category: string;
}

export interface LocalIssue {
  id: string;
  title: string;
  icon: string;
  description: string;
  impact: string;
  approach: string;
}

export interface Promise {
  id: string;
  title: string;
  problem: string;
  solution: string;
  execution: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  quote: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'rally' | 'meeting' | 'padyatra' | 'sabha';
}

// ==========================================
// CANDIDATE INFORMATION
// ==========================================

export const candidateInfo: CandidateInfo = {
  name: "Fardeen Paikar",
  position: "Candidate for Municipal Corporator",
  tagline: "कल्याणचा आवाज, आपलं स्वप्न",
  subTagline: "Building a Better Kalyan, Together",
  ward: "Ward 8 - Khadakpada",
  party: "Independent",
  heroImage: "/Untitled design (1).png",
  profileImage: "/candidate-profile.jpg",
  phone: "+91 7276544420",
  whatsapp: "+91 7276544420",
  email: "Fardeen.paikar@kalyanward15.in",
  socialLinks: {
    facebook: "https://facebook.com/FardeenPaikarkalyan",
    twitter: "https://twitter.com/FardeenPaikar15",
    instagram: "https://instagram.com/FardeenPaikarkalyan",
    youtube: "https://youtube.com/@FardeenPaikarkalyan"
  }
};

// ==========================================
// ABOUT SECTION
// ==========================================

export const aboutContent: AboutContent = {
  headline: "A Son of Kalyan, Fighting for Our Future",
  story: [
    "Born and raised in the heart of Kalyan, I have witnessed our city's transformation over three decades. Growing up in a middle-class family in Khadakpada, I understand the daily struggles that our families face - from water shortages at dawn to garbage-lined streets.",
    "My father was a municipal worker, and my mother ran a small provision store. They taught me that honest work and community service are the greatest virtues. These values guide me every single day.",
    "For the past 15 years, I have been serving our community without holding any official position. From organizing water tankers during shortages to leading cleanliness drives, I have always believed in action over promises.",
    "Today, I seek your vote not for power, but for the opportunity to serve you with the authority to make real change. Together, we will build the Kalyan our children deserve."
  ],
  highlights: [
    {
      icon: "home",
      title: "Kalyan Native",
      description: "Born and raised in Ward 8, understanding every lane and every family"
    },
    {
      icon: "users",
      title: "15+ Years Service",
      description: "Dedicated community work without any official position"
    },
    {
      icon: "heart",
      title: "Family Man",
      description: "Married with two children studying in local schools"
    },
    {
      icon: "briefcase",
      title: "Self-Made",
      description: "Built a small business through hard work and honesty"
    }
  ]
};

// ==========================================
// PAST WORK
// ==========================================

export const pastWorkData: PastWork[] = [
  {
    id: "water-crisis-2019",
    title: "Water Crisis Relief - Summer 2019",
    description: "Organized water tanker distribution for 500+ families during the severe water shortage. Coordinated with local authorities and funded partly from personal savings.",
    location: "Khadakpada, Kalyan",
    year: "2019",
    category: "Water Supply"
  },
  {
    id: "garbage-cleanup-drive",
    title: "Monthly Cleanliness Drives",
    description: "Started and led monthly garbage cleanup drives with 100+ volunteers. Cleared dumping grounds and installed waste bins in 5 localities.",
    location: "Ward 8 Area",
    year: "2018-Present",
    category: "Sanitation"
  },
  {
    id: "flood-relief-2021",
    title: "Flood Relief Operations",
    description: "During the 2021 monsoon flooding, helped evacuate 150 families, arranged temporary shelters, and distributed food and essentials for two weeks.",
    location: "Low-lying areas, Kalyan",
    year: "2021",
    category: "Emergency Relief"
  },
  {
    id: "streetlight-campaign",
    title: "Street Light Petition",
    description: "Collected 2000+ signatures and persistent follow-ups resulted in installation of 45 new street lights in dark lanes of our ward.",
    location: "Ward 8",
    year: "2020",
    category: "Infrastructure"
  },
  {
    id: "senior-citizen-help",
    title: "Senior Citizen Assistance",
    description: "Established a volunteer network to help elderly citizens with hospital visits, pension paperwork, and grocery deliveries.",
    location: "Khadakpada",
    year: "2017-Present",
    category: "Social Welfare"
  },
  {
    id: "school-renovation",
    title: "Municipal School Support",
    description: "Raised funds and organized volunteers to renovate classrooms, install fans, and provide notebooks to 200+ students.",
    location: "Kalyan Municipal School No. 5",
    year: "2022",
    category: "Education"
  }
];

// ==========================================
// LOCAL ISSUES
// ==========================================

export const localIssues: LocalIssue[] = [
  {
    id: "water-shortage",
    title: "Water Shortage",
    icon: "droplets",
    description: "Irregular water supply, especially during summer. Many areas receive water only once in 2-3 days.",
    impact: "Families struggle daily. Women wake up at 4 AM. Storage becomes a health hazard.",
    approach: "Push for direct pipeline connections, water storage tanks, and regular supply schedules. No family should wait for water."
  },
  {
    id: "garbage-management",
    title: "Garbage & Sanitation",
    icon: "trash2",
    description: "Irregular garbage collection leads to dumping on streets and open plots. Health hazard for everyone.",
    impact: "Diseases spread. Children play near garbage. Our streets smell. Property values fall.",
    approach: "Daily door-to-door collection, proper waste segregation, and converting waste plots into green spaces."
  },
  {
    id: "stray-dogs",
    title: "Stray Dog Problem",
    icon: "dog",
    description: "Increasing stray dog population causing safety concerns, especially for children and elderly.",
    impact: "Dog bites have increased 40% in 3 years. Morning walks have become risky.",
    approach: "Humane animal birth control program, designated feeding zones, and collaboration with animal welfare organizations."
  },
  {
    id: "drainage-roads",
    title: "Drainage & Roads",
    icon: "construction",
    description: "Clogged drains cause flooding during monsoon. Potholed roads damage vehicles and cause accidents.",
    impact: "Every monsoon, homes flood. Vehicles get damaged. Accidents happen daily.",
    approach: "Complete drain cleaning before monsoon, quality road repairs with accountability, and proper storm water management."
  },
  {
    id: "street-lights",
    title: "Street Lights & Safety",
    icon: "lightbulb",
    description: "Many lanes remain dark at night. Non-functional lights are not repaired for months.",
    impact: "Women feel unsafe after dark. Thefts increase. Accidents happen in darkness.",
    approach: "LED light installation in all lanes, quick complaint resolution system, and safety patrol coordination."
  },
  {
    id: "encroachment",
    title: "Footpath Encroachment",
    icon: "building",
    description: "Hawkers and illegal structures block footpaths. Pedestrians forced to walk on roads.",
    impact: "Dangerous for elderly and children. Traffic congestion. Unfair to legal businesses.",
    approach: "Designated hawker zones, regular enforcement, and creating proper market spaces."
  }
];

// ==========================================
// VISION & PROMISES
// ==========================================

export const promises: Promise[] = [
  {
    id: "water-24x7",
    title: "Water in Every Tap",
    problem: "Families receive water only once in 2-3 days. Women and children spend hours collecting and storing water.",
    solution: "Work with KDMC to ensure daily water supply. Push for new pipeline infrastructure and storage facilities.",
    execution: "First 6 months: Survey all areas, identify leakages, repair distribution. By year 2: Daily supply to 80% areas.",
    icon: "droplets"
  },
  {
    id: "clean-streets",
    title: "Clean Streets, Healthy Lives",
    problem: "Garbage piles up for days. Drains overflow. Our ward looks neglected.",
    solution: "Implement daily door-to-door collection. Create proper waste segregation system. Convert dump sites to gardens.",
    execution: "Month 1: Daily collection starts. Month 3: Segregation training. Year 1: 3 new garden spaces.",
    icon: "sparkles"
  },
  {
    id: "safe-roads",
    title: "Safe Roads for All",
    problem: "Potholes everywhere. Dark lanes at night. Accidents are common.",
    solution: "Quality road repairs with warranty. LED lights in every lane. Speed breakers near schools.",
    execution: "Priority list within 30 days. Major repairs in 6 months. Full lighting coverage in 1 year.",
    icon: "shield"
  },
  {
    id: "responsive-governance",
    title: "Your Voice, My Action",
    problem: "Complaints go unheard. No accountability. Citizens feel ignored.",
    solution: "Weekly open sessions in every locality. WhatsApp complaint system with tracking. Monthly progress reports.",
    execution: "Day 1: WhatsApp helpline active. Week 1: First locality meeting. Every month: Public report card.",
    icon: "megaphone"
  },
  {
    id: "youth-employment",
    title: "Youth Skill Development",
    problem: "Local youth struggle to find jobs. Lack of vocational training opportunities.",
    solution: "Partner with local businesses for internships. Organize skill workshops. Create job placement cell.",
    execution: "Month 2: First skill workshop. Month 6: 50 youth placed. Year 1: Permanent training center.",
    icon: "graduation-cap"
  }
];

// ==========================================
// TESTIMONIALS
// ==========================================

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sunita Sharma",
    area: "Khadakpada, Ward 8",
    quote: "When my husband was hospitalized, Fardeen bhai arranged blood donors within hours. He didn't know us personally, but he treated us like family. This is the leader we need."
  },
  {
    id: "testimonial-2",
    name: "Mohan Deshmukh",
    area: "Ganesh Nagar, Kalyan",
    quote: "For 3 years, we complained about broken street lights. Nothing happened. Fardeen took our petition, followed up daily, and got 12 lights installed in 2 months. He gets things done."
  },
  {
    id: "testimonial-3",
    name: "Fatima Begum",
    area: "Station Road Area",
    quote: "During floods, while others were making videos, Fardeen was carrying elderly people to safety. My 80-year-old mother-in-law was rescued by his team. We will never forget."
  },
  {
    id: "testimonial-4",
    name: "Prakash Joshi",
    area: "Market Area, Kalyan",
    quote: "As a shopkeeper, I've seen many politicians come before elections. Fardeen Paikar is the only one who comes regularly, listens to our problems, and actually tries to solve them."
  },
  {
    id: "testimonial-5",
    name: "Anjali Pawar",
    area: "Housing Society, Ward 8",
    quote: "Our society had water problems for years. Fardeen helped us navigate the KDMC system and finally got our tank connection approved. He knows how the system works."
  }
];

// ==========================================
// EVENTS
// ==========================================

export const events: Event[] = [
  {
    id: "event-1",
    title: "Jan Sabha - Ward 8",
    date: "2024-01-25",
    time: "6:00 PM",
    location: "Community Hall, Khadakpada",
    description: "Open discussion on water supply issues and proposed solutions. All residents welcome.",
    type: "sabha"
  },
  {
    id: "event-2",
    title: "Youth Meet & Greet",
    date: "2024-01-28",
    time: "4:00 PM",
    location: "Shivaji Garden, Kalyan",
    description: "Interactive session with young voters. Discussing employment, education, and opportunities.",
    type: "meeting"
  },
  {
    id: "event-3",
    title: "Padyatra - Market Area",
    date: "2024-02-01",
    time: "8:00 AM",
    location: "Starting from Kalyan Station",
    description: "Walk through market areas to understand shopkeeper concerns and local issues.",
    type: "padyatra"
  },
  {
    id: "event-4",
    title: "Women's Dialogue",
    date: "2024-02-05",
    time: "11:00 AM",
    location: "Mahila Mandal Hall",
    description: "Special session for women to discuss safety, water, sanitation, and family concerns.",
    type: "meeting"
  },
  {
    id: "event-5",
    title: "Senior Citizens Meet",
    date: "2024-02-08",
    time: "10:00 AM",
    location: "Temple Premises, Ganesh Nagar",
    description: "Discussion on healthcare, pension support, and senior citizen welfare programs.",
    type: "meeting"
  }
];

// ==========================================
// CTA SECTION
// ==========================================

export const ctaContent = {
  headline: "Join the Movement for Change",
  subheadline: "Be part of building a better Kalyan. Every voice matters.",
  volunteerText: "Volunteer with Us",
  reportIssueText: "Report a Local Issue",
  joinCampaignText: "Join the Campaign"
};

// ==========================================
// FOOTER CONTENT
// ==========================================

export const footerContent = {
  slogan: "Honest Service. Real Change.",
  copyright: "© 2024 Fardeen Paikar Campaign. All rights reserved.",
  disclaimer: "Paid political advertisement.",
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Issues", href: "#issues" },
    { label: "Vision", href: "#vision" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" }
  ]
};