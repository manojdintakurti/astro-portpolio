// ProjectCardWrapper.tsx
import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

interface ProjectCardWrapperProps {
  project: Project;
  index: number;
}

const ProjectCardWrapper: React.FC<ProjectCardWrapperProps> = ({ project, index }) => {
  return (
    <ThemeProvider>
      <ProjectCard project={project} index={index} />
    </ThemeProvider>
  );
};

export default ProjectCardWrapper;