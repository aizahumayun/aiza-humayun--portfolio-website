export type Theme = 'light' | 'dark';

export type SkillCategory =
  | 'Frontend Development'
  | 'Backend Development'
  | 'AI & Machine Learning'
  | 'Tools & Platforms';

export type SkillLevel = 'Core' | 'Proficient' | 'Working Knowledge';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon: string;
}
type ProjectStatus = 'Completed' | 'In Development' | 'Planned';
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
  status?: ProjectStatus;
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
  isRecent?: boolean;
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
