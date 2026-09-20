import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'process', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 backdrop-blur-md ${
            isScrolled
              ? 'bg-white/95 dark:bg-[#111D32]/95 text-gray-900 dark:text-white shadow-lg shadow-black/5 dark:shadow-black/30 border border-gray-200/80 dark:border-white/10'
              : 'bg-white/90 dark:bg-[#111D32]/90 text-gray-900 dark:text-white shadow-md shadow-black/5 dark:shadow-black/20 border border-gray-200/60 dark:border-white/10'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white focus:outline-none flex-shrink-0"
            id="nav-logo"
          >
            <span>Aiza</span>
            <span className="text-[#FF8500]">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-3.5 lg:gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  id={`nav-link-${item.id}`}
                  className={`text-xs lg:text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#FF8500] dark:text-[#FF8500]'
                      : 'text-gray-600 dark:text-[#A8B0C0] hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8500] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button
                size="sm"
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                id="nav-hire-me-btn"
                className="text-xs px-4 py-1.5 font-semibold"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden bg-white/95 dark:bg-[#111D32]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-gray-200/80 dark:border-white/10"
          >
            <div className="flex flex-col gap-3.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-[#FF8500] bg-[#FF8500]/10'
                      : 'text-gray-700 dark:text-[#A8B0C0] hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-white/10 mt-1">
                <Button
                  size="md"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full justify-center"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
