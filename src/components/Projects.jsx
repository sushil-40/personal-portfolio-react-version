import React, { useState } from "react";
import flickstoreImage from "../assets/flickstore.png";
import prankcalculatorImage from "../assets/prankcalculator.png";
import timewiseImage from "../assets/timewise.png";
import contactlistImage from "../assets/contactlist.png";
import projectParallaxImage from "../assets/projects-section.png";
import { Parallax } from "./Parallax";

export const Projects = () => {
  const projectList = [
    {
      title: "Flick Store",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: flickstoreImage, alt: "project_2" },
      alt: "project_1",
      backgroundColor: "red",
    },
    {
      title: "Prank Calculator",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: prankcalculatorImage, alt: "project_2" },
    },
    {
      title: "TimeWise",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: timewiseImage, alt: "project_3" },
    },
    {
      title: "Contact List",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      img: { path: contactlistImage, alt: "project_4" },
    },
  ];

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <section id="projects">
      <Parallax backgroundImage={projectParallaxImage} title={"My Projects"} />
      {/* <h2 className="title">My Projects</h2> */}
      {/* test of Accordian className Bootstrap  */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="title completed-project">Completed Project</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="projects-grid">
                {projectList.map((project, i) => {
                  return (
                    <div key={i} className="project">
                      <img
                        src={project.img.path}
                        alt={project.alt}
                        // height={50}
                        // width={50}
                      />
                      <div className="project-content">
                        <div className="links">
                          <a href="">
                            <i className="fa-brands fa-github"></i>{" "}
                          </a>
                          <a href="">
                            <i className="fa-brands fa-chrome"></i>
                          </a>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description.slice(0, 100) + " ...."}</p>
                        <button
                          className="btn project-btn btn-tertiary"
                          onClick={toggleOffcanvas}
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasWithBothOptions"
                          aria-controls="offcanvasWithBothOptions"
                        >
                          View Project
                        </button>
                        {/* <div className="project-btn">
                          <a href="#" className="btn-tertiary">
                            View Project
                            
                          </a>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
                {/* test  */}

                <div
                  className={`offcanvas offcanvas-start w-50  text-bg-dark ${
                    showOffcanvas ? "show" : ""
                  }`}
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasWithBothOptionsLabel"
                    >
                      Backdrop with scrolling
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleOffcanvas}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <p>
                      Try scrolling the rest of the page to see this option in
                      action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="title running-project" style={{ width: "80%" }}>
                Running Projects
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
