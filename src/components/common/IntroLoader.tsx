import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IntroLoaderProps {
  onFinish?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      // Quickly complete for reduced motion
      const quickTimer = setTimeout(() => {
        onFinish?.();
      }, 500);
      return () => clearTimeout(quickTimer);
    }

    // Smooth progress counter from 0 to 100
    const startTime = performance.now();
    const duration = 1600; // completes before exit transition at 1700ms

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Sequence timing:
    // 0 - 1700ms: animation plays
    // 1700ms: trigger exit
    const exitTimer = setTimeout(() => {
      onFinish?.();
    }, 1800);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
      }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between items-center bg-[#0B162B] text-white overflow-hidden select-none px-4 sm:px-8 py-6 sm:py-8 pointer-events-auto"
    >
      {/* Top Bar: Minimalist Technical Identity */}
      <div className="w-full max-w-6xl flex items-center justify-between z-20 text-xs font-mono tracking-widest text-gray-400">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
          <span className="font-semibold text-gray-200 tracking-tight text-xs sm:text-sm">
            AIZA HUMAYUN
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3 text-xs sm:text-sm"
        >
          <span className="hidden sm:inline text-gray-500 font-sans">MERN STACK</span>
          <span className="text-[#FF8500] font-bold">{progress}%</span>
        </motion.div>
      </div>

      {/* Background Large Editorial Moving Ribbon / Marquee (Atmospheric depth) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-20 overflow-hidden">
        <motion.div
          initial={{ x: isReducedMotion ? 0 : '0%' }}
          animate={{ x: isReducedMotion ? 0 : '-50%' }}
          transition={{
            duration: 16,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap text-5xl sm:text-7xl lg:text-9xl font-extrabold uppercase tracking-widest text-transparent select-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
          }}
        >
          <span>
            SOFTWARE DEVELOPER &bull; MERN STACK &bull; REACT &bull; TYPESCRIPT &bull; NODE.JS &bull;&nbsp;
          </span>
          <span>
            SOFTWARE DEVELOPER &bull; MERN STACK &bull; REACT &bull; TYPESCRIPT &bull; NODE.JS &bull;&nbsp;
          </span>
        </motion.div>
      </div>

      {/* Centerpiece: Primary Strip & Developer Title */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto w-full max-w-4xl px-2">
        {/* Top Horizontal Laser / Accent Line */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-6 sm:mb-8">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            className="absolute top-0 left-0 w-48 sm:w-72 h-full bg-gradient-to-r from-transparent via-[#FF8500] to-transparent"
          />
        </div>

        {/* Center Editorial Title Row with Horizontal Bars */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 w-full">
          {/* Left Expanding Bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block origin-right flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#FF8500]/40 to-[#FF8500]"
          />

          {/* Masked Central Titles */}
          <div className="flex flex-col items-center text-center">
            {/* Primary Headline: SOFTWARE DEVELOPER */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white flex items-center justify-center gap-2"
              >
                <span>Software Developer</span>
                <span className="text-[#FF8500]">.</span>
              </motion.h1>
            </div>

            {/* Sub-headline: MERN STACK DEVELOPER */}
            <div className="overflow-hidden mt-1 sm:mt-2">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-[#A8B0C0] flex items-center justify-center gap-2"
              >
                <span className="text-[#FF8500] font-mono font-normal tracking-normal">//</span>
                <span>MERN Stack Developer</span>
              </motion.p>
            </div>
          </div>

          {/* Right Expanding Bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block origin-left flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#FF8500]/40 to-[#FF8500]"
          />
        </div>

        {/* Bottom Horizontal Laser / Accent Line */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mt-6 sm:mt-8">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            className="absolute top-0 right-0 w-48 sm:w-72 h-full bg-gradient-to-r from-transparent via-[#FF8500] to-transparent"
          />
        </div>
      </div>

      {/* Bottom Bar: Status & Technical Progress */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 z-20 text-xs font-mono text-gray-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 bg-[#FF8500]/80 rounded-full" />
          <span>INITIALIZING INTERFACE</span>
        </motion.div>

        {/* Progress Bar Strip */}
        <div className="w-full max-w-xs sm:max-w-xs h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
            className="h-full bg-[#FF8500] rounded-full shadow-[0_0_8px_rgba(255,133,0,0.6)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden sm:block text-gray-500"
        >
          SYS // PORTFOLIO READY
        </motion.div>
      </div>
    </motion.div>
  );
};
