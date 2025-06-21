import { Icon } from "@iconify/react";
import stackItems from "../../data/stack.json";

const Stack = () => {
  return (
    <section className="stack-glow bg-black opacity-90 max-w-7xl  mx-4 flex flex-col items-center justify-center rounded-2xl py-5 md:py-10 lg:py-20 lg:mt-30 lg:mx-auto">
      <h2 className="text-4xl text-white font-bold mb-8 lg:text-7xl">Stack</h2>
      <div className="p-6 max-w-5xl flex items-center justify-center flex-wrap gap-12 lg:gap-8">
        {stackItems.map((tech, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <span
              className="absolute -top-6 text-md font-[mada] lg:opacity-0 group-hover:opacity-100 transition duration-300 lg:text-2xl"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
            <Icon
              icon={tech.icon}
              width={80}
              className="transition duration-300 mt-1 group-hover:scale-110"
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
        ))}
      </div>
    </section>
  );
};

export default Stack;
