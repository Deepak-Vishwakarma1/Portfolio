import React from "react";
import Hero from "./hero/Hero";
import Headcontent from "../headcontent/Headcontent";
import About from "../about/About";
import Skill from "../techskill/Skill";
import Contact from "../contact/Contact";
import Certificates from "../certification/certificates";
import Project from "../project/Project";
import Design from "../design/Design";

const Home = () => {
  return (
    <>
      <Hero />
      <Headcontent />
      <About />
      <Skill />
      <Project />
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;
