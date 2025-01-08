import React from "react";

export const Footer = () => {
  return (
    <footer className="flex-center">
      <div className="top flex">
        <div className="links reveal">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials reveal">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/sushil-40">Github</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        &copy; Copy right all reserved 2024 || Sushil Dangoriya 🚀
      </div>
      {/* <ul className="social-links">
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <p>&copy; 2025 MyPortfolio. All rights reserved.</p> */}
    </footer>
  );
};
