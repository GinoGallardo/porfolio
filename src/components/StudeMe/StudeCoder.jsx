import { FaExternalLinkAlt } from "react-icons/fa";
import learningPath from "../../data/study-progress.json";

function StudeCoder() {
  const autodidact = learningPath[0]?.coderhouse ?? {};

  return (
      <li className="max-w-7xl mx-auto flex flex-col gap-6 border-b border-white/20 pb-10 lg:my-10">
        <span className="text-[#f97e3e] text-xl md:text-2xl font-semibold">
          2022 - 2023
        </span>
        <div className="flex flex-col gap-8">
          {Object.entries(autodidact).map(([key, course], i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-4">
              <div className="md:w-1/4">
                <h4 className="text-lg font-semibold text-white">Coderhouse</h4>
                <p className="text-xl font-bold text-white">
                  {course.name ?? key}
                </p>
                <span className="text-sm text-white/60">{course.date}</span>
              </div>
              <div className="md:w-3/4 flex flex-col gap-2 text-white">
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
  );
}

export default StudeCoder;
