import React from "react";
import balancingBeadsImage from "../assets/running-project/balancing-beads.webp";

import tyreshopManagementImage from "../assets/running-project/tyreshop-management.webp";

export const RunningProject = () => {
  const projectList = [
    {
      id: 1,
      title: "Balancing Beads",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: balancingBeadsImage, alt: "project_2" },
      alt: "project_1",
      backgroundColor: "red",
      projectDemo: { video: "" },
    },
    {
      id: 2,
      title: "Tyreshop Management",
      description:
        "FlickStore is a React-based web app for exploring and saving movies. Users can search, view trending titles, watch trailers, and organize favorites into categories.",
      img: { path: tyreshopManagementImage, alt: "project_2" },
      projectDemo: { video: "" },
    },
  ];
  return (
    <div className="projects-grid">
      {projectList.map((project, i) => {
        return (
          <div key={i} className="project">
            <div
              className="running-project-image"
              style={{
                backgroundImage: `url(${project.img.path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px", // Adjust height as needed
                width: "100%", // Adjust width as needed
              }}
            ></div>
            {/* <img
              src={project.img.path}
              alt={project.alt}

              // height={50}
              // width={50}
            /> */}

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
            </div>
          </div>
        );
      })}
    </div>
  );
};
