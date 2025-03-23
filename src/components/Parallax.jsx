// import React from "react";

// const Parallax = ({ backgroundImage, title }) => {
//   const style = {
//     backgroundImage: `url(${backgroundImage})`,
//   };
//   const styleContent = {
//     background: "rgba(10,10,10,0.781)",
//     color: "white",
//     fontSize: "2rem",
//     padding: "1.4rem 5rem",
//     borderRadius: "10px",
//     textTransform: "uppercase",
//     letterSpacing: "0.5rem",
//     backdropFilter: "blur(2px)",

//     boxShadow: `6px 6px 15px rgba(35, 179, 204, 0.94),
//     -6px -4px 15px rgba(45, 45, 150, 0.69)`,

//     backdropfilter: "10px",
//   };
//   return (
//     <div
//       className="parallax d-flex justify-content-center align-items-center "
//       style={style}
//     >
//       <h2 className="title" style={styleContent}>
//         {title}
//       </h2>
//     </div>
//   );
// };

// export default Parallax;
import React, { useEffect, useRef, useState } from "react";

const Parallax = ({ backgroundImage, title }) => {
  const parallaxRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check the screen size on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const applyParallax = () => {
      if (!isMobile) {
        const handleScroll = () => {
          const scrollPos = window.scrollY;
          const speed = 0.5; // Adjust the speed for desired effect
          if (parallaxRef.current) {
            parallaxRef.current.style.backgroundPositionY = `${
              scrollPos * speed
            }px`;
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    };

    applyParallax();
  }, [isMobile]);

  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    height: "50vh",
    width: "100%",
    backgroundAttachment: isMobile ? "scroll" : "fixed", // Disable fixed on mobile
  };

  const styleContent = {
    background: "rgba(10,10,10,0.781)",
    color: "white",
    fontSize: "2rem",
    padding: "1.4rem 5rem",
    borderRadius: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5rem",
    backdropFilter: isMobile ? "none" : "blur(2px)", // Disable backdropFilter on mobile
    boxShadow: `6px 6px 15px rgba(35, 179, 204, 0.94),
    -6px -4px 15px rgba(45, 45, 150, 0.69)`,
  };

  return (
    <div
      ref={parallaxRef}
      className="parallax d-flex justify-content-center align-items-center"
      style={style}
    >
      <h2 className="title" style={styleContent}>
        {title}
      </h2>
    </div>
  );
};

export default Parallax;
