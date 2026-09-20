import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="Hands-on software engineering experience and technical training"
        />

        {/* Clean 3-column layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
