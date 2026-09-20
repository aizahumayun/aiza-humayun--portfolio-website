import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-systems-limited',
    role: 'Software Engineering Intern',
    company: 'Systems Limited',
    period: 'Jan 2026 – Jun 2026',
    isCurrent: false,
    isRecent: true,
    responsibilities: [
      'Developed and maintained React-based features for enterprise business workflows using the MERN stack.',
      'Built reusable React components and integrated REST APIs to connect frontend interfaces with backend services.',
      'Developed backend modules using Node.js, Express.js, and MongoDB, including JWT-based authentication and data-management functionality.',
      'Debugged application issues and participated in code reviews, Agile ceremonies, and collaborative development with the engineering team.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Agile'],
  },
  {
    id: 'exp-exd-software',
    role: 'JavaScript Full Stack Trainee (NAVTTC)',
    company: 'EXD Software House',
    period: 'Sep 2025 – Feb 2026',
    isCurrent: false,
    responsibilities: [
      'Completed an intensive, NAVTTC-certified training program in JavaScript Full Stack Development.',
      'Built responsive frontend applications using React.js, HTML, CSS, and JavaScript through hands-on cohort projects.',
      'Built and connected REST API backends using Node.js, Express.js, and MongoDB for full-stack training projects.',
      'Practiced Git/GitHub workflows and component-based development throughout the training program.',
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'HTML/CSS'],
  },
  {
    id: 'exp-interns-pakistan',
    role: 'Web Development Intern',
    company: 'Interns Pakistan',
    period: 'Feb 2024 – Mar 2024',
    isCurrent: false,
    responsibilities: [
      'Strengthened UI/UX design, collaboration, and problem-solving skills through hands-on client project assignments.',
      'Customized and maintained client WordPress websites through theme and plugin configuration.',
      'Built responsive web interfaces using HTML, CSS, and JavaScript for client-facing websites.',
    ],
    technologies: ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
  },
];
