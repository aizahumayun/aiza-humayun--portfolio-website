import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6', size = 24 }) => {
  const iconKey = name.toLowerCase();

  switch (iconKey) {
    case 'laravel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M19.5 7.5L12 3L4.5 7.5V16.5L12 21L19.5 16.5V7.5Z"
            fill="#FF2D20"
            fillOpacity="0.15"
            stroke="#FF2D20"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 3V21M19.5 7.5L12 12M4.5 7.5L12 12M12 12L4.5 16.5M12 12L19.5 16.5"
            stroke="#FF2D20"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'framer_motion':
    case 'framer motion':
    case 'framer':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 3H20V10H12L4 3Z" fill="#0055FF" />
          <path d="M4 10H12L20 17H4V10Z" fill="#FF0055" />
          <path d="M4 17H12L4 24V17Z" fill="#7928CA" />
        </svg>
      );

    case 'vue':
    case 'vue.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M2 3H6L12 13.5L18 3H22L12 20.5L2 3Z" fill="#42B883" />
          <path d="M6 3H9.5L12 7.5L14.5 3H18L12 13.5L6 3Z" fill="#35495E" />
        </svg>
      );

    case 'react':
    case 'react.js':
    case 'react native':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8H4.5V10.5H6.8V19H9.2V10.5H11.5V8Z" fill="white" />
          <path d="M19.5 11.2C19 10.6 18.2 10.2 17.1 10.2C15.8 10.2 14.8 10.9 14.8 12.1C14.8 13.2 15.6 13.8 16.9 14.3L17.5 14.5C18.3 14.8 18.7 15.2 18.7 15.8C18.7 16.6 17.9 17.1 16.8 17.1C15.5 17.1 14.6 16.4 14.2 15.3L12.3 16.4C13 18.1 14.6 19.1 16.8 19.1C19.3 19.1 21 17.7 21 15.6C21 14.2 20.1 13.4 18.6 12.8L18 12.6C17.4 12.3 17 12 17 11.5C17 10.9 17.5 10.6 18.2 10.6C18.8 10.6 19.3 10.9 19.7 11.4L21.4 10.2L19.5 11.2Z" fill="white" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M11 9H8.5V16C8.5 17.5 7.6 18.2 6.2 18.2C5.1 18.2 4.2 17.6 3.8 16.7L5.5 15.7C5.7 16.1 6 16.5 6.5 16.5C7 16.5 7.3 16.2 7.3 15.5V9H11Z" fill="#000000" />
          <path d="M19.5 11.2C19 10.6 18.2 10.2 17.1 10.2C15.8 10.2 14.8 10.9 14.8 12.1C14.8 13.2 15.6 13.8 16.9 14.3L17.5 14.5C18.3 14.8 18.7 15.2 18.7 15.8C18.7 16.6 17.9 17.1 16.8 17.1C15.5 17.1 14.6 16.4 14.2 15.3L12.3 16.4C13 18.1 14.6 19.1 16.8 19.1C19.3 19.1 21 17.7 21 15.6C21 14.2 20.1 13.4 18.6 12.8L18 12.6C17.4 12.3 17 12 17 11.5C17 10.9 17.5 10.6 18.2 10.6C18.8 10.6 19.3 10.9 19.7 11.4L19.5 11.2Z" fill="#000000" />
        </svg>
      );

    case 'node':
    case 'node.js':
    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933" />
          <path d="M12 4.3L5 8.3V15.7L12 19.7L19 15.7V8.3L12 4.3Z" fill="#215732" />
          <path d="M12 7.5L8 10V14L12 16.5L16 14V10L12 7.5Z" fill="#68A063" />
        </svg>
      );

    case 'express':
    case 'express.js':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm-1-6.5c-.69 0-1.25-.56-1.25-1.25S11.31 7.5 12 7.5s1.25.56 1.25 1.25S12.69 10 12 10z" />
          <path d="M7 12h10M7 8h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C12 2 6 8.5 6 14.5C6 18.5 9 22 12 22C15 22 18 18.5 18 14.5C18 8.5 12 2 12 2Z" fill="#47A248" />
          <path d="M12 2V22C12.5 22 13 21.8 13.5 21.5C16 19.5 17.5 16.5 17.5 14C17.5 9 12 2 12 2Z" fill="#499D4A" />
          <path d="M12 6V18" stroke="#13AA52" strokeWidth="1.5" />
        </svg>
      );

    case 'redux':
    case 'redux toolkit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8.2 4.5C6 6.7 5.8 10.2 7.5 12.6L6.1 14C3.6 10.8 3.8 6.2 6.8 3.2C9.8 0.2 14.4 0 17.6 2.5L16.2 3.9C13.8 2.2 10.3 2.4 8.2 4.5Z" fill="#764ABC" />
          <path d="M15.8 19.5C18 17.3 18.2 13.8 16.5 11.4L17.9 10C20.4 13.2 20.2 17.8 17.2 20.8C14.2 23.8 9.6 24 6.4 21.5L7.8 20.1C10.2 21.8 13.7 21.6 15.8 19.5Z" fill="#764ABC" />
          <circle cx="12" cy="12" r="3" fill="#764ABC" />
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M6 12C7.33333 9.33333 9.33333 8 12 8C16 8 16 11 18 11C19.3333 11 20.6667 10 22 8C20.6667 10.6667 18.6667 12 16 12C12 12 12 9 10 9C8.66667 9 7.33333 10 6 12Z"
            fill="#06B6D4"
          />
          <path
            d="M2 17C3.33333 14.3333 5.33333 13 8 13C12 13 12 16 14 16C15.3333 16 16.6667 15 18 13C16.6667 15.6667 14.6667 17 12 17C8 17 8 14 6 14C4.66667 14 3.33333 15 2 17Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'firebase':
    case 'firebase.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M4.5 18.5L7.2 4.2C7.3 3.6 8.1 3.4 8.5 3.9L11.5 9.2L4.5 18.5Z"
            fill="#FFA000"
          />
          <path
            d="M13.2 8.4L11.2 5.1C10.9 4.6 10.1 4.7 10 5.3L4.5 18.5L13.2 8.4Z"
            fill="#F57C00"
          />
          <path
            d="M19.5 18.5L14.8 9.5L4.5 18.5L11.2 22.3C11.7 22.6 12.3 22.6 12.8 22.3L19.5 18.5Z"
            fill="#FFCA28"
          />
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H5.5C5.5 5.4 2 5 2 8.3C2 11.6 5 11.4 5 11.4H6.5V9.9C6.5 8.2 7.9 8.2 7.9 8.2H12.1C13.8 8.2 13.8 6.9 13.8 6.9V3.4C13.8 3.4 14.1 2 11.9 2ZM10.2 3.2C10.6 3.2 10.9 3.5 10.9 3.9C10.9 4.3 10.6 4.6 10.2 4.6C9.8 4.6 9.5 4.3 9.5 3.9C9.5 3.5 9.8 3.2 10.2 3.2Z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 19.1H11.9V18.6H18.5C18.5 18.6 22 19 22 15.7C22 12.4 19 12.6 19 12.6H17.5V14.1C17.5 15.8 16.1 15.8 16.1 15.8H11.9C10.2 15.8 10.2 17.1 10.2 17.1V20.6C10.2 20.6 9.9 22 12.1 22ZM13.8 20.8C13.4 20.8 13.1 20.5 13.1 20.1C13.1 19.7 13.4 19.4 13.8 19.4C14.2 19.4 14.5 19.7 14.5 20.1C14.5 20.5 14.2 20.8 13.8 20.8Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'vite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M21.5 4.5L12.5 21L2.5 4.5L12 2.5L21.5 4.5Z"
            fill="url(#vite-grad)"
          />
          <path
            d="M14.5 3L8.5 13H12.5L10 19.5L16.5 9.5H12.5L14.5 3Z"
            fill="#FFD426"
          />
          <defs>
            <linearGradient id="vite-grad" x1="2.5" y1="2.5" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center font-bold text-xs ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
