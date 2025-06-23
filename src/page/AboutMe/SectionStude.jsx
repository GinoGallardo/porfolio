import learningPath from "../../data/study-progress.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function SectionStude() {
  const coderhouse = learningPath?.coderhouse ?? {};
  const autodidact = learningPath?.autodidact ?? {};

  return (
    <section className="w-full p-4">
      <h3 className="text-5xl text-[#f97e3e] font-semibold mb-4">Formación</h3>
      <ul className="flex flex-col px-6 md:px-16 py-4 tracking-widest font-[crimson] uppercase gap-10">
        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            2023:
          </strong>
          <div className="flex flex-col gap-3 normal-case">
            {Object.values(coderhouse).map((course, i) => (
              <div key={i}>
                <h3>{course.name}</h3>
                {course.certificate && (
                  <a
                    href={course.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f97e3e] underline ml-2 inline-flex items-center gap-1"
                  >
                    Ver certificado <FaExternalLinkAlt className="inline-block w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </li>

        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            2024:
          </strong>
          <div className="flex flex-col gap-3 normal-case">
            {Object.values(autodidact).map((resource, i) => (
              <span key={i}>💻 {resource.name}</span>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SectionStude;
