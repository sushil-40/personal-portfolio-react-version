import React from "react";
import AnimatedIcons from "./AnimatedIcon";
import { Dice } from "./Dice";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center flex-column text-center"
    >
      {/* 
      <AnimatedIcons /> */}
      {/* 
      <div className="roll-dice">
        <Dice />
      </div> */}
      <div className="container hero-container d-flex">
        <div className="left-content col-md-9">
          <h1 className="lead  animated fadeInRight font-effect-shadow-multiple">
            Sushil Dangoriya
          </h1>
          <h2 className=" animated fadeInLeft font-effect-shadow-multiple">
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
          <a
            href="#projects"
            className="btn btn-primary btn-lg animated fadeInUp"
          >
            Download Resume
          </a>
        </div>
        <div className="right-content col-md-3">
          <div className="my-image"></div>
          <div className="outer-circle circle1">1</div>
          <div className="outer-circle circle2">2</div>
          <div className="outer-circle circle3">3</div>
          <div className="outer-circle circle4">4</div>
        </div>
        {/* <div className="parallax"></div> */}
      </div>
    </section>
  );
};
