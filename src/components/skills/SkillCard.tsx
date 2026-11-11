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
      data-aos-delay={index * 35}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      id={`skill-card-${skill.id}`}
      className="min-w-0 p-3.5 rounded-xl bg-gray-50 dark:bg-[#16233A] border border-gray-200/70 dark:border-white/5 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 shrink-0 rounded-lg bg-white dark:bg-[#111D32] flex items-center justify-center p-2 shadow-sm">
          <TechIcon name={skill.icon} size={22} />
        </div>
        <span className="min-w-0 flex-1 text-sm font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="shrink-0 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-md bg-white dark:bg-[#111D32] text-[#C76300] dark:text-[#FF8500] border border-gray-200/60 dark:border-white/5">
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};
