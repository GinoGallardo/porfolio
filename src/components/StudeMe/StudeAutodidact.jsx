import { FaExternalLinkAlt } from "react-icons/fa";
import learningPath from "../../data/study-progress.json";

const StudeAutodidact = () => {
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <li className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="text-[#f97e3e] text-xl md:text-2xl font-semibold">
            2023 - 2025
          </span>
          <div className="flex flex-col gap-4 text-white">
            {Object.entries(autodidact).map(([key, resource], i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="text-base md:text-lg">
                  Autodidacta: Tutorial de YouTube de{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#f97e3e] underline"
                    href="https://www.youtube.com/watch?v=N8Xt5rP_DUo"
                  >
                    Sergio Code <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </h4>

                <span className="text-xl font-semibold">
                  💻 {resource.name ?? key}
                </span>

                <p className="leading-relaxed tracking-tight">
                  {resource.description}
                </p>

                {resource.exercises?.length > 0 && (
                  <ul className="flex flex-col gap-4 mt-4">
                    {resource.exercises.map((exercise, index) => (
                      <li key={index} className="border-b border-white/20 pb-4">
                        <strong className="text-[#f97e3e]">
                          {exercise.name}:
                        </strong>{" "}
                        {exercise.description}
                        <br />
                        <a
                          href={exercise.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#f97e3e] underline mt-1"
                        >
                          Ver proyecto <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </li>
  )
}

export default StudeAutodidact