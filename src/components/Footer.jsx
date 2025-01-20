import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container container d-flex flex-column ">
        <div className="footer-top d-flex">
          <div>
            <h3>Open to work</h3>
          </div>
          <div>
            <button className="btn-contact-me m-2">Contact me</button>
          </div>
        </div>
        <div className="footer-bottom reveal">
          <div className="row footer-bottom-content d-flex">
            <div className="col-md-4 copyright-info mt-4">
              &copy; Copy right all reserved 2024 || Sushil Dangoriya 🚀
            </div>
            <div className="col-sm">
              <h3 className="ms-2">Links</h3>
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

            <div className="col-md-4">
              <h3>Social Networks</h3>
              <ul className="list-social-network">
                <li>
                  <a href="https://github.com/sushil-40">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
