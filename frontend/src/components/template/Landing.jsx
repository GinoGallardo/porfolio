import Header from "../Header/Header";
import Home from "../../page/Home";
import ProjectsLanding from "../Projects/ProjectsLanding";
import Stack from "../Stack/Stack";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import RevealOnScroll from "../ui/RevealOnScroll ";
import { useState } from "react";
import ModalDowloadCV from "../ui/ModalDowloadCV";

function Landing() {
  const [dowload, setDowload] = useState(false);
  return (
    <>
      <Header />
      <RevealOnScroll>
        <Home onClick={() => setDowload(true)} />
      </RevealOnScroll>
      {dowload && <ModalDowloadCV onClose={() => setDowload(false)} />}
      <RevealOnScroll direction="left" delay={0.1}>
        <ProjectsLanding />
      </RevealOnScroll>
      <RevealOnScroll direction="left" delay={0.2}>
        <Stack />
      </RevealOnScroll>
      <RevealOnScroll direction="left" delay={0.3}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll direction="left" delay={0.4}>
        <Contact />
      </RevealOnScroll>
      <Footer />
    </>
  );
}

export default Landing;
