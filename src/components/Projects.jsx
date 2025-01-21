import React, { useEffect, useState } from "react";
import flickstoreImage from "../assets/flickstore.png";
import prankcalculatorImage from "../assets/prankcalculator.png";
import timewiseImage from "../assets/timewise.png";
import contactlistImage from "../assets/contactlist.png";
import projectParallaxImage from "../assets/projects-section.png";
import { Parallax } from "./Parallax";

import contactListDemo from "../assets/video-demo/contact-list-demo.mp4";
import flickStoreDemo from "../assets/video-demo/flick-store-demo.mp4";
export const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Flick Store",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: flickstoreImage, alt: "project_2" },
      alt: "project_1",
      backgroundColor: "red",
      projectDemo: { video: flickStoreDemo },
    },
    {
      id: 2,
      title: "Prank Calculator",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: prankcalculatorImage, alt: "project_2" },
      projectDemo: { video: contactListDemo },
    },
    {
      id: 3,
      title: "TimeWise",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: timewiseImage, alt: "project_3" },
      projectDemo: { video: contactListDemo },
    },
    {
      id: 4,
      title: "Contact List",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      img: { path: contactlistImage, alt: "project_4" },
      projectDemo: { video: contactListDemo },
    },
  ];

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [toggledProject, setToggledProject] = useState([]);
  const toggleOffcanvas = (id) => {
    const filteredProject = projectList.find((prj) => prj.id === id);
    // setToggledProject(filteredProject);
    // setShowOffcanvas(true);
    if (filteredProject.id === toggledProject?.id && showOffcanvas) {
      setToggledProject(null);
      setShowOffcanvas(false);
    } else {
      setToggledProject(filteredProject);
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    const offcanvasElement = document.getElementById(
      "offcanvasWithBothOptions"
    );
    const handleHide = () => {
      setToggledProject(null);
    };
    if (offcanvasElement) {
      offcanvasElement.addEventListener("hidden.bs.offcanvas", handleHide);
    }
    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleHide);
      }
    };
  }, []);
  return (
    <section id="projects">
      <Parallax backgroundImage={projectParallaxImage} title={"My Projects"} />

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
              <span className="title completed-project">
                Explore Completed Projects
              </span>
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
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <a href="">
                            <i className="fa-brands fa-chrome"></i>
                          </a>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description.slice(0, 100) + " ...."}</p>
                        <button
                          className="btn project-btn btn-tertiary"
                          onClick={() => toggleOffcanvas(project.id)}
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasWithBothOptions"
                          aria-controls="offcanvasWithBothOptions"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div
                  className={`offcanvas offcanvas-end w-50  text-bg-dark ${
                    showOffcanvas ? "show" : ""
                  }`}
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                  // onHide={() => setToggledProject(null)}
                >
                  <div className="offcanvas-header d-flex justify-content-center align-items-center gap-5">
                    <div>
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        {/* Backdrop with scrolling */}
                        {toggledProject?.title}
                      </h5>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={toggleOffcanvas}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                  <div className="offcanvas-body">
                    {toggledProject?.projectDemo && (
                      <>
                        <div className="video-demo d-flex justify-content-center align-items-center w-100">
                          <video
                            preload="metadata"
                            controls
                            poster={toggledProject?.img?.path}
                            style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                              display: "block",
                            }}
                          >
                            <source
                              src={toggledProject?.projectDemo?.video}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div
                          className="link d-flex flex-wrap gap-5 justify-content-center align-items-center"
                          style={{ color: "Violet", fontSize: "35px" }}
                        >
                          <a href="">
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <a href="">
                            <i className="fa-brands fa-chrome"></i>
                          </a>
                        </div>
                        <div className="project-details">
                          <h4 style={{ color: "SlateBlue" }}>
                            Technology Used <hr className="container" />
                          </h4>
                          <p>Html, Css, JavaScript, React</p>
                          <hr />
                          <h4 style={{ color: "SlateBlue" }}>
                            Description <hr className="container" />
                          </h4>
                          <p>{toggledProject.description}</p>
                          <hr />
                        </div>
                      </>
                    )}
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
                Explore Running Projects
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
