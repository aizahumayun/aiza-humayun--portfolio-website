import React from 'react';
import { skillsData } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { SectionTitle } from '../common/SectionTitle';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I work with to create amazing web experiences"
        />

        {/* Responsive Grid: 4 on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Technical Competencies Pills */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              Additional Tools &amp; Practices
            </h4>
            <p className="text-xs text-gray-500 dark:text-[#A8B0C0] mt-0.5">
              API Development, Version Control, CMS &amp; Agile Engineering
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
            {[
              'REST APIs',
              'Git & GitHub',
              'HTML5 / CSS3',
              'Sass/SCSS',
              'Postman',
              'WordPress',
              'Elementor',
              'Python',
              'Agile/Scrum',
              'JWT Auth',
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-[#16233A] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
