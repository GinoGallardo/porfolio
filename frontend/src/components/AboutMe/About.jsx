import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MainAbout from "./MainAbout";

function About() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/aboutMe");
  };

  return (
    <section id="aboutMe" className="max-w-7xl mx-auto text-xl lg:text-3xl my-7 py-6 lg:py-12 px-6 lg:not-visited:mt-20 flex flex-col gap-y-4 text-white">
      <h3 className="text-4xl text-center text-white font-bold lg:mb-8 lg:text-7xl">
        Sobre mi
      </h3>
      <MainAbout />
      <div className="w-full flex items-center justify-end">
        <Button className="max-w-60 " type="button" onClick={handleViewAll}>
          más sobre mí ...
        </Button>
      </div>
    </section>
  );
}

export default About;
