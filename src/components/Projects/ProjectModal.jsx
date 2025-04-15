import React from 'react';
import iconMap from '../../utils/iconMap';

const ProjectModal = ({ item, onClose }) => {
  const Icon = iconMap[item.iconUrl];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
      <div className="bg-[#1f1f1f] max-w-5xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6 flex flex-col gap-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#f97e3e] text-2xl hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-white text-3xl font-bold font-[crimson] tracking-widest">
          {item.name}
        </h2>

        <img src={item.image} alt={item.name} className="w-full rounded-md opacity-90" />

        <p className='text-white font-light font-[mada] tracking-wide text-base'>
          {item.description}
        </p>

        <div className="flex gap-6 text-white">
          {item.urlRepo && (
            <a href={item.urlRepo} target="_blank" rel="noopener noreferrer" className='hover:text-[#f97e3e]'>
              {React.createElement(iconMap['FaGithub'], { size: 24 })}
            </a>
          )}
          {item.url && Icon && (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className='hover:text-[#f97e3e]'>
              <Icon size={24} />
            </a>
          )}
        </div>

        <div className='flex flex-wrap gap-3 text-[#f97e3e]'>
          {item.tecnologias.map((tech, i) => {
            const IconComponent = iconMap[tech.icon];
            return (
              <span key={i} className="flex items-center gap-1">
                {IconComponent && <IconComponent size={20} />} {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
