import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      id={`experience-card-${experience.id}`}
      className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-black/20 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-all duration-300 relative flex flex-col justify-between"
    >
      <div>
        {/* Header: Role, Period & Current badge */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF8500]/10 text-[#FF8500] mb-2">
              <Calendar className="w-3 h-3" />
              {experience.period}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              {experience.role}
            </h3>
            {experience.company && (
              <p className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-[#A8B0C0] mt-1">
                <Briefcase className="w-3.5 h-3.5 text-[#FF8500]" />
                {experience.company}
              </p>
            )}
          </div>

          {/* {experience.isCurrent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Current
            </span>
          )} */}
          {experience.isRecent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Recent
            </span>
          )}
        </div>

        {/* Responsibilities list */}
        <ul className="mt-4 space-y-2.5">
          {experience.responsibilities.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-[#A8B0C0] leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FF8500] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies pills if present */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-[#16233A] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
