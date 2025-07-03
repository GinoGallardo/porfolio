import Header from "../Header/Header";
import Home from "../../page/Home";
import ProjectsLanding from "../Projects/ProjectsLanding";
import Stack from "../Stack/Stack";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <>
      <Header />
      <Home />
      <ProjectsLanding />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
