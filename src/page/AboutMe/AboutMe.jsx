import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoArrowUndoOutline } from "react-icons/io5";
import SectionMe from "./SectionMe";
import SectionStack from "./SectionStack";
import SectionStude from "./SectionStude";
import SectionExperience from "./SectionExperience";

function AboutMe() {
  const navigate = useNavigate();

  const previusHome = () => {
    navigate("/");
  };

  return (
    <section className="max-w-7xl items-center justify-center mx-auto px-4 py-10 text-white flex flex-col gap-12">
      <Button
        className="fixed top-5 left-5 text-[#f97e3e] bg-transparent p-2"
        onClick={previusHome}
      >
        <IoArrowUndoOutline className="w-10 h-10 md:w-[5em] md:h-[5em]" />
      </Button>
      <SectionMe />
      <SectionStack />
      <SectionStude />
      <SectionExperience />
    </section>
  );
}

export default AboutMe;
