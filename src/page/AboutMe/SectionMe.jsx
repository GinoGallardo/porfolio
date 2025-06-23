import { FaExternalLinkAlt } from "react-icons/fa";
import ImgAbout from "../../assets/about-me.png";

function SectionMe() {
  const birthYear = 1982;
  const birthMonth = 11;
  const birthDay = 22;

  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const hasHadBirthdayThisYear =
    today.getMonth() > birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() >= birthDay);
  if (!hasHadBirthdayThisYear) age--;

  return (
    <div className="w-full flex flex-col mt-2 lg:mt-30 lg:flex-row gap-10 items-center">
      <img
        src={ImgAbout}
        alt="Gino Gallardo desarrollador frontend"
        className="lg:w-[20em] shadow-xl"
      />
      <div className="flex flex-col gap-2 lg:gap-4">
        <h1 className="text-3xl md:text-6xl tracking-widest font-bold font-[crimson]">
          ¡Hola! Soy Gino.
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-4xl tracking-widest font-semibold font-[crimson]">
          Desarrollador Frontend
        </h2>
        <p className="text-xl md:text-2xl mt-4 leading-relaxed tracking-widest">
          Tengo {age} años, vivo en Buenos Aires 🇦🇷, soy peruano. Me apasiona el
          fútbol, me gusta el runner y soy cristiano. Empecé en el desarrollo
          web en 2022 y desde entonces no paré de aprender ni de crear.
        </p>
        <a
          href="https://pub.coderhouse.com/legacy-certificates/649a8afd5ae64100026bf411?lang=es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f97e3e] w-full underline mt-1 inline-flex items-center  gap-1"
        >
          Ver certificado <FaExternalLinkAlt className="inline-block w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default SectionMe;
