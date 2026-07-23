import { Mentor, Package, Service, TestimonialProof, TimelineStep, FAQItem, GalleryItem } from '../types';

export const WHATSAPP_NUMBER = "919876543210"; // Official mentorship support hotline
export const DEFAULT_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I am interested in booking 1-on-1 mentorship with Sanchit Puri and Syed Husna Ali.")}`;

export const mentors: Mentor[] = [
  {
    id: "sanchit-puri",
    name: "Sanchit Puri",
    title: "Digital Marketing & High-Income Growth Strategist",
    specialization: [
      "Affiliate Marketing",
      "Digital Marketing",
      "Freelancing Mastery",
      "Lead Generation",
      "Business Scaling",
      "Performance Marketing",
      "Personal Branding",
      "Communication Skills",
      "Leadership",
      "Career Development",
      "Professional Growth"
    ],
    experience: "6+ Years",
    studentsCount: "300+ Students Mentored",
    bio: "Over 6 years of hands-on experience building multi-lakh digital campaigns, affiliate marketing engines, and client acquisition pipelines. Sanchit has directly empowered 300+ students and working professionals to scale high-income digital skills and achieve financial independence.",
    image: "https://cwishlist.sirv.com/sanchit.png",
    achievements: [
      "Mentored 300+ students to generate consistent online income",
      "Managed ₹50L+ in performance ad spend across industries",
      "Helped 40+ freelancers build $2K+/month client retainers",
      "Featured growth speaker & top performance strategist"
    ],
    highlights: [
      "High-Converting Sales Funnels",
      "1-on-1 Weekly Live Reviews",
      "Done-For-You Lead Gen Templates",
      "0 to 1 Lakh/Month Scaling Blueprint"
    ],
    whatsappMessage: "Hi Sanchit, I want to join your High Income Mentorship Program. Please guide me on getting started!",
    whatsappNumber: "919811051676",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  },
  {
    id: "syed-husna-ali",
    name: "Syed Husna Ali",
    title: "Senior Career Counsellor & Personal Growth Expert",
    specialization: [
      "Career Guidance",
      "Career Counselling",
      "Personality Development",
      "Career Planning",
      "Student Mentorship",
      "Professional Growth",
      "Interview & Soft Skills"
    ],
    experience: "7+ Years",
    studentsCount: "500+ Career Consultations",
    bio: "A trusted Career Counsellor and Guidance Expert dedicated to helping students and professionals unlock their ideal career trajectory. Syed specializes in personality alignment, structured career roadmaps, corporate communication, and high-impact placement prep.",
    image: "https://cwishlist.sirv.com/husna.png",
    achievements: [
      "Advised 500+ students on high-growth career selection",
      "95% success rate in student career transformations",
      "Architected personalized career blueprints for top college grads",
      "Corporate trainer for confidence & executive presence"
    ],
    highlights: [
      "Psychometric & Skill Mapping",
      "Custom 1-Page Career Roadmap",
      "Mock Interviews & Resume Polish",
      "Corporate Communication Coaching"
    ],
    whatsappMessage: "Hi Syed Husna Ali, I need expert Career Counselling & Guidance for my professional growth. How can we connect?",
    whatsappNumber: "918887986651",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Mentorship",
    price: "₹4,999",
    originalPrice: "₹9,999",
    tagline: "Essential kickstart for beginners wanting foundational clarity & direction.",
    targetAudience: "College Students & Freshers looking for a clear high-income career path",
    duration: "1 Month Mentorship Access",
    features: [
      "1-on-1 Strategy Session with Mentor (60 Mins)",
      "Personalized Skill & Career Assessment Roadmap",
      "Foundations of Digital Marketing & Freelancing",
      "Access to Core Resource & Funnel Templates",
      "WhatsApp Group Support (Mon-Fri)",
      "Certificate of Mentorship Completion"
    ],
    notIncluded: [
      "Weekly 1-on-1 Private Call Reviews",
      "Direct Client Acquisition Script Review",
      "Lifetime VIP Inner Circle Access"
    ],
    whatsappMessage: "Hi! I want to enroll in the STARTER Mentorship Package (₹4,999). Please share enrollment details.",
    mentorTarget: "Both Mentors"
  },
  {
    id: "growth",
    name: "Growth Mentorship",
    price: "₹7,499",
    originalPrice: "₹14,999",
    popular: true,
    tagline: "Our most popular intensive program to build a ₹50K-₹1L/month skill stack.",
    targetAudience: "Aspiring Marketers, Freelancers & Career Seekers wanting fast-track results",
    duration: "3 Months Intensive Mentorship",
    features: [
      "4 Private 1-on-1 Mentorship Sessions (60 Mins Each)",
      "Full Affiliate & Digital Marketing Execution Blueprint",
      "High-Ticket Client Closing & Cold Outreach System",
      "Career Guidance & Resume/Portfolio Rebuild by Syed Husna",
      "Weekly Live Accountability & Q&A Audits with Sanchit Puri",
      "Direct Priority WhatsApp Voice Note Access",
      "Proven Lead Generation Funnels & Ad Copies"
    ],
    whatsappMessage: "Hi! I want to enroll in the MOST POPULAR GROWTH Mentorship Package (₹7,499). Please reserve my spot!",
    mentorTarget: "Sanchit Puri + Syed Husna Ali"
  },
  {
    id: "elite-vip",
    name: "Elite VIP Mentorship",
    price: "₹12,999",
    originalPrice: "₹24,999",
    tagline: "Ultra-exclusive 1-on-1 handholding until you achieve active scaling.",
    targetAudience: "Serious individuals committed to building high-income businesses or career breakthroughs",
    duration: "6 Months Unlimited Support + Lifetime VIP Access",
    features: [
      "Unlimited 1-on-1 Private Sessions (Bi-weekly scheduling)",
      "Done-With-You Funnel & Brand Setup with Sanchit Puri",
      "Full Personality & Leadership Development with Syed Husna Ali",
      "Custom Lead Generation & Ad Campaign Audit",
      "100% Guaranteed Portfolio & Resume Transformation",
      "Exclusive Access to Private Mastermind Offline Events",
      "Direct Emergency Call Access with Both Mentors",
      "Lifetime Access to All Future Updates & Content"
    ],
    whatsappMessage: "Hi! I am ready to join the ELITE VIP Mentorship Package (₹12,999). I want personal 1-on-1 guidance from Sanchit & Syed Husna.",
    mentorTarget: "VIP Dual Mentor Handholding"
  }
];

