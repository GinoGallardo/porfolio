import React from 'react';
import iconMap from '../../utils/iconMap';
import Button from '../Button/Button';

const ProjectCardPreview = ({ item, onClick }) => {
  return (
    <div className='w-full sm:w-[90%] md:w-[48%] flex flex-col rounded-md shadow-xs shadow-amber-600 hover:shadow-md overflow-hidden relative h-[250px]'>
      <img src={item.image} alt={item.name} className="w-full h-full opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between">
        <h2 className="text-white text-xl font-bold font-[crimson] tracking-widest md:text-2xl lg:text-4xl">
          {item.name}
        </h2>
        <div className='flex flex-wrap gap-y-2 flex-col lg:flex-row justify-between'>
          <div className="flex flex-wrap gap-2 lg:text-2xl lg:gap-4">
            {item.tecnologias.map((tech, i) => {
              const IconComponent = iconMap[tech.icon];
              return (
                <span key={i} className="flex items-center gap-1 text-[#f97e3e] text-sm lg:text-xl">
                  {IconComponent && <IconComponent size={20} />} {tech.name}
                </span>
              );
            })}
          </div>
          <Button className="text-sm text-white cursor-pointer" onClick={onClick}>
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPreview;
