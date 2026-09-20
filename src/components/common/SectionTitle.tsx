import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
  dataAos?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = 'mb-10 sm:mb-14',
  titleClassName = '',
  subtitleClassName = '',
  id,
  dataAos = 'fade-up',
}) => {
  return (
    <div
      id={id}
      data-aos={dataAos}
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      <h2
        className={`text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-[#FF8500] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 max-w-xl text-sm sm:text-base text-gray-500 dark:text-[#A8B0C0] font-normal leading-relaxed ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
