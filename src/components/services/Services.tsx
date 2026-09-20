import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from './ServiceCard';
import { servicesData } from '../../data/services';

export const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services"
          subtitle="What I Can Build"
        />

        {/* Responsive Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Small CTA linking to existing Contact section */}
        <div className="mt-10 sm:mt-12 flex justify-center" data-aos="fade-up">
          <a
            href="#contact"
            onClick={scrollToContact}
            id="services-cta-contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-[#FF8500] dark:hover:text-[#FF8500] group transition-all py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10"
          >
            <span>Have a project in mind?</span>
            <span className="text-[#FF8500] flex items-center gap-1 font-bold group-hover:underline">
              Let's talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
