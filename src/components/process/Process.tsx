import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ProcessStep } from './ProcessStep';
import { processData } from '../../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How I Work"
          subtitle="A structured four-step workflow from concept to successful launch"
        />

        {/* Compact 4-step layout: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {processData.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              total={processData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
