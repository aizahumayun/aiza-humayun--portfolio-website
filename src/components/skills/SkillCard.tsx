import React from 'react';
import { motion } from 'motion/react';
import type { Skill } from '../../types';
import { TechIcon } from '../common/TechIcon';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 50}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      id={`skill-card-${skill.id}`}
      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-black/20 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top row: Icon + Skill Name */}
      <div className="flex items-center gap-3.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#16233A] flex items-center justify-center p-2 shadow-inner">
          <TechIcon name={skill.name} size={22} />
        </div>
        <span className="text-base font-bold text-gray-900 dark:text-white capitalize">
          {skill.name}
        </span>
      </div>

      {/* Middle row: Category + Tag */}
      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 text-gray-500 dark:text-[#A8B0C0] font-medium">
        <span>{skill.category || 'Technology'}</span>
        <span className="font-semibold text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#16233A] text-[#FF8500] border border-gray-200/60 dark:border-white/5">
          {skill.level || 'Core Stack'}
        </span>
      </div>

      {/* Bottom row: Accent Indicator Bar */}
      <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-[#16233A] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency || 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
          style={{ backgroundColor: skill.trackColor || '#FF8500' }}
          className="h-full rounded-full"
        />
      </div>
    </motion.div>
  );
};
