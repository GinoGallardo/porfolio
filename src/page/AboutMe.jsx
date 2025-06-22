import { useNavigate } from "react-router-dom";
import ImgAbout from "../assets/about-me.png";
import Button from "../components/Button/Button";
import { IoArrowUndoOutline } from "react-icons/io5";
import StackItem from "../components/Stack/StackItem";
import StackItemByType from "../components/Stack/StackItemType";

function AboutMe() {
  const navigate = useNavigate();

  const previusHome = () => {
    navigate("/");
  };

  const birthYear = 1982;
  const birthMonth = 10; // noviembre (0 index)
  const birthDay = 22;

  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const hasHadBirthdayThisYear =
    today.getMonth() > birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() >= birthDay);
  if (!hasHadBirthdayThisYear) age--;

  return (
    <section className="max-w-7xl items-center justify-center mx-auto px-4 py-10 text-white flex flex-col gap-12">
      <Button
        className="fixed top-5 left-5 text-[#f97e3e] bg-transparent p-2"
        onClick={previusHome}
      >
        <IoArrowUndoOutline className="w-10 h-10 md:w-[5em] md:h-[5em]" />
      </Button>
      <div className="flex flex-col mt-30 lg:flex-row gap-10 items-center">
        <img
          src={ImgAbout}
          alt="Gino Gallardo desarrollador frontend"
          className="w-[20em] shadow-xl"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl tracking-widest font-bold font-[crimson]">
            ¡Hola! Soy Gino.
          </h1>
          <h2 className="text-2xl md:text-4xl tracking-widest font-semibold font-[crimson]">
            Desarrollador Frontend
          </h2>
          <p className="text-xl md:text-2xl mt-4 leading-relaxed tracking-widest">
            Tengo {age} años, vivo en Buenos Aires 🇦🇷, soy peruano. Me apasiona
            el fútbol, me gusta el runner y soy cristiano. Empecé en el desarrollo web en
            2022 y desde entonces no paré de aprender ni de crear.
          </p>
        </div>
      </div>

      <section className="w-full p-4">
        <h3 className="text-5xl text-[#f97e3e] font-semibold mb-4">
          Tecnologías que manejo
        </h3>
        <div className="flex items-center justify-center p-4 gap-4 text-lg">
          <StackItemByType />
        </div>
      </section>
      <section>
        <h3 className="text-3xl text-[#f97e3e] font-semibold mb-4">
          Formación
        </h3>
        <ul className="space-y-2 text-lg">
          <li>
            <strong>2022:</strong> Bootcamp de desarrollo web
          </li>
          <li>
            <strong>2023:</strong> Cursos especializados en React, Tailwind y
            TypeScript
          </li>
          <li>
            <strong>2024:</strong> Prácticas autodidactas y proyectos reales
          </li>
        </ul>
      </section>

      {/* Prácticas y proyectos */}
      <section>
        <h3 className="text-3xl text-[#f97e3e] font-semibold mb-4">
          Proyectos y experiencia práctica
        </h3>
        <ul className="space-y-2 text-lg">
          <li>
            <strong>ECOS (2024):</strong> Plataforma para fans de artistas
            emergentes. Participé como frontend developer.
          </li>
          <li>
            <strong>PC Zone:</strong> Ecommerce de venta de PCs. Proyecto
            personal desarrollado con React.
          </li>
          <li>
            <strong>Igrowker:</strong> Web para viajes de egresados. Trabajo
            colaborativo con UX y diseño en Figma.
          </li>
        </ul>
      </section>
    </section>
  );
}

export default AboutMe;
