import React from "react";
import profileImage from "../assets/b.jpg";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content animated fadeInLeft">
          {/* <img
            src={profileImage}
            alt="Sushil Dangoriya"
            className="profile-img"
          /> */}

          <div>
            <h2 className="title">About Me</h2>
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
      </div>
    </section>
  );
};
