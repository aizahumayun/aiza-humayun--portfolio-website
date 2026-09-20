import React from 'react';
import { motion } from 'motion/react';
import type { SocialLink } from '../../types';
import { BrandIcon } from './BrandIcon';

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'hero' | 'footer';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  variant = 'hero',
  className = '',
}) => {
  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            id={`footer-social-${link.id}`}
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 dark:bg-[#16233A] text-gray-700 dark:text-[#A8B0C0] hover:text-[#FF8500] dark:hover:text-[#FF8500] hover:bg-gray-300 dark:hover:bg-[#1F3152] flex items-center justify-center transition-colors"
          >
            <BrandIcon name={link.icon} size={16} />
          </motion.a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {links.map((link) => {
        let bgStyle = 'bg-gray-800 text-white';
        if (link.icon === 'instagram') {
          bgStyle = 'bg-gradient-to-tr from-[#FF543E] via-[#D82D7E] to-[#6E2CF3] text-white';
        } else if (link.icon === 'tiktok') {
          bgStyle = 'bg-[#000000] text-white border border-white/10';
        } else if (link.icon === 'github') {
          bgStyle = 'bg-[#181717] text-white border border-white/10';
        } else if (link.icon === 'youtube') {
          bgStyle = 'bg-[#FF0000] text-white';
        }

        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            id={`hero-social-${link.id}`}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shadow-sm transition-transform ${bgStyle}`}
          >
            <BrandIcon name={link.icon} size={18} />
          </motion.a>
        );
      })}
    </div>
  );
};
