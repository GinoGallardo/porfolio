import learningPath from "../../data/study-progress.json";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function CardAutodidactProyect() {
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <div className="mx-auto w-full">
      {Object.entries(autodidact).map(([key, resource], i) => (
        <div key={i} className="mb-6">
          {resource.exercises?.length > 0 && (
            <div className="w-full overflow-x-auto px-1">
              <div className="flex gap-4 py-4 min-w-full">
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
                    <h3 className="md:text-lg font-semibold px-1">
                      {exercise.name}
                    </h3>
                    <p className="text-sm mb-4 px-1 tracking-tight">
                      {exercise.description ?? "Sin descripción"}
                    </p>
                    <div className="w-full flex justify-end p-2 gap-2 mt-auto">
                      <a
                        href={exercise.repositoryURL ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#f97e3e] hover:underline"
                      >
                        <FaGithub className="filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
                      </a>
                      <a
                        href={exercise.link ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#f97e3e] hover:underline"
                      >
                        <HiMiniArrowTopRightOnSquare className="filter hover:drop-shadow-[0_0_15px_#f97e3e] text-[2.5em] md:text-[3em] lg:text-[3.5em]" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardAutodidactProyect;
