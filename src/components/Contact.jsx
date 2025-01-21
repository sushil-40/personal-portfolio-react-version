import React from "react";

import contactParallaxImage2 from "../assets/layout-background/contact-3.webp";

import { Parallax } from "./Parallax";
export const Contact = () => {
  const iconStyle = {
    color: "rgba(14, 14, 109, 0.877)",
  };
  return (
    <section id="contact">
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
