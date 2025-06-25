import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoArrowUndoOutline } from "react-icons/io5";
import SectionMe from "./SectionMe";
import SectionStack from "./SectionStack";
import SectionStude from "./SectionStude";
import SectionExperience from "./SectionExperience";
import { useEffect } from "react";

function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const previusHome = () => {
    navigate("/");
  };

  return (
    <section className="max-w-7xl items-center justify-center mx-auto px-2 text-white flex flex-col gap-6 lg:gap-16">
      <div className="group relative inline-block ">
        <Button
          className="fixed top-5 left-5 cursor-pointer z-50 bg-white/10 backdrop-blur-md text-[#f97e3e] shadow-md rounded-md transition-all duration-300"
          onClick={previusHome}
        >
          <IoArrowUndoOutline className="w-10 h-10 md:w-[3em] md:h-[3em]" />
        </Button>
        <span className="absolute w-30 -bottom-26 left-0 -translate-x-[77.4em] bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Volver al home
        </span>
      </div>
      <SectionMe />
      <SectionStack />
      <SectionStude />
      <SectionExperience />
    </section>
  );
}

export default AboutMe;
