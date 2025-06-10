import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/template/Landing";
import Projects from "../page/Projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
