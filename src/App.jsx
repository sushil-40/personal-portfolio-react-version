import { useEffect, useState } from "react";

import "./App.css";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  useEffect(() => {
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Form validation (basic example)
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        this.reset();
      });
    }

    //reveal on scroll

    const sections = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
