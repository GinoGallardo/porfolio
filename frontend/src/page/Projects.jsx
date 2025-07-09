import { Button } from "@headlessui/react";
import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../data/projects.json";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const navigate = useNavigate();

  const previusHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 px-5 py-20 lg-px-0">
      <div className="flex w-full">
        <Button
          className="fixed top-5 left-5 text-[#f97e3e] p-2 cursor-pointer"
          onClick={previusHome}
        >
          <IoArrowUndoOutline className="w-10 h-10 md:w-[50px] md:h-[50px]" />
        </Button>
      </div>
      <h2 className="text-2xl text-white lg:text-4xl text-center font-bold font-[crimson]">
        Proyectos
      </h2>
      <div className="w-full flex flex-col m-auto items-center justify-center gap-6">
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
