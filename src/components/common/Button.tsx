import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  id,
  download,
  target,
  rel,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-6 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-8 py-3 text-base font-semibold gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#FF8500] hover:bg-[#FF9D2E] text-white shadow-sm shadow-[#FF8500]/20 border border-transparent',
    secondary:
      'bg-transparent border border-[#FF8500] text-[#FF8500] hover:bg-[#FF8500]/10 dark:hover:bg-[#FF8500]/10',
    outline:
      'bg-transparent border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-[#FF8500] hover:text-[#FF8500] dark:hover:border-[#FF8500] dark:hover:text-[#FF8500]',
    ghost:
      'bg-transparent text-gray-700 dark:text-gray-300 hover:text-[#FF8500] dark:hover:text-[#FF8500]',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#FF8500] focus:ring-offset-2 dark:focus:ring-offset-[#0B162B] ${sizeClasses} ${variantClasses} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { y: -2, scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        onClick={onClick}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
};
