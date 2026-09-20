import React from 'react';
import { motion } from 'motion/react';
import { Code, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';
import { Button } from '../common/Button';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      id={`project-card-${project.id}`}
      className="group rounded-2xl bg-white dark:bg-[#111D32] border border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/30 hover:border-[#FF8500]/40 dark:hover:border-[#FF8500]/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail / Screenshot Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#16233A] border-b border-gray-100 dark:border-white/5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <ProjectThumbnail type={project.image} title={project.title} />
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#FF8500] dark:group-hover:text-[#FF8500] transition-colors">
              {project.title}
            </h3>
            {project.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#FF8500]/10 text-[#FF8500] border border-[#FF8500]/20 whitespace-nowrap">
                {project.badge}
              </span>
            )}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-[#A8B0C0] line-clamp-3 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-[#16233A] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-5 sm:p-6 pt-0 mt-auto flex items-center gap-3">
        {project.githubUrl ? (
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Code className="w-3.5 h-3.5" />}
            className="flex-1 text-xs py-2"
          >
            GitHub
          </Button>
        ) : null}

        {project.demoUrl ? (
          <Button
            variant="primary"
            size="sm"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            className="flex-1 text-xs py-2"
          >
            Live Demo
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            href={project.githubUrl || 'https://github.com/aizahumayun'}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Code className="w-3.5 h-3.5" />}
            className="flex-1 text-xs py-2"
          >
            View Repo
          </Button>
        )}
      </div>
    </motion.div>
  );
};
