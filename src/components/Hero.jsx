import React, { useState } from "react";
import AnimatedIcons from "./AnimatedIcon";
import { Dice } from "./Dice";

export const Hero = () => {
  const [showButtonRoll, setShowButtonRoll] = useState("hidden-dice");

  const handleOnClickReveal = () => {
    setShowButtonRoll((prevClass) =>
      prevClass === "hidden-dice" ? "show-hidden-dice" : "hidden-dice"
    );
  };
  return (
    <section id="hero" className="d-flex">
      {/* 
      <AnimatedIcons /> */}
      {/* 
      <div className="roll-dice">
        <Dice />
      </div> */}
      <div className="container hero-container d-flex">
        <div className="left-content col-md-6 ">
          <h1 className="lead  animated fadeInRight font-effect-shadow-multiple">
            Sushil Dangoriya
          </h1>
          <hr className="m-1 hr-line" />
          <h2 className=" animated fadeInLeft font-effect-shadow-multiple">
            Web Developer & Designer
          </h2>
          <p className="lead animated fadeInRight">
            Transforming ideas into interactive digital experiences.
          </p>
          <a
            href="#projects"
            className="btn btn-primary btn-lg animated fadeInUp "
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
        <div className="right-content col-md-4 flex-column">
          <div className="cube m-5">
            <div className="face front"> </div>
            <div className="face back"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
          <div className="btn-magic  p-5">
            <p className={showButtonRoll}>
              <button>Roll Dice</button>
            </p>
            <p>
              <button onClick={handleOnClickReveal} className="btn btn-info">
                Toggle To Reveal
              </button>
            </p>
          </div>
        </div>
        {/* <div className="parallax"></div> */}
      </div>
    </section>
  );
};
