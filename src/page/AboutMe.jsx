import { useNavigate } from "react-router-dom";
import MainAbout from "../components/AboutMe/MainAbout";
import Button from "../components/Button/Button";
import { IoArrowUndoOutline } from "react-icons/io5";

function AboutMe() {
  const navigate = useNavigate();

  const previusHome = () => {
    navigate("/");
  };
  return (
    <section className="max-w-7xl p-4 flex flex-col items-center justify-center">
      <div className="flex w-full">
        <Button
          className="fixed top-5 left-5 text-[#f97e3e] bg-transparent p-2 cursor-pointer"
          onClick={previusHome}
        >
          <IoArrowUndoOutline className="w-10 h-10 md:w-[5em] md:h-[5em]" />
        </Button>
      </div>
      <div className="mt-30">
        <MainAbout />
      </div>
    </section>
  );
}

export default AboutMe;
