import { Icon } from "@iconify/react";

export function StackItemMe({ tech }) {
  return (
    <div className="relative group flex flex-col items-center">
      <span
        className="absolute w-[100px] -top-8 text-sm lg:opacity-0 group-hover:opacity-100 transition duration-300 text-center font-[mada]"
        style={{ color: tech.color }}
      >
        {tech.name}
      </span>
      <div className="w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] flex items-center justify-center">
        <Icon
          icon={tech.icon}
          width="100%"
          height="100%"
          className="transition duration-300 group-hover:scale-110 object-contain"
          color={tech.color}
          style={{ filter: `drop-shadow(0 0 0px transparent)` }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = `drop-shadow(0 0 12px ${tech.color})`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = `drop-shadow(0 0 0px transparent)`)
          }
        />
      </div>
    </div>
  );
}
