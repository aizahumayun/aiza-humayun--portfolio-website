import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from './ContactForm';
import { IllustratedPortrait } from '../common/IllustratedPortrait';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your project, frontend opportunity, or engineering collaboration"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Developer Contact Illustration & Minimal Direct Details */}
          <div
            className="lg:col-span-5 flex flex-col items-center order-1"
            data-aos="fade-right"
          >
            <IllustratedPortrait
              variant="contact"
              className="mb-5 max-w-[240px] sm:max-w-[280px]"
            />

            {/* Simpler Contact Introduction */}
            
            {/* Direct Contact Methods: Email & Phone ONLY */}
            <div className="w-full max-w-sm space-y-2.5">
              <a
                href="mailto:aizahumayun03@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 hover:border-[#FF8500]/50 transition-colors group shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF8500]/10 text-[#FF8500] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-gray-400">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                    aizahumayun03@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:03238857936"
                className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 hover:border-[#FF8500]/50 transition-colors group shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF8500]/10 text-[#FF8500] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-gray-400">Phone</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    0323 8857936
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="lg:col-span-7 w-full order-2"
            data-aos="fade-left"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/50 dark:bg-[#111D32]/50 backdrop-blur-sm border border-gray-200/80 dark:border-white/10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
