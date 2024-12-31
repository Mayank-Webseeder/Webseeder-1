import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Categories from "../components/Categories";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <Hero />
      <div className="my-8">
        <Projects />
      </div>
      <div className="my-8">
        <Categories />
      </div>
      <div className="my-8">
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
