import React from 'react';
import { motion } from 'motion/react';
import type { ProcessStepItem } from '../../types';

interface ProcessStepProps {
  step: ProcessStepItem;
  index: number;
  total: number;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, total }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 60}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      id={`process-step-${step.number}`}
      className="relative p-5 rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-black/20 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-all duration-300 flex flex-col justify-start"
    >
      {/* Number Badge & Connecting Indicator */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-extrabold tracking-wider px-2 py-0.5 rounded-md bg-[#FF8500]/10 text-[#FF8500] font-mono">
          {step.number}
        </span>
        {index < total - 1 && (
          <span className="hidden lg:inline text-xs text-gray-300 dark:text-white/20 font-bold">
            →
          </span>
        )}
      </div>

      {/* Step Title */}
      <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
        {step.title}
      </h3>

      {/* Step Description */}
      <p className="mt-1.5 text-xs text-gray-600 dark:text-[#A8B0C0] leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
};
