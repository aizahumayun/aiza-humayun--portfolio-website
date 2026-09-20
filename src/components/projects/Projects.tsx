import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my recent work"
        />

        {/* Responsive Grid: 3 columns Desktop, 2 Tablet, 1 Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 sm:mt-16 flex justify-center" data-aos="fade-up">
          <Button
            variant="primary"
            size="md"
            href="https://github.com/aizahumayun"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            id="projects-view-all-btn"
            className="px-8 py-3"
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
