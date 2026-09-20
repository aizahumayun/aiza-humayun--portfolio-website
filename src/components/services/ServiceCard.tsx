import React from 'react';
import { motion } from 'motion/react';
import { Globe, Layout, Code2, Gauge, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const renderIcon = () => {
    switch (service.iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#FF8500]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#FF8500]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#FF8500]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF8500]" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-[#FF8500]" />;
      default:
        return <Globe className="w-6 h-6 text-[#FF8500]" />;
    }
  };

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      id={`service-card-${service.id}`}
      className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-black/20 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Icon Container with soft badge */}
        <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-[#16233A] border border-orange-200/60 dark:border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF8500]/10 transition-all duration-300">
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#FF8500] dark:group-hover:text-[#FF8500] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-[#A8B0C0] leading-relaxed">
          {service.description}
        </p>

        {/* Focus Highlights */}
        {service.focusPoints && service.focusPoints.length > 0 && (
          <ul className="mt-4 pt-3.5 border-t border-gray-100 dark:border-white/5 space-y-1.5">
            {service.focusPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-gray-600 dark:text-[#A8B0C0]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Decorative subtle bottom accent on hover */}
      <div className="mt-6 pt-2">
        <div className="w-8 h-1 rounded-full bg-transparent group-hover:bg-[#FF8500] transition-colors duration-300" />
      </div>
    </motion.div>
  );
};
