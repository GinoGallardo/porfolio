import React from 'react';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <h2 data-atropos-offset="8" className='text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-widest text-center text-white mt-20 lg:mb-20 lg:mt-40'>
        Proyectos
      </h2>
      <div className='flex flex-wrap max-w-7xl mx-auto p-6 md:p-10 gap-6 md:gap-4 justify-center py-20'>
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Projects;
