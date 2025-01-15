import React from "react";
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
  console.log(projectList);

  return (
    <section id="projects">
      <Parallax backgroundImage={projectParallaxImage} title={"My Projects"} />
      {/* <h2 className="title">My Projects</h2> */}
      {/* test of Accordian className Bootstrap  */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Completed Projet
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
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="#" className="btn-tertiary">
                          View Project
                        </a>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="project">
          <img src="project2.jpg" alt="Project 2" />
          <div className="project-content">
            <h3>Project Two</h3>
            <p>An e-commerce platform for buying and selling vintage items.</p>
            <a href="#" className="btn-tertiary">
              View Project
            </a>
          </div>
        </div>
        <div className="project">
          <img src="project1.jpg" alt="Project 1" />
          <div className="project-content">
            <h3>Project One</h3>
            <p>A modern and sleek movie search application built with React.</p>
            <a href="#" className="btn-tertiary">
              View Project
            </a>
          </div>
        </div>
        <div className="project">
          <img src="project2.jpg" alt="Project 2" />
          <div className="project-content">
            <h3>Project Two</h3>
            <p>An e-commerce platform for buying and selling vintage items.</p>
            <a href="#" className="btn-tertiary">
              View Project
            </a>
          </div>
        </div> */}
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
              Running Project
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
