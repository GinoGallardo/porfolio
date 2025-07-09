import StudeAutodidact from "../../components/StudeMe/StudeAutodidact";
import StudeCoder from "../../components/StudeMe/StudeCoder";

function SectionStude() {
  

  return (
    <section className="w-full px-2 py-8">
      <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold font-[crimson] tracking-wide text-white mb-6 text-center md:text-left">
        Formación
      </h3>

      <ul className="flex flex-col gap-10 text-base md:text-lg">
        <StudeCoder />
        <StudeAutodidact />
      </ul>
    </section>
  );
}

export default SectionStude;
