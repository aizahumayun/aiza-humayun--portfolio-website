import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { IntroLoader } from './components/common/IntroLoader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Services } from './components/services/Services';
import { Process } from './components/process/Process';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

function PortfolioContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotion,
    });

    // Refresh AOS on resize or layout changes
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader
            onFinish={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F7F8FA] dark:bg-[#0B162B] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden selection:bg-[#FF8500] selection:text-white">
        {/* 1. Header / Navbar */}
        <Navbar />

        <main className="relative">
          {/* 2. Hero Section (#home) */}
          <Hero />

          {/* 3. About Me Section (#about) */}
          <About />

          {/* 4. Skills Section (#skills) */}
          <Skills />

          {/* 5. Projects Section (#projects) */}
          <Projects />

          {/* 6. Experience Section (#experience) */}
          <Experience />

          {/* 7. Services Section (#services) */}
          <Services />

          {/* 8. How I Work / My Process Section (#process) */}
          <Process />

          {/* 9. Contact / Get In Touch Section (#contact) */}
          <Contact />
        </main>

        {/* 10. Footer */}
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
