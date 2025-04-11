import Atropos from 'atropos/react'
import React from 'react'
import projects from '../../data/projects.json'
import iconMap from "../../utils/iconMap";
import Reffindr from '/image/reffindr.png'
import { FaReact, FaGithub, FaDharmachakra } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";


import 'atropos/css'

const Projects = () => {
  return (
    <>
      <h2 data-atropos-offset="8" className='text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-widest text-center text-white mt-20 lg:mb-20 lg:mt-40'>Proyectos</h2>
      <div className='flex flex-wrap max-w-7xl mx-auto p-6 md:p-10 gap-6 md:gap-4 justify-center py-20'>
        {projects.map((item, index) => (
          <div
            key={index}
            className='w-full sm:w-[90%] md:w-[48%] flex flex-col rounded-md shadow-amber-600 shadow-xs hover:shadow-md border-amber-600'
          >
            <Atropos
              className="w-full h-[300px] rounded-t-md overflow-hidden"
              activeOffset={40}
              shadow={true}
              highlight={true}
            >
              <div className='relative w-full h-full'>
              <img
                src={item.image}
                alt="Imagen frontal"
                data-atropos-offset="5"
                className="w-full h-full object-cover"
              />
              </div>
            </Atropos>

            <div className='w-full flex flex-col gap-4 py-2 px-4'>
              <div className='flex flex-col justify-between gap-y-4'>
                <h1 className="text-white text-3xl font-bold font-[crimson] tracking-widest">
                  {item.name}
                </h1>
                <p className='flex items-center justify-center text-white text-xl font-light font-[mada] tracking-widest'>
                  {item.description}
                </p>
              </div>
                <div className="flex gap-6 text-white">
                  {item.urlRepo && (
                    <a
                      href={item.urlRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='hover:text-[#f97e3e]'
                    >
                      {React.createElement(iconMap['FaGithub'], { size: 30 })}
                    </a>
                  )}
                  {item.url && item.iconUrl && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='hover:text-[#f97e3e]'
                    >
                      {React.createElement(iconMap[item.iconUrl], { size: 30 })}
                    </a>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-5">
                  {item.tecnologias.map((tech, i) => {
                    const IconComponent = iconMap[tech.icon];
                    return (
                      <span key={i} className="flex items-center gap-1 text-[#f97e3e]">
                        <IconComponent size={30} /> {tech.name}
                      </span>
                    );
                  })}

              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Projects