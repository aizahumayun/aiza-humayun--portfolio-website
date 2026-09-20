import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';
import { heroSocialLinks } from '../../data/socialLinks';
import { SocialLinks } from '../common/SocialLinks';
import { Button } from '../common/Button';
import { IllustratedPortrait } from '../common/IllustratedPortrait';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#FF8500]/5 dark:bg-[#FF8500]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1"
            data-aos="fade-right"
          >
            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 sm:mb-6"
            >
              <SocialLinks links={heroSocialLinks} variant="hero" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#FF8500] uppercase mb-2">
                React Developer | MERN Stack Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-[#FF8500]">Aiza Humayun</span>
              </h1>
            </motion.div>

            {/* Developer Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-[#A8B0C0] max-w-xl leading-relaxed font-normal"
            >
              React and MERN Stack Developer focused on building responsive,
              scalable, and high-performance web applications with clean
              component architecture and seamless REST API integrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3.5 sm:gap-4"
            >
              <Button
                variant="primary"
                size="md"
                href="public/assets/cv/Aiza-Humayun_MERN_DEV_CV.pdf"
                download="Aiza-Humayun-CV.pdf"
                id="hero-download-cv-btn"
                icon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto min-w-[160px]"
              >
                Download CV
              </Button>

              <Button
                variant="outline"
                size="md"
                href="#contact"
                onClick={scrollToContact}
                id="hero-contact-me-btn"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto min-w-[160px]"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right Column (Hero Image) */}
          <div
            className="lg:col-span-5 flex justify-center items-center order-2"
            data-aos="fade-left"
          >
            <IllustratedPortrait
              variant="hero"
              className="max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
