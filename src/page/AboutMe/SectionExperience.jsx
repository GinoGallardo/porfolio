import { useState } from "react";
import clsx from "clsx";
import items from "../../data/projects.json";

function SectionExperience() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full p-4 md:my-25 flex flex-col gap-10">
      <h3 className="text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-wide text-white">
        Proyectos y experiencia práctica
      </h3>

      <div className="container pb-40">
        <div className="flex flex-col md:flex-row h-auto md:h-[60vh] w-full gap-5">
          {items.map((item, index) => {
            const isActive = index === activeId;
            const { description, title, type, image, name } = item;

            return (
              <div
                key={index}
                onClick={() => setActiveId(index)}
                className={clsx(
                  "relative flex flex-col  md:grid cursor-pointer md:grid-cols-1 rounded-2xl bg-[#f97e3e]/30 p-3 transition-all ease-out",
                  isActive
                    ? "flex-[10] duration-500 min-h-[400px]"
                    : "flex-1 duration-1000"
                )}
              >
                <div
                  className={clsx(
                    "relative overflow-hidden rounded-xl transition-all duration-300",
                    isActive ? "w-full " : "w-0 scale-90 opacity-0"
                  )}
                >
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="relative flex items-center justify-center">
                  <div
                    className={clsx(
                      "transition-all duration-500 text-white flex flex-col justify-center",
                      isActive
                        ? "w-full pl-5 relative "
                        : "relative  h-[40px] md:min-h-[400px]"
                    )}
                  >
                    {!isActive && (
                      <h3
                        className={clsx(
                          "absolute inset-0  flex flex-col justify-center p-2 md:rotate-180 text-xl md:text-3xl md:tracking-widest font-bold text-white transition-opacity duration-400",
                          "opacity-100",
                          " [writing-mode:horizontal-tb] md:[writing-mode:vertical-lr]"
                        )}
                      >
                        {name}
                      </h3>
                    )}

                    {!isActive && (
                      <span
                        className={clsx(
                          "absolute inset-0 top-8 md:left-12 flex flex-col justify-center p-2 md:rotate-180 text-sm md:text-base font-light text-white transition-opacity duration-400",
                          "opacity-100",
                          " [writing-mode:horizontal-tb] md:[writing-mode:vertical-lr]"
                        )}
                      >
                        {type}
                      </span>
                    )}

                    {isActive && (
                      <h3
                        className={clsx(
                          "pt-2 md:pt-0 md:mb-4 text-2xl md:text-4xl font-bold text-white transition-opacity delay-400 duration-600 tracking-widest",
                          "opacity-100"
                        )}
                      >
                        {name}
                      </h3>
                    )}

                    <p
                      className={clsx(
                        "transition-opacity",
                        isActive
                          ? "delay-[0.4s] duration-500 opacity-100 text-[18px] md:text-2xl md:leading-9 -tracking-wider"
                          : "opacity-0 duration-0 h-[64px]"
                      )}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionExperience;
