import imgAbout from "../../assets/gino-auriculares.png";

function MainAbout() {
  return (
    <main className="text-white flex-wrap items-center justify-center text-lg leading-relaxed">
      <img
        src={imgAbout}
        alt="soy Gino gallardo desarrollador frontend"
        className="md:float-left w-[12em] h-[12em] lg:w-[30em] lg:h-[30em] md:shape-image mr-12 mb-1 drop-shadow-2xl drop-shadow-gray-900"
        style={{
          shapeOutside: "circle()",
          WebkitShapeOutside: "circle()",
          clipPath: "circle()",
        }}
      />
      <p className="text-xl md:text-2xl lg:text-4xl md:leading-10 lg:leading-17 -tracking-wide md:tracking-widest">
        Soy{' '}
        <span className="text-[#f97e3e] font-semibold italic">
           desarrollador frontend
        </span>
        , con experiencia en React y Javascript.
        <br /> Me especializo en crear interfaces limpias, accesibles y
        funcionales.
        <br /> Me apasiona resolver problemas reales con código simple y bien
        estructurado.
      </p>
    </main>
  );
}

export default MainAbout;
