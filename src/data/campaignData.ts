import siteConfig from './siteConfig.json';

// interfaces
export interface NavLink {
  label: string;
  href: string;
}

export interface CandidateInfo {
  name: string;
  position: string;
  tagline: string;
  subTagline: string;
  ward: string;
  party: string;
  heroImage: string;
  profileImage: string;
  whatsapp: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface AboutContent {
  story: string[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface VisionContent {
  subheadline: string;
  guaranteeText: string;
}

export interface Promise {
  id: string;
  title: string;
  problem: string;
  solution: string;
  execution: string;
  icon: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  impact: string;
  approach: string;
  icon: string;
}

export interface PastWork {
  id: string;
  title: string;
  description: string;
  location: string;
  year: string;
  image?: string;
  gallery?: string[];
  category: string;
  ctaLabel: string;
}

export interface PastWorkContent {
  badgeText: string;
  headline: string;
  subheadline: string;
}

export interface OngoingWork {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  startDate: string;
  estimatedCompletion: string;
  gallery: string[];
}

export interface OngoingWorkContent {
  badgeText: string;
  headline: string;
  subheadline: string;
  updatesButtonText: string;
  startedLabel: string;
  targetLabel: string;
  showMoreLabel: string;
  showLessLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  quote: string;
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

export interface EventsContent {
  badgeText: string;
  headline: string;
  subheadline: string;
  attendButtonText: string;
  fullCalendarButtonText: string;
  hideCalendarButtonText: string;
}

export interface CTAContent {
  headline: string;
  subheadline: string;
  getStartedText: string;
  options: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }[];
  stats: {
    number: string;
    label: string;
  }[];
}

export interface FooterContent {
  slogan: string;
  copyright: string;
  disclaimer: string;
  madeWithText: string;
  forText: string;
  quickLinks: {
    label: string;
    href: string;
  }[];
}

// Exports
export const navLinks = siteConfig.navLinks as NavLink[];
export const candidateInfo = siteConfig.candidateInfo as CandidateInfo;
export const aboutContent = siteConfig.aboutContent as AboutContent;
export const visionContent = siteConfig.visionContent as VisionContent;
export const promises = siteConfig.promises as Promise[];
export const localIssues = siteConfig.localIssues as Issue[];
export const pastWorkData = siteConfig.pastWorkData as PastWork[];
export const pastWorkContent = siteConfig.pastWorkContent as PastWorkContent;
export const ongoingWorkData = siteConfig.ongoingWorkData as OngoingWork[];
export const ongoingWorkContent = siteConfig.ongoingWorkContent as OngoingWorkContent;
export const testimonials = siteConfig.testimonials as Testimonial[];
export const events = siteConfig.events as Event[];
export const eventsContent = siteConfig.eventsContent as EventsContent;
export const ctaContent = siteConfig.ctaContent as CTAContent;
export const footerContent = siteConfig.footerContent as FooterContent;
