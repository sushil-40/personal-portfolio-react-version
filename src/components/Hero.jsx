import React, { useState } from "react";
import AnimatedIcons from "./AnimatedIcon";
import { Dice } from "./Dice";
import diceFace1 from "../assets/dice-face/face-i.png";
import diceFace2 from "../assets/dice-face/face-ii.png";
import diceFace3 from "../assets/dice-face/face-iii.png";
import diceFace4 from "../assets/dice-face/face-iv.png";
import diceFace5 from "../assets/dice-face/face-v.png";
import diceFace6 from "../assets/dice-face/face-vi.png";

export const Hero = () => {
  const [showButtonRoll, setShowButtonRoll] = useState("hidden-dice");
  const [frontFace, setFrontFace] = useState();
  const bgFaceOfDiceStyle = [
    { id: 1, path: diceFace1 },
    { id: 2, path: diceFace2 },
    { id: 3, path: diceFace3 },
    { id: 4, path: diceFace4 },
    { id: 5, path: diceFace5 },
    { id: 6, path: diceFace6 },
  ];

  const handleOnClickReveal = () => {
    setShowButtonRoll((prevClass) =>
      prevClass === "hidden-dice" ? "show-hidden-dice" : "hidden-dice"
    );
  };
  const handleOnRollDiceClicked = () => {
    setFrontFace(Math.floor(Math.random() * 6) + 1);
  };
  // Get the dice image based on the frontFace value
  // const frontFaceImage = frontFace ? bgFaceOfDiceStyle.find(face => face.id === frontFace).path : diceFace1;
  const topFaceImage = frontFace
    ? bgFaceOfDiceStyle.find((face) => face.id === frontFace).path
    : diceFace5;

  console.log(frontFace);
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
            <div
              className="face front"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace1})`
                    : "",
              }}
            ></div>
            <div
              className="face back"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace2})`
                    : "",
              }}
            ></div>
            <div
              className="face left"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace3})`
                    : "",
              }}
            ></div>
            <div
              className="face right"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace4})`
                    : "",
              }}
            ></div>
            <div
              className="face top"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${topFaceImage})`
                    : "",
              }}
            ></div>
            <div
              className="face bottom"
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace6})`
                    : "",
              }}
            ></div>
          </div>
          <div className="btn-magic  p-5">
            <p className={showButtonRoll}>
              <button
                onClick={handleOnRollDiceClicked}
                className="btn btn-dark"
              >
                Roll Dice
              </button>
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
