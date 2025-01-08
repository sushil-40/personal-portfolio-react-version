import React, { useEffect, useRef } from "react";

export const AnimatedIcons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const icons = container.querySelectorAll(".icon");

    icons.forEach((icon, index) => {
      const duration = Math.random() * 10 + 20; // Random duration (10-20 seconds)

      // Start positions within the Hero section
      const startX = Math.random() * -60; // Random start position within the left half of the section
      const startY = Math.random() * 10; // Random start position within the height of the Hero section

      // End positions (moving to the right half of the Hero section)
      const endX = Math.random() * 50 + 50; // Random end position to the right (50% to 100% of width)
      const endY = Math.random() * 100; // Random end position within the height of the Hero section

      // Set animation for each icon
      icon.style.animation = `flow-${index} ${duration}s ease-in-out infinite`;

      // Define keyframes for movement
      const keyframes = `
        @keyframes flow-${index} {
          0% {
            transform: translate(${startX}vw, ${startY}vh);
          }
          50% {
            transform: translate(${(startX + endX) / 2}vw, ${
        (startY + endY) / 2
      }vh); /* Midpoint of the animation */
          }
          100% {
            transform: translate(${endX}vw, ${endY}vh); /* Final position */
          }
        }
      `;

      // Dynamically create the keyframes
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="icon-container"
      style={{
        position: "absolute", // Positioning inside the Hero section
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Prevent icons from blocking interactions
        zIndex: -1, // Ensure icons are behind other content
      }}
    >
      <i className="fab fa-github icon"></i>
      <i className="fab fa-facebook icon"></i>
      <i className="fas fa-file icon"></i>
      {/* Add more icons as needed */}
    </div>
  );
};

export default AnimatedIcons;