export const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "marketing",
    mentorName: "Sanchit Puri",
    description: "Master modern multi-channel digital marketing, SEO, paid ads, and brand positioning that drives predictable revenue.",
    iconName: "Target",
    outcomes: ["Campaign Architecture", "Meta & Google Ads", "ROI Optimization"],
    popular: true
  },
  {
    id: "affiliate-marketing",
    title: "Affiliate Marketing",
    category: "marketing",
    mentorName: "Sanchit Puri",
    description: "Learn how to select high-paying affiliate offers, build automated conversion funnels, and generate passive organic/paid traffic.",
    iconName: "TrendingUp",
    outcomes: ["High Ticket Offer Selection", "Funnel Automation", "Traffic Generation"],
    popular: true
  },
  {
    id: "freelancing",
    title: "Freelancing Mastery",
    category: "growth",
    mentorName: "Sanchit Puri",
    description: "Position yourself as an elite freelancer, land high-ticket international clients, and charge ₹50K+ per retainer.",
    iconName: "Briefcase",
    outcomes: ["Cold Outreach Templates", "Pricing & Proposals", "Client Retainers"],
    popular: true
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    category: "marketing",
    mentorName: "Sanchit Puri",
    description: "Build scalable lead engines using organic content strategies, landing pages, and automated WhatsApp nurturing.",
    iconName: "Zap",
    outcomes: ["High Quality Lead Capture", "WhatsApp Automation", "Conversion Optimization"]
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    category: "career",
    mentorName: "Syed Husna Ali",
    description: "Gain clarity on career choices, market demands, and high-growth industry trajectories tailored to your personality.",
    iconName: "Compass",
    outcomes: ["Personalized Career Path", "Industry Analysis", "Growth Roadmap"],
    popular: true
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    category: "career",
    mentorName: "Syed Husna Ali",
    description: "1-on-1 deep dive counseling to overcome career stagnation, transition into high-paying roles, and align personal values.",
    iconName: "UserCheck",
    outcomes: ["Clarity & Confidence", "Stagnation Breakthrough", "Skill Audit"]
  },
  {
    id: "personality-development",
    title: "Personality Development",
    category: "career",
    mentorName: "Syed Husna Ali",
    description: "Refine executive presence, body language, public speaking, and professional mindset to stand out in interviews and leadership.",
    iconName: "Sparkles",
    outcomes: ["Executive Presence", "Public Speaking", "Confidence Building"]
  },
  {
    id: "business-scaling",
    title: "Business Scaling",
    category: "growth",
    mentorName: "Sanchit Puri",
    description: "Scale your agency or digital offer from ₹1L to ₹5L+/month with streamlined delegation, SOPs, and systemized sales.",
    iconName: "BarChart3",
    outcomes: ["SOP Creation", "Team Delegation", "Revenue Multiplication"]
  },
  {
    id: "leadership",
    title: "Leadership & Management",
    category: "career",
    mentorName: "Both Mentors",
    description: "Develop crucial leadership capabilities, team management skills, and emotional intelligence required for modern corporate success.",
    iconName: "Award",
    outcomes: ["Team Motivation", "Conflict Resolution", "Decision Making"]
  },
  {
    id: "communication-skills",
    title: "Communication Skills",
    category: "career",
    mentorName: "Syed Husna Ali",
    description: "Master persuasive verbal and written communication, corporate email etiquette, and high-impact negotiation.",
    iconName: "MessageSquare",
    outcomes: ["Persuasive Pitching", "Corporate Etiquette", "Negotiation Mastery"]
  },
  {
    id: "career-development",
    title: "Career Development",
    category: "career",
    mentorName: "Syed Husna Ali",
    description: "Build a future-proof career strategy with high-yield networking, LinkedIn personal branding, and strategic job switching.",
    iconName: "GraduationCap",
    outcomes: ["LinkedIn Branding", "Job Placement Strategy", "Salary Negotiation"]
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    stepNumber: 1,
    title: "Book 1-on-1 Discovery Session",
    subtitle: "Clarity First",
    description: "Connect directly with Sanchit Puri or Syed Husna Ali via WhatsApp. We evaluate your current skill set, goals, and career bottlenecks.",
    icon: "CalendarCheck",
    deliverable: "Detailed 30-min Skill Audit & Action Plan"
  },
  {
    stepNumber: 2,
    title: "Custom Personal Roadmap",
    subtitle: "Architecting Strategy",
    description: "Receive a tailored step-by-step roadmap designed specifically for your background—whether building digital income or advancing your corporate career.",
    icon: "Map",
    deliverable: "1-Page Execution Roadmap & Target Milestones"
  },
  {
    stepNumber: 3,
    title: "Hands-On Implementation",
    subtitle: "Building the Foundation",
    description: "Execute high-converting campaigns, build client proposals, optimize LinkedIn, or master affiliate funnels with direct mentor templates.",
    icon: "Rocket",
    deliverable: "Live Funnels, Portfolios & Outreach Engines"
  },
  {
    stepNumber: 4,
    title: "Weekly Accountability & Audits",
    subtitle: "Course Correction",
    description: "Participate in weekly 1-on-1 feedback reviews. Mentors review your metrics, pitch scripts, and ad spend to fix errors in real-time.",
    icon: "ShieldCheck",
    deliverable: "Live Campaign Audits & Script Refinements"
  },
  {
    stepNumber: 5,
    title: "Scalable Growth & Income",
    subtitle: "Financial & Career Breakthrough",
    description: "Celebrate hitting major milestones: landing your first $1,000 client, achieving ₹1 Lakh monthly affiliate revenue, or securing a top job offer.",
    icon: "Trophy",
    deliverable: "Consistent Income Flow & Career Confidence"
  }
];

