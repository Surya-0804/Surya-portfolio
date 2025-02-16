import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import { projects } from '@/constants/projects';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
