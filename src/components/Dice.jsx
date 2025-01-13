import React, { useState } from "react";

export const Dice = () => {
  //Defining the state to store the value of face of dice.
  const [face, setFace] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const handleOnClick = () => {
    if (isRolling) return; // prevent rolling while animation is running

    setIsRolling(true); //start rolling animation

    //set a new random face and stop animation after 2 seconds
    setTimeout(() => {
      const randomFace = Math.floor(Math.random() * 6) + 1;
      setFace(randomFace);
      setIsRolling(false);
    }, 2000);
  };

  //Dice faces (1 to 6)
  const renderDiceFace = () => {
    switch (face) {
      case 1:
        return <div className="dot center"></div>;
      case 2:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 3:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot center"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 4:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 5:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot center"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      case 6:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot middle-left"></div>
            <div className="dot middle-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      default:
        return null;
    }
  };
  //   console.log(face);
  return (
    <div>
      <div
        className={`dice ${isRolling ? "rolling" : ""}`}
        onClick={handleOnClick}
      >
        {renderDiceFace()}
      </div>
      <button
        className="btn btn-info mt-3 rounded"
        type="button"
        onClick={handleOnClick}
        disabled={isRolling} // Disable button while rolling
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
};
