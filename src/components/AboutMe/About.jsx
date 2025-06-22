import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MainAbout from "./MainAbout";

function About() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/aboutMe");
  };

  return (
    <section className="max-w-7xl mx-auto text-xl md:text-2xl lg:text-3xl my-7 py-12 px-6 flex flex-col gap-y-4 text-white">
      <h3 className="text-2xl lg:text-5xl">Sobre mi : </h3>
      <MainAbout />
      <Button type="button" onClick={handleViewAll}>más sobre mí ...</Button>
    </section>
  );
}

export default About;
