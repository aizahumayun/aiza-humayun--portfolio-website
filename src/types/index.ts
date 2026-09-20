export type Theme = 'light' | 'dark';

export interface Skill {
  id: string;
  name: string;
  proficiency?: number;
  category?: string;
  level?: string;
  icon: string;
  color?: string;
  trackColor?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'instagram' | 'tiktok' | 'github' | 'youtube' | 'twitter' | 'linkedin' | 'dribbble' | 'mail' | 'phone';
  bgGradient?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  focusPoints?: string[];
  iconName: 'Globe' | 'Layout' | 'Code2' | 'Gauge' | 'Sparkles';
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}
