import React from "react";

const Parallax = ({ backgroundImage, title }) => {
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
      className="parallax d-flex justify-content-center align-items-center "
      style={style}
    >
      <h2 className="title" style={styleContent}>
        {title}
      </h2>
    </div>
  );
};

export default Parallax;
// import React, { useEffect, useRef, useState } from "react";

// const Parallax = ({ backgroundImage, title }) => {
//   const parallaxRef = useRef(null);
//   const [scrollEffect, setScrollEffect] = useState(0);

//   useEffect(() => {
//     //Creating IntersectionObserver instance
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Start listening to the scroll events when the section enters the view port

//           const handleScroll = () => {
//             const scrolled = window.scrollY;
//             setScrollEffect(scrolled * 0.2);
//           };

//           //Attach the scroll event listener
//           window.addEventListener("scroll", handleScroll);

//           // Cleanup when the section leaves the viewport
//           return () => {
//             window.removeEventListener("scroll", handleScroll);
//           };
//         }
//       },
//       { threshold: 0.3 } // Fire when 10% of the element is visible in the viewport
//     );
//     // Start observing the parallax section
//     if (parallaxRef.current) {
//       observer.observe(parallaxRef.current);
//     }
//     // Cleanup observer on component unmount
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   // Apply the parallax effect using the calculated scroll effect
//   const style = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: `center ${50 + scrollEffect * 0.1}%`, // Adjust this for more or less parallax intensity
//     height: "50vh", // You can adjust the height here
//     transition: "background-position 0.1s ease-out",
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
//     boxShadow: `6px 6px 15px rgba(35, 179, 204, 0.94), -6px -4px 15px rgba(45, 45, 150, 0.69)`,
//   };
//   return (
//     <div
//       ref={parallaxRef}
//       className="parallax d-flex justify-content-center align-items-center"
//       style={style}
//     >
//       <h2 className="title" style={styleContent}>
//         {title}
//       </h2>
//     </div>
//   );
// };

// export default Parallax;
