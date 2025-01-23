import React from "react";
import balancingBeadsImage from "../assets/running-project/balancing-beads.webp";

import tyreshopManagementImage from "../assets/running-project/tyreshop-management.webp";

export const RunningProject = () => {
  const projectList = [
    {
      id: 1,
      title: "Balancing Beads",
      description:
        "Balancing Beads is a web application that helps users calculate the required quantity of beads needed to balance tires based on tire size and vehicle specifications.",
      img: { path: balancingBeadsImage, alt: "balancing-beads" },
      alt: "project_1",
      backgroundColor: "red",
      projectDemo: { video: "" },
    },
    {
      id: 2,
      title: "Tyreshop Management",
      description:
        "TyreShop Management is a comprehensive application designed to streamline operations, featuring stock management, a billing system, and advanced tools for efficient shop management and seamless user interaction.",
      img: { path: tyreshopManagementImage, alt: "tyreshop-management" },
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

            <div className="project-content">
              <div className="links">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
