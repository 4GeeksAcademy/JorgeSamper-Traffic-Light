import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light ${color === "red" ? "active red" : "red"}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`light ${color === "yellow" ? "active yellow" : "yellow"}`}
        onClick={() => handleClick("yellow")}
      ></div>
      <div
        className={`light ${color === "green" ? "active green" : "green"}`}
        onClick={() => handleClick("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;