export const studentProofs: TestimonialProof[] = [
  {
    id: "proof-1",
    studentName: "Rohan Verma",
    roleOrLocation: "Engineering Student, Delhi",
    mentor: "Sanchit Puri",
    badge: "₹1 Lakh Income Achieved",
    headline: "From Zero to ₹1.2 Lakhs in 45 Days with Affiliate Marketing",
    story: "I had no background in marketing. Sanchit sir personally helped me build my traffic funnel and pick high-ticket digital offers. The weekly accountability kept me on track!",
    metric: "₹1,24,500 Generated",
    screenshotType: "income",
    imageUrl: "https://cwishlist.sirv.com/poster.png",
    date: "12 Days Ago"
  },
  {
    id: "proof-2",
    studentName: "Priya Sharma",
    roleOrLocation: "BBA Graduate, Jaipur",
    mentor: "Syed Husna Ali",
    badge: "Career Transformation",
    headline: "Landed my Dream Product Associate Role with 85% Salary Hike",
    story: "Syed Husna sir transformed my resume and taught me structured interview techniques. His mock interview session gave me the exact confidence needed to crack 3 job offers!",
    metric: "85% Salary Jump",
    screenshotType: "feedback",
    imageUrl: "https://cwishlist.sirv.com/poster2.png",
    date: "3 Weeks Ago"
  },
  {
    id: "proof-3",
    studentName: "Aman Gupta",
    roleOrLocation: "Freelance Media Buyer, Mumbai",
    mentor: "Sanchit Puri",
    badge: "10x ROI",
    headline: "Closed 3 US Clients paying $1,500/month each",
    story: "Sanchit Puri's cold LinkedIn outreach script and retainer pricing strategy changed everything for my freelance agency. The Elite VIP package was my best investment ever.",
    metric: "$4,500/Mo Retainer",
    screenshotType: "dashboard",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    date: "1 Month Ago"
  },
  {
    id: "proof-4",
    studentName: "Ananya Mehta",
    roleOrLocation: "Digital Marketer, Bangalore",
    mentor: "Both",
    badge: "Student Success",
    headline: "Scaled My Lead Gen Business to ₹2.5 Lakhs/Month",
    story: "Combining Sanchit's lead generation mastery with Syed Husna's negotiation and communication coaching gave me the ultimate competitive edge in the market.",
    metric: "₹2,50,000/Month",
    screenshotType: "whatsapp",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    date: "2 Weeks Ago"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "1-on-1 Intensive Strategy Session",
    category: "training",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    description: "Sanchit Puri conducting a deep-dive ad campaign & sales funnel audit with student Rohan.",
    date: "2026"
  },
  {
    id: "gal-2",
    title: "Keynote Career Seminar with Syed Husna Ali",
    category: "speaking",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
    description: "Syed Husna Ali delivering a masterclass on 'Future-Proof Careers & High Income Skills' to 200+ students.",
    date: "2026"
  },
  {
    id: "gal-3",
    title: "Annual Mentorship Student Meetup",
    category: "students",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    description: "Celebrating ₹1 Crore+ collective student revenue milestone at our offline mastermind retreat.",
    date: "2025"
  },
  {
    id: "gal-4",
    title: "Top Growth Mentor Excellence Award",
    category: "achievements",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000",
    description: "Recognized among top performance marketing mentors for student career impact.",
    date: "2025"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who is this mentorship program designed for?",
    answer: "This mentorship is ideal for college students, fresh graduates, job seekers, aspiring freelancers, and digital entrepreneurs who want hands-on, 1-on-1 guidance to build high-income skills, scale affiliate marketing, or accelerate their corporate career growth.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "Do I need prior experience in marketing or business?",
    answer: "No prior technical or marketing experience is required. Both Sanchit Puri and Syed Husna Ali start with fundamental principles and guide you step-by-step through practical execution templates.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "How are the 1-on-1 mentorship sessions structured?",
    answer: "Sessions are conducted live via Google Meet or Zoom. Before each session, you submit your current work (funnels, resume, ad accounts, outreach pitches). During the call, mentors perform a live screen-share audit and give you clear action items for the upcoming week.",
    category: "packages"
  },
  {
    id: "faq-4",
    question: "What is the difference between Sanchit Puri and Syed Husna Ali's mentorship?",
    answer: "Sanchit Puri specializes in Affiliate Marketing, Digital Ad Campaigns, Freelancing, Lead Generation, and Business Scaling. Syed Husna Ali specializes in Career Counselling, Interview Preparation, Personality Development, and Strategic Career Planning. In our Growth and Elite VIP packages, you get equal access to BOTH mentors!",
    category: "general"
  },
  {
    id: "faq-5",
    question: "How do I book a package or connect on WhatsApp?",
    answer: "Simply click any 'Book Session' or 'Chat on WhatsApp' button on this page. You will be directly redirected to our official WhatsApp chat with a pre-filled inquiry message. Our team will immediately help you confirm your slot.",
    category: "packages"
  },
  {
    id: "faq-6",
    question: "Is there a guarantee or accountability system?",
    answer: "Yes! We maintain strict weekly accountability. If you complete the assigned tasks and roadmaps, you will see measurable growth in your skills, income, or career leads within 30 to 60 days.",
    category: "packages"
  }
];
