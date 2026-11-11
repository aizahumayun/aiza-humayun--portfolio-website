import type { Project } from '../types';
import veloraImage from '../assets/images/projects/velora.png';
import casaVerdeImage from '../assets/images/projects/casa-verde-mockup.png';
import dataLensImage from '../assets/images/projects/datalens-ai.png';
import devScopeImage from '../assets/images/projects/devscope-ai.png';
export const projectsData: Project[] = [
  {
    id: 'velora',
    title: 'VELORA – E-Commerce Platform',
    badge: 'Full-Stack MERN',
    description:
      'Developed a full-stack fashion e-commerce platform featuring user authentication, product browsing, search and filtering, shopping cart management, checkout, and order tracking. Built with a React and TypeScript frontend and a Node.js, Express, and MongoDB backend.',
    image: veloraImage,
    status: 'Completed',
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    demoUrl: 'https://veloraecommerce-site-nine.vercel.app/',
    githubUrl: 'https://github.com/aizahumayun/velora_ecommerce-site',
  },
  {
    id: 'casa-verde',
    title: 'CASA VERDE – Restaurant Website',
    badge: 'Frontend Development',
    description:
      'Designed and developed a modern restaurant landing page featuring an immersive hero section, menu showcase, about section, image gallery, and contact information. Focused on responsive layouts, visual storytelling, and an engaging user experience.',
    image: casaVerdeImage,
    status: 'Completed',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
    ],
    demoUrl: 'https://casa-verde-website-tau.vercel.app/',
    githubUrl: 'https://github.com/aizahumayun/casa-verde-website',
  },
  {
    id: 'datalens-ai',
    title: 'DataLens AI – Intelligent Data Analytics',
    badge: 'AI-Powered Application',
    description:
      'Developed an AI-powered CSV analytics platform that enables users to upload and explore datasets, preview data, analyze key performance indicators, generate interactive visualizations, and interact with their data through natural-language queries using the Gemini API.',
    image: dataLensImage,
    status: 'Completed',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Data Visualization',
      'Gemini API',
    ],
    demoUrl: 'https://datalens-ai-frontend-two.vercel.app/',
    githubUrl: 'https://github.com/aizahumayun/datalens-ai',
  },
  
{
  id: 'devscope-ai',
  title: 'DevScope AI – AI-Powered Project Blueprint Generator',
  badge: 'AI-Powered SaaS',
  description:
    'Developing an AI-powered SaaS platform that transforms software project requirements into structured development blueprints using the Gemini API. The platform includes user authentication, a personalized dashboard, AI-powered project analysis, saved analysis history, and profile management.',
  image: devScopeImage,
  status: 'In Development',
  technologies: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
    'Shadcn UI',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Gemini API',
    'JWT Authentication',
  ],
},
];