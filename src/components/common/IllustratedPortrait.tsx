import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  AtSign,
  Bell,
  Braces,
  Code2,
  Github,
  Laptop,
  Mail,
  MessageCircle,
  MousePointer2,
  PanelTop,
  Send,
  Sparkles,
} from 'lucide-react';
import { TechIcon } from './TechIcon';

type PortraitVariant = 'hero' | 'about' | 'contact';

interface IllustratedPortraitProps {
  variant: PortraitVariant;
  className?: string;
}

const floatTransition = (duration: number, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  ease: 'easeInOut' as const,
});

const badgeClass =
  'absolute z-10 flex items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#FF8500] shadow-lg shadow-[#0B162B]/10 backdrop-blur-sm dark:border-white/10 dark:bg-[#111D32]/90';
const portraitSrc = '/assets/images/portfolio-image.jpeg';

const iconMotion = (duration: number, delay: number, reducedMotion: boolean | null) => ({
  animate: reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-3, 3, -3] },
  transition: reducedMotion ? { duration: 0.2 } : floatTransition(duration, delay),
});

export const IllustratedPortrait: React.FC<IllustratedPortraitProps> = ({
  variant,
  className = '',
}) => {
  const reducedMotion = useReducedMotion();

  if (variant === 'about') {
    return (
      <motion.div
        whileHover={reducedMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`relative flex aspect-square w-full items-center justify-center ${className}`}
        aria-label="Animated technology skills illustration"
      >
        <div className="absolute inset-[8%] rounded-[2.5rem] rotate-3 bg-[#61DAFB]/5 dark:bg-[#16233A]" />
        <div className="absolute inset-[13%] rounded-[2rem] border border-[#FF8500]/20 bg-white/55 shadow-inner dark:bg-[#111D32]/70" />
        <div className="absolute z-[1] flex h-[38%] w-[48%] flex-col justify-between rounded-2xl border border-[#61DAFB]/20 bg-[#0B162B] p-4 font-mono text-xs text-[#A8B0C0] shadow-xl shadow-[#0B162B]/20 sm:h-[42%] sm:w-[52%] sm:p-5">
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
            <span className="h-2 w-2 rounded-full bg-[#FF8500]" />
            <span className="h-2 w-2 rounded-full bg-[#61DAFB]" />
            <span className="h-2 w-2 rounded-full bg-[#47A248]" />
          </div>
          <div className="space-y-1.5">
            <span className="block text-[#61DAFB]">const skills =</span>
            <span className="block pl-3 text-[#FF8500]">{'{ React, Node }'}</span>
            <span className="block text-[#A8B0C0]">{'</developer>'}</span>
          </div>
        </div>
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={reducedMotion ? { duration: 0.2 } : floatTransition(5.2, 0.15)}
          className="relative z-[2] flex h-[72%] w-[43%] items-end justify-center overflow-hidden rounded-[1.75rem] border-4 border-white/80 bg-[#F2F3F5] shadow-2xl shadow-[#0B162B]/20 dark:border-[#16233A] dark:bg-[#16233A] sm:h-[76%] sm:w-[46%]"
        >
          <img
            src={portraitSrc}
            alt="Aiza Humayun"
            className="h-full w-full object-cover object-top select-none"
            loading="lazy"
          />
        </motion.div>
        <SkillBadge name="javascript" className="left-[5%] top-[15%] text-[#111827]" duration={4.2} delay={0.1} reducedMotion={reducedMotion} />
        <SkillBadge name="typescript" className="right-[5%] top-[12%]" duration={5.3} delay={0.7} reducedMotion={reducedMotion} />
        <SkillBadge name="react" className="left-[1%] bottom-[19%]" duration={4.8} delay={0.4} reducedMotion={reducedMotion} />
        <SkillBadge name="node" className="right-[1%] bottom-[20%]" duration={5.7} delay={1.1} reducedMotion={reducedMotion} />
        <SkillBadge name="mongodb" className="left-[22%] bottom-[5%]" duration={4.5} delay={0.9} reducedMotion={reducedMotion} />
        <TextSkillBadge label="HTML" className="left-[7%] top-[42%]" duration={5.1} delay={0.35} reducedMotion={reducedMotion} />
        <TextSkillBadge label="CSS" className="right-[7%] top-[42%]" duration={4.6} delay={1.2} reducedMotion={reducedMotion} />
        <motion.div {...iconMotion(3.3, 0.5, reducedMotion)} className="absolute right-[22%] bottom-[5%] hidden text-[#FF8500] sm:block">
          <Github className="h-6 w-6" />
        </motion.div>
        <motion.div
          animate={reducedMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.85, 1, 0.85] }}
          transition={reducedMotion ? { duration: 0.2 } : floatTransition(3.2, 0.3)}
          className="absolute left-[22%] top-[7%] text-[#FF8500]"
        >
          <Sparkles className="h-5 w-5 sm:h-7 sm:w-7" />
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'contact') {
    return (
      <motion.div
        whileHover={reducedMotion ? undefined : { scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`relative flex aspect-square w-full items-center justify-center ${className}`}
        aria-label="Animated contact and communication illustration"
      >
        <div className="absolute inset-[9%] rounded-full bg-gradient-to-tr from-[#FF8500]/10 via-transparent to-[#61DAFB]/10 dark:from-[#111D32] dark:to-[#16233A]" />
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-2, 2, -2] }}
          transition={reducedMotion ? { duration: 0.2 } : floatTransition(5, 0.2)}
          className="absolute z-[1] flex h-[31%] w-[43%] items-center justify-center rounded-3xl border-4 border-white/80 bg-[#FF8500] text-white shadow-2xl shadow-[#0B162B]/20 dark:border-[#16233A]"
        >
          <Mail className="h-10 w-10 stroke-[1.4] sm:h-14 sm:w-14" />
          <span className="absolute inset-x-4 top-1/2 border-t border-white/40" />
        </motion.div>
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={reducedMotion ? { duration: 0.2 } : floatTransition(5.4, 0.35)}
          className="relative z-[2] flex h-[72%] w-[49%] items-end justify-center overflow-hidden rounded-[1.75rem] border-4 border-white/80 bg-[#F2F3F5] shadow-2xl shadow-[#0B162B]/20 dark:border-[#16233A] dark:bg-[#16233A]"
        >
          <img
            src={portraitSrc}
            alt="Aiza Humayun"
            className="h-full w-full object-cover object-top select-none"
            loading="lazy"
          />
        </motion.div>
        <ContactBadge icon={<AtSign />} className="left-[4%] top-[19%] text-[#FF8500]" duration={4.4} delay={0.1} reducedMotion={reducedMotion} />
        <ContactBadge icon={<MessageCircle />} className="right-[2%] top-[13%] text-[#61DAFB]" duration={5.5} delay={0.6} reducedMotion={reducedMotion} />
        <ContactBadge icon={<Send />} className="left-[2%] bottom-[17%] text-[#3178C6]" duration={4.8} delay={0.4} reducedMotion={reducedMotion} />
        <ContactBadge icon={<Bell />} className="right-[3%] bottom-[19%] hidden text-[#FF8500] sm:flex" duration={5.9} delay={1} reducedMotion={reducedMotion} />
        <motion.div {...iconMotion(3.2, 0.3, reducedMotion)} className="absolute left-[22%] top-[8%] text-[#FF8500]"><Sparkles className="h-5 w-5 sm:h-7 sm:w-7" /></motion.div>
        <motion.div {...iconMotion(4.1, 0.8, reducedMotion)} className="absolute bottom-[7%] right-[22%] hidden text-[#61DAFB] sm:block"><Code2 className="h-5 w-5" /></motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={variant === 'hero' ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative flex aspect-square w-full items-center justify-center ${className}`}
      aria-label="Aiza Humayun surrounded by developer-themed illustrations"
    >
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-[#FF8500]/10 via-transparent to-[#61DAFB]/10 dark:from-[#111D32] dark:via-[#16233A] dark:to-[#0B162B]" />
      <div className="absolute inset-[15%] rounded-full border border-[#FF8500]/15 dark:border-white/10" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
        transition={reducedMotion ? { duration: 0.2 } : floatTransition(5)}
        className="relative z-[2] flex h-[80%] w-[57%] items-end justify-center overflow-hidden rounded-[2rem] border-4 border-white/80 bg-[#F2F3F5] shadow-2xl shadow-[#0B162B]/20 dark:border-[#16233A] dark:bg-[#16233A]"
      >
        <img
          src={portraitSrc}
          alt="Aiza Humayun"
          className="h-full w-full object-cover object-top select-none"
          loading="eager"
        />
      </motion.div>

      <motion.div
        {...iconMotion(4.5, 0.2, reducedMotion)}
        className={`${badgeClass} left-[4%] top-[18%] h-12 w-12 sm:h-14 sm:w-14`}
      >
        <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>

      <motion.div
        {...iconMotion(5.5, 0.6, reducedMotion)}
        className={`${badgeClass} right-[3%] top-[12%] h-11 w-11 text-[#61DAFB] sm:h-14 sm:w-14`}
      >
        <Braces className="h-5 w-5 sm:h-7 sm:w-7" />
      </motion.div>

      <motion.div
        {...iconMotion(4.8, 0.4, reducedMotion)}
        className={`${badgeClass} bottom-[14%] left-[1%] h-12 w-12 text-[#3178C6] sm:h-14 sm:w-14`}
      >
        <Laptop className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.div>

      <motion.div
        {...iconMotion(5.2, 0.8, reducedMotion)}
        className={`${badgeClass} bottom-[17%] right-[2%] hidden h-11 w-11 text-[#61DAFB] sm:flex sm:h-14 sm:w-14`}
      >
        <PanelTop className="h-5 w-5 sm:h-7 sm:w-7" />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.85, 1, 0.85], rotate: [0, 12, 0] }}
        transition={reducedMotion ? { duration: 0.2 } : floatTransition(3.2, 0.3)}
        className="absolute left-[20%] top-[7%] text-[#FF8500]"
      >
        <Sparkles className="h-5 w-5 sm:h-7 sm:w-7" />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { opacity: [0.35, 0.9, 0.35], y: [0, -5, 0] }}
        transition={reducedMotion ? { duration: 0.2 } : floatTransition(3.8, 1)}
        className="absolute bottom-[9%] right-[22%] hidden text-[#FF8500] sm:block"
      >
        <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" />
      </motion.div>

      <motion.div
        {...iconMotion(5.8, 0.9, reducedMotion)}
        className="absolute right-[17%] bottom-[4%] hidden text-[#FF8500] sm:block"
      >
        <MousePointer2 className="h-5 w-5 sm:h-7 sm:w-7" />
      </motion.div>
    </motion.div>
  );
};

