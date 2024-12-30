import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Categories from "../components/Categories";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Categories />
      <CallToAction />
    </>
  );
};

export default Home;
