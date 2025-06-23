import learningPath from "../../data/study-progress.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function SectionStude() {
  const coderhouse = learningPath[0]?.coderhouse ?? {};
  const autodidact = learningPath[1]?.selfTaught ?? {};

  return (
    <section className="w-full p-4">
      <h3 className="text-3xl lg:text-5xl text-[#f97e3e] font-semibold lg:mb-4">Formación</h3>
      <ul className="flex flex-col lg:px-6 md:px-16 lg:py-4 tracking-widest font-[crimson] uppercase gap-10">
        <li className="text-2xl flex flex-col gap-4 border-b py-4 border-white">
          <strong className="lg:mr-4 lg:pl-4 lg:text-3xl font-bold text-[#f97e3e]">
            2022 - 2023:
          </strong>
          <div className="flex flex-col  lg:px-4 gap-6 normal-case">
            {Object.entries(coderhouse).map(([key, course], i) => (
              <div key={i} className="w-full flex flex-col lg:flex-row gap-2">
                <div className="w-full lg:w-3/12">
                  <h3 className="text-2xl font-semibold">
                    {course.name ?? key}
                  </h3>
                  <span className="text-sm text-white/70">{course.date}</span>
                </div>
                <div className="w-full text-base lg:text-2xl lg:w-9/12">
                  <p>{course.description}</p>
                  <a
                    href={course.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f97e3e] underline mt-1 inline-flex items-center gap-1"
                  >
                    Ver certificado{" "}
                    <FaExternalLinkAlt className="inline-block w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            2024:
          </strong>
          <div className="flex flex-col gap-3 normal-case">
            {Object.entries(autodidact).map(([key, resource], i) => (
              <span key={i}>💻 {resource.name ?? key}</span>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SectionStude;
