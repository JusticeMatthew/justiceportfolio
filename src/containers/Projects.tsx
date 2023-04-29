import type { FC } from 'react';
import { ProjectCard } from '@/components';
import projects from '@/data/projects';

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full items-center justify-center bg-zinc-950 text-white"
    >
      <div className="disabled pointer-events-none absolute z-0 flex h-full w-full flex-col items-center justify-center overflow-hidden leading-none">
        {[6, 9].map((i) => (
          <span
            key={i}
            className="text-center text-[19rem] font-bold uppercase text-zinc-800/20"
          >
            Projects
          </span>
        ))}
      </div>
      <div className="section z-10 my-6 flex h-full flex-wrap items-center justify-center gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            img={project.img}
            description={project.description}
            github={project.github}
            projectLink={project.projectLink}
            name={project.name}
            alt={project.alt}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
