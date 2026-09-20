import React from 'react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Developer Contact Illustration & Minimal Direct Details */}
          <div
            className="flex flex-col items-center order-1"
            data-aos="fade-right"
          >
            <IllustratedPortrait
              variant="contact"
              className="mb-5 w-full max-w-80 sm:max-w-90 lg:max-w-105"
            />
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="w-full order-2"
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
