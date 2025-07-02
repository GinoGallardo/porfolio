import imgAbout from "../../assets/gino-auriculares.png";

function MainAbout() {
  return (
    <main className="text-white flex-wrap items-center justify-center text-lg leading-relaxed">
      <img
        src={imgAbout}
        alt="soy Gino gallardo desarrollador frontend"
        className="md:float-left w-[12em] h-[12em] m-auto lg:w-[30em] lg:h-[30em] md:shape-image md:mr-12 mb-1 drop-shadow-2xl drop-shadow-gray-900"
        style={{
          shapeOutside: "circle()",
          WebkitShapeOutside: "circle()",
          clipPath: "circle()",
        }}
      />
      <p className="text-xl md:text-2xl lg:text-3xl md:leading-9 -tracking-wide md:tracking-widest">
        Soy{" "}
        <span className="text-[#f97e3e] font-semibold italic">
          desarrollador frontend
        </span>
        , con experiencia en React y JavaScript, comprometido con la creación de
        experiencias digitales modernas, intuitivas y eficientes. Me especializo
        en desarrollar interfaces limpias, accesibles y centradas en el usuario,
        cuidando cada detalle para lograr una navegación fluida y coherente.
        Disfruto transformar ideas en soluciones concretas a través de código
        simple, bien estructurado y escalable. Me apasiona resolver problemas
        reales, colaborando en equipos interdisciplinarios y aplicando buenas
        prácticas que aseguren la calidad, el rendimiento y la mantenibilidad de
        los proyectos.
      </p>
    </main>
  );
}

export default MainAbout;
