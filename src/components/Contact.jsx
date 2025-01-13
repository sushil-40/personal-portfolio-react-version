import React from "react";
import contactParallaxImage1 from "../assets/contact-2.png";
import contactParallaxImage2 from "../assets/contact-3.png";
import contactParallaxImage3 from "../assets/contact-4.png";
import { Parallax } from "./Parallax";
export const Contact = () => {
  const iconStyle = {
    color: "rgba(14, 14, 109, 0.877)",
  };
  return (
    <section id="contact" className="animated">
      {/* <h2 className="title">Contact Me</h2> */}
      <Parallax backgroundImage={contactParallaxImage2} title={"Contact Me"} />

      <div className="flex social">
        <a href="https://www.linkedin.com/in/sushil-dangoriya-b74a61b7">
          <i className="fa-brands fa-linkedin" style={iconStyle}></i>
        </a>
        <a href="https://github.com/sushil-40">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <p>
        I'd love to hear from you! Whether it's a project, job opportunity, or
        just a chat.
      </p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
