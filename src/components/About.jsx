import React from "react";
import profileImage from "../assets/myPicture.png";
import { Dice } from "./Dice";
import { Parallax } from "./Parallax";
import parallaxAboutImg from "../assets/bg-2.webp";

export const About = () => {
  return (
    <section id="about">
      <Parallax backgroundImage={parallaxAboutImg} title={"About Me"} />
      {/* <div className="parallax  d-flex justify-content-center align-items-center">
        <h2 className="title">About Me</h2>
      </div> */}
      <div className="container">
        {/* <div className="about-content animated fadeInLeft"> */}
        <div className="test mt-5">
          {/* <h2 className="title">About Me</h2> */}

          {/* <h2 class="title">
          <span>About Me</span> */}
          {/* </h2> */}

          <div className="container flex about-content">
            <div className="my-bio reveal">
              <p>
                Hi! I'm <span>Sushil Dangoriya</span>, a passionate web
                developer with a strong focus on creating dynamic, responsive,
                and user-friendly websites. With experience in front-end and
                back-end development, I bring ideas to life with clean,
                efficient code. I’m always looking for new challenges and
                opportunities to collaborate on exciting projects. If you're
                looking for someone who can deliver visually appealing and
                functional web solutions, let's connect!
              </p>

              <p className="">Brisbane, Australia</p>
              <div>
                <a href="/resume.pdf" className="btn btn-secondary" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