interface SkillBadgeProps {
  name: string;
  className: string;
  duration: number;
  delay: number;
  reducedMotion: boolean | null;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, className, duration, delay, reducedMotion }) => (
  <motion.div
    {...iconMotion(duration, delay, reducedMotion)}
    className={`${badgeClass} h-11 w-11 sm:h-14 sm:w-14 ${className}`}
  >
    <TechIcon name={name} size={26} className="h-6 w-6 sm:h-7 sm:w-7" />
  </motion.div>
);

interface TextSkillBadgeProps {
  label: string;
  className: string;
  duration: number;
  delay: number;
  reducedMotion: boolean | null;
}

const TextSkillBadge: React.FC<TextSkillBadgeProps> = ({ label, className, duration, delay, reducedMotion }) => (
  <motion.div
    {...iconMotion(duration, delay, reducedMotion)}
    className={`${badgeClass} h-8 w-12 font-mono text-[10px] font-bold text-[#3178C6] sm:h-10 sm:w-14 ${className}`}
  >
    {label}
  </motion.div>
);

interface ContactBadgeProps {
  icon: React.ReactElement<{ className?: string }>;
  className: string;
  duration: number;
  delay: number;
  reducedMotion: boolean | null;
}

const ContactBadge: React.FC<ContactBadgeProps> = ({ icon, className, duration, delay, reducedMotion }) => (
  <motion.div
    {...iconMotion(duration, delay, reducedMotion)}
    className={`${badgeClass} h-12 w-12 sm:h-14 sm:w-14 ${className}`}
  >
    {React.cloneElement(icon, { className: 'h-6 w-6 sm:h-7 sm:w-7' })}
  </motion.div>
);
