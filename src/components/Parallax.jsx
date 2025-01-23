import React, { useEffect } from "react";

export const Parallax = ({ backgroundImage, title }) => {
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
  useEffect(() => {
    const handleScroll = () => {
      const parallaxEffect = document.querySelector(".parallax");
      if (parallaxEffect) {
        const scrollPostion = window.scrollY;
        parallaxEffect.style.backgroundPositionY = `${scrollPostion * 0.2}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    //Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="parallax d-flex justify-content-center align-items-center "
      style={style}
    >
      <h2 className="title" style={styleContent}>
        {title}
      </h2>
    </div>
  );
};
