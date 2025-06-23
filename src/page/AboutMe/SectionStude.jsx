import learningPath from "../../data/study-progress.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function SectionStude() {
  const coderhouse = learningPath[0]?.coderhouse ?? {};
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <section className="w-full px-4 py-8">
      <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold font-[crimson] tracking-wide text-white mb-6 text-center md:text-left">
        Formación
      </h3>

      <ul className="flex flex-col gap-10 text-base md:text-lg">
        <li className="max-w-7xl mx-auto flex flex-col gap-6 border-b border-white/20 pb-10">
          <span className="text-[#f97e3e] text-xl md:text-2xl font-semibold">
            2022 - 2023
          </span>
          <div className="flex flex-col gap-8">
            {Object.entries(coderhouse).map(([key, course], i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/4">
                  <h4 className="text-lg font-semibold text-white">
                    Coderhouse
                  </h4>
                  <p className="text-xl font-bold text-white">
                    {course.name ?? key}
                  </p>
                  <span className="text-sm text-white/60">{course.date}</span>
                </div>
                <div className="lg:w-3/4 flex flex-col gap-2 text-white">
                  <p className="leading-relaxed tracking-tight">
                    {course.description}
                  </p>
                  <a
                    href={course.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#f97e3e] underline"
                  >
                    Ver certificado <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </li>

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
      </ul>
    </section>
  );
}

export default SectionStude;
