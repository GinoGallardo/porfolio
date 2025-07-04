import { FaExternalLinkAlt } from "react-icons/fa";
import ImgAbout from "../../assets/gino-stup.png";

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
    <div className="w-full flex flex-col md:mt-15 lg:mt-21 lg:flex-row gap-10 items-center">
      <img
        src={ImgAbout}
        alt="Gino Gallardo desarrollador frontend"
        className="mx-auto opacity-90 drop-shadow-2xl drop-shadow-[#f97f3e57] "
      />
      <div className="flex flex-col gap-2.5">
        <h1 className="text-2xl md:text-5xl tracking-widest font-bold font-[crimson]">
          ¡Hola! Soy Gino.
        </h1>
        <h2 className="text-[18px] md:text-xl lg:text-3xl tracking-widest font-semibold font-[crimson]">
          Desarrollador Frontend
        </h2>
        <p className="text-xl md:text-2xl md:leading-9 -tracking-wide md:tracking-widest">
          Tengo {age} años y soy peruano, actualmente viviendo en Buenos Aires,
          Argentina. Soy un apasionado del fútbol y disfruto mucho correr como
          parte de mi estilo de vida. Como cristiano, mis valores y principios
          guían muchas de mis decisiones diarias.
        </p>
        <p className="text-xl md:text-2xl md:leading-9 -tracking-wide md:tracking-widest">
          Empecé en el mundo del desarrollo web en 2022 y desde entonces no he
          dejado de aprender y crear. Mi entusiasmo por la tecnología y el
          desarrollo me impulsa a seguir creciendo y aportando con cada proyecto
          en el que participo. Estoy comprometido con mejorar mis habilidades y
          aportar valor a través de mi trabajo.
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
