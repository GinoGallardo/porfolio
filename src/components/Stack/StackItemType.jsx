import stackItems from "../../data/stack.json";
import { Icon } from "@iconify/react";

function StackItemByType() {
  // Agrupar tecnologías por su propiedad 'type'
  const groupedByType = stackItems.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col gap-16">
      {Object.entries(groupedByType).map(([type, items]) => (
        <div key={type} className="flex border-b items-center py-4 justify-between gap-10">
          <h2 className="text-3xl font-bold text-[#f97e3e] tracking-widest font-[crimson] uppercase">
            {type}
          </h2>
          <div className="flex flex-wrap gap-16 lg:gap-10 justify-start">
            {items.map((tech, index) => (
              <div key={index} className="relative group flex flex-col items-center">
                <span
                  className="absolute -top-8 text-md font-[mada] lg:opacity-0 group-hover:opacity-100 transition duration-300 text-center"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Icon
                    icon={tech.icon}
                    width="100%"
                    height="100%"
                    className="transition duration-300 group-hover:scale-110 object-contain"
                    color={tech.color}
                    style={{
                      filter: `drop-shadow(0 0 0px transparent)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = `drop-shadow(0 0 12px ${tech.color})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = `drop-shadow(0 0 0px transparent)`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StackItemByType;
