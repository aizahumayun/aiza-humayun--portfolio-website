import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'service-business-websites',
    title: 'Business Websites',
    description:
      'Modern, responsive websites for businesses, brands, and local services.',
    focusPoints: [
      'Responsive design',
      'Modern user interfaces',
      'React-based development',
      'Mobile-friendly layouts',
      'Clean & maintainable implementation',
    ],
    iconName: 'Globe',
  },
  {
    id: 'service-web-applications',
    title: 'Web Applications',
    description:
      'Interactive web applications built with React and the MERN stack.',
    focusPoints: [
      'React & TypeScript',
      'Node.js & Express.js',
      'MongoDB database',
      'REST APIs',
      'Authentication workflows',
    ],
    iconName: 'Code2',
  },
  {
    id: 'service-ai-web-apps',
    title: 'AI-Powered Web Applications',
    description:
      'Web applications enhanced with practical AI features and API integrations.',
    focusPoints: [
      'AI-powered web experiences',
      'AI API integrations',
      'Practical AI functionality',
      'React-based interfaces',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'service-custom-dashboards',
    title: 'Custom Dashboards & UI',
    description:
      'Responsive dashboards and user interfaces built with reusable React components and modern UI practices.',
    focusPoints: [
      'React & TypeScript',
      'Tailwind CSS',
      'Reusable components',
      'Responsive layouts',
      'Light/dark theme support',
    ],
    iconName: 'Layout',
  },
];
