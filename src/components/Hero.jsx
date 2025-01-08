import React from "react";
import AnimatedIcons from "./AnimatedIcon";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center"
    >
      <AnimatedIcons />
      <div className="container position-relative">
        <h2 className="display-4 animated fadeInLeft font-effect-shadow-multiple">
          Web Developer & Designer
        </h2>
        <p className="lead animated fadeInRight">
          Transforming ideas into interactive digital experiences.
        </p>
        <a
          href="#projects"
          className="btn btn-primary btn-lg animated fadeInUp"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};
