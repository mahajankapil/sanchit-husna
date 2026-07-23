export interface Mentor {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  experience: string;
  studentsCount: string;
  bio: string;
  image: string;
  achievements: string[];
  highlights: string[];
  whatsappMessage: string;
  whatsappNumber: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
}

export interface Package {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
  tagline: string;
  targetAudience: string;
  duration: string;
  features: string[];
  notIncluded?: string[];
  whatsappMessage: string;
  mentorTarget: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'marketing' | 'career' | 'growth';
  mentorName: string;
  description: string;
  iconName: string;
  outcomes: string[];
  popular?: boolean;
}

export interface TestimonialProof {
  id: string;
  studentName: string;
  roleOrLocation: string;
  mentor: 'Sanchit Puri' | 'Syed Husna Ali' | 'Both';
  badge: string;
  headline: string;
  story: string;
  metric: string;
  screenshotType: 'whatsapp' | 'dashboard' | 'income' | 'feedback';
  imageUrl: string;
  date: string;
}

export interface TimelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverable: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'packages' | 'sanchit' | 'syed';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'training' | 'speaking' | 'students' | 'achievements';
  imageUrl: string;
  description: string;
  date: string;
}
