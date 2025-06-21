import Header from "../Header/Header";
import Home from "../../page/Home";
import ProjectsLanding from "../Projects/ProjectsLanding";
import Stack from "../Stack/Stack";
import About from "../AboutMe/About";

function Landing() {
  return (
    <>
      <Header />
      <Home />
      <ProjectsLanding />
      <Stack />
      <About />
    </>
  );
}

export default Landing;
