import React from 'react';
import { footerSocialLinks } from '../../data/socialLinks';
import { SocialLinks } from '../common/SocialLinks';
import type { NavItem } from '../../types';

const footerNav: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-gray-200/80 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#0B162B] transition-colors py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-200/60 dark:border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Aiza<span className="text-[#FF8500]">.</span>
            </a>
            <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-[#A8B0C0]">
              React Developer | MERN Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center">
            <SocialLinks links={footerSocialLinks} variant="footer" />
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 dark:text-[#A8B0C0] text-center md:text-right">
            © {new Date().getFullYear()} Aiza Humayun. All rights reserved.
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600 dark:text-[#A8B0C0]">
          {footerNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-[#FF8500] dark:hover:text-[#FF8500] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
