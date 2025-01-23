import React, { useEffect, useRef } from "react";

export const Parallax = ({ backgroundImage, title }) => {
  const parallaxRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const offset = entry.boundingClientRect.top;
        parallaxRef.current.style.setProperty(
          "-parallax-offset",
          `${offset * 0.5}px`
        );
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    if (parallaxRef.current) {
      observer.observe(parallaxRef.current);
    }
    return () => {
      if (parallaxRef.current) {
        observer.unobserve(parallaxRef.current);
      }
    };
  }, []);
  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const styleContent = {
    background: "rgba(10,10,10,0.781)",
    color: "white",
    fontSize: "2rem",
    padding: "1.4rem 5rem",
    borderRadius: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5rem",
    backdropFilter: "blur(2px)",

    boxShadow: `6px 6px 15px rgba(35, 179, 204, 0.94),
    -6px -4px 15px rgba(45, 45, 150, 0.69)`,

    backdropfilter: "10px",
  };

  return (
    <div
      ref={parallaxRef}
      className="parallax d-flex justify-content-center align-items-center "
      style={style}
    >
      <h2 className="title" style={styleContent}>
        {title}
      </h2>
    </div>
  );
};
