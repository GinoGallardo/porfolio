function SectionExperience() {
  return (
    <section className="w-full p-4">
      <h3 className="text-3xl md:text-4xl lg:text-[1.8em] xl:text-[4rem] font-bold font-[crimson] tracking-wide text-white">
        Proyectos y experiencia práctica
      </h3>
      <ul className="flex flex-col px-16 py-4 tracking-widest font-[crimson] uppercase gap-10">
        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            ECOS (2024):
          </strong>{" "}
          Plataforma para fans de artistas emergentes. Participé como frontend
          developer.
        </li>
        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            PC Zone:
          </strong>{" "}
          Ecommerce de venta de PCs. Proyecto personal desarrollado con React.
        </li>
        <li className="text-2xl border-b py-4 border-white">
          <strong className="mr-4 pl-4 text-3xl font-bold text-[#f97e3e]">
            Igrowker:
          </strong>{" "}
          Web para viajes de egresados. Trabajo colaborativo con UX y diseño en
          Figma.
        </li>
      </ul>
    </section>
  );
}

export default SectionExperience;
