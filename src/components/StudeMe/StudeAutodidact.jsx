import { FaExternalLinkAlt } from "react-icons/fa";
import learningPath from "../../data/study-progress.json";
import CardAutodidactProyect from "./CardAutodidactProyect";

const StudeAutodidact = () => {
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <li className="max-w-7xl flex flex-col gap-6">
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

                <p className="text-xl md:text-2xl lg:text-3xl md:leading-9 -tracking-wider">
                  {resource.description}
                </p>
                  <CardAutodidactProyect />
              </div>
            ))}
          </div>
        </li>
  )
}

export default StudeAutodidact