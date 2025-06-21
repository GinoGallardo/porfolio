import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ProjectsLanding = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/projects");
  };

  return (
    <section className="pb-12">
      <h2 className="text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-widest text-center text-white">
        Proyectos
      </h2>
      <div className="flex flex-wrap max-w-7xl mx-auto p-6 md:p-10 gap-4 md:gap-8 justify-center lg:mt-5">
        {projects.slice(0, 4).map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-col max-w-7xl m-auto justify-center items-center gap-3 lg:p-10">
        <h3 className="text-xl md:text-4xl lg:text-[3em] font-bold font-[mada] tracking-widest text-center px-5 text-white lg:mt-3">
          Para ver, todos los proyectos hacer click en el botón Ver todos.
        </h3>
        <Button className="text-white cursor-pointer" onClick={handleViewAll}>
          Ver todos
        </Button>
      </div>
    </section>
  );
};

export default ProjectsLanding;
