import React from "react";
import bImage from "../assets/b.jpg";
import cImage from "../assets/skills2.gif";

export const Projects = () => {
  const projectList = [
    {
      title: "Flick Store",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: bImage, alt: "project_2" },
      alt: "project_1",
      backgroundColor: "red",
    },
    {
      title: "User List",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: cImage, alt: "project_2" },
    },
    {
      title: "TimeWise",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: bImage, alt: "project_3" },
    },
    {
      title: "Travel Vlog",
      description: "lorem ipsum dolor sit amet, consectetur adip",
      img: { path: cImage, alt: "project_4" },
    },
  ];
  console.log(projectList);

  return (
    <section id="projects">
      <h2 className="title">My Projects</h2>
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
    </section>
  );
};
