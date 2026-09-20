import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'themeable-dashboard',
    title: 'Themeable Dashboard',
    badge: 'Core Frontend',
    description:
      'Designed a scalable dashboard with a reusable React and Tailwind CSS component library, supporting dynamic light/dark theme switching and fully responsive layouts across breakpoints.',
    image: 'dashboard',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Component Architecture'],
    githubUrl: 'https://github.com/aizahumayun',
  },
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    badge: 'MERN Stack',
    description:
      'Developed a complete MERN-based e-commerce solution featuring JWT authentication, product catalog management, a persistent shopping cart, and a RESTful API layer connecting the React/TypeScript frontend to a MongoDB-backed Express server.',
    image: 'ecommerce',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/aizahumayun',
  },
  {
    id: 'rehabilitation-system',
    title: 'AI-Powered Rehabilitation System',
    badge: 'Final Year Project',
    description:
      'Built an intelligent rehabilitation platform combining a CNN model for injury severity analysis with a RAG-based recommendation engine to generate personalized exercise plans, paired with a Flutter app for patient progress tracking.',
    image: 'rehab-ai',
    technologies: ['Python', 'CNN', 'RAG', 'Flutter', 'Data Science'],
    githubUrl: 'https://github.com/aizahumayun',
  },
];
