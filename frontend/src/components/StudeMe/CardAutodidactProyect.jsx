import learningPath from "../../data/study-progress.json";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import {
  animate,
  motion as Motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";

export default function CardAutodidactProyect() {
  const autodidact = learningPath[1]?.selfTaught ?? {};
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {Object.entries(autodidact).map(([key, resource], i) => (
        <div key={i} className="mb-8">
          {resource.exercises?.length > 0 && (
            <>
              <Motion.div
                ref={ref}
                style={{ maskImage, WebkitMaskImage: maskImage }}
                className="overflow-x-auto px-1 custom-scroll scrollbar-hide"
              >
                <div className="flex gap-4 py-4 w-max">
                  {resource.exercises.map((exercise, index) => (
                    <article
                      key={`${key}-${index}`}
                      className="min-w-[250px] max-w-xs bg-[#f97e3e]/10 text-white p-1 stack-glow rounded-xl flex-shrink-0 flex flex-col"
                    >
                      <div className="w-full h-48 mb-1 overflow-hidden rounded-xl">
                        <img
                          src={exercise.image}
                          alt={exercise.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold px-1">
                        {exercise.name}
                      </h3>
                      <p className="text-[18px] md:text-xl md:leading-6 -tracking-wider">
                        {exercise.description ?? "Sin descripción"}
                      </p>
                      <div className="w-full flex justify-end p-2 gap-2 mt-auto">
                        <a
                          href={exercise.repositoryURL ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#f97e3e] hover:underline"
                        >
                          <FaGithub className="filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
                        </a>
                        <a
                          href={exercise.url ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#f97e3e] hover:underline"
                        >
                          <HiMiniArrowTopRightOnSquare className="filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </Motion.div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

const left = `0%`;
const leftInset = `10%`;
const rightInset = `90%`;
const right = `100%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    const prev = scrollXProgress.getPrevious();
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (prev === 0 || prev === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
