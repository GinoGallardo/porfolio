import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/template/Landing";
import Projects from "../page/Projects";
import AboutMe from "../page/AboutMe/AboutMe";

const Router = () => {
  useEffect(() => {
    document.body.classList.add("custom-scroll");
    return () => {
      document.body.classList.remove("custom-scroll");
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
