import React, { useState } from "react";

import diceFace1 from "../assets/dice-face/face-i.png";
import diceFace2 from "../assets/dice-face/face-ii.png";
import diceFace3 from "../assets/dice-face/face-iii.png";
import diceFace4 from "../assets/dice-face/face-iv.png";
import diceFace5 from "../assets/dice-face/face-v.png";
import diceFace6 from "../assets/dice-face/face-vi.png";

export const Hero = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showButtonRoll, setShowButtonRoll] = useState("hidden-dice");
  const [resultFace, setResultFace] = useState();
  const [animationClass, setAnimationClass] = useState("");
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
    setIsBlurred(false);
  };

  const handleOnRollDiceClicked = () => {
    setTimeout(() => {
      setResultFace(Math.floor(Math.random() * 6) + 1);
    }, 1000);

    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("spin-animation");
    }, 50);

    setIsBlurred(true);
  };
  // Get the dice image based on the frontFace value

  const topFaceImage = resultFace
    ? bgFaceOfDiceStyle.find((face) => face.id === resultFace).path
    : diceFace5;

  // Scroll to the appropriate section based on the dice roll
  setTimeout(() => {
    switch (resultFace) {
      case 1:
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        document
          .getElementById("skills")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 6:
        document
          .getElementById("footer")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, 3000);

  return (
    <section id="hero" className="d-flex">
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
          <div className={`cube m-5 ${animationClass}`}>
            <div
              className={`face front ${
                isBlurred && resultFace !== 5 ? "blur" : ""
              }`}
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace1})`
                    : "",
                opacity: showButtonRoll === "show-hidden-dice" ? "0.8" : "1",
                // background: `${cubeStyle.color}`,
              }}
            ></div>
            <div
              className={`face back ${
                isBlurred && resultFace !== 5 ? "blur" : ""
              }`}
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace2})`
                    : "",
              }}
            ></div>
            <div
              className={`face left ${
                isBlurred && resultFace !== 5 ? "blur" : ""
              }`}
              style={{
                backgroundImage:
                  showButtonRoll === "show-hidden-dice"
                    ? `url(${diceFace3})`
                    : "",
              }}
            ></div>
            <div
              className={`face right ${
                isBlurred && resultFace !== 5 ? "blur" : ""
              }`}
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
              className={`face bottom ${
                isBlurred && resultFace !== 5 ? "blur" : ""
              }`}
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
                className="btn btn-dark roll-dice"
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
      </div>
    </section>
  );
};
