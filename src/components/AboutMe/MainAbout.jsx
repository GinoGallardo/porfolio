import imgAbout from "../../assets/about-me.png";

function MainAbout() {
  return (
    <main className="text-white text-lg leading-relaxed">
      <img
        src={imgAbout}
        alt="soy Gino gallardo desarrollador frontend"
        className="md:float-left w-[15em] h-[15em] md:w-[22em] md:h-[22em] rounded-full md:shape-image mr-12 mb-1"
        style={{
          shapeOutside: "circle()",
          WebkitShapeOutside: "circle()",
          clipPath: "circle()",
        }}
      />
      <p className="text-xl lg:text-4xl lg:leading-17 tracking-widest">
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
