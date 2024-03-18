import images from "./images";
import React, { useState } from "react";

const Accordeon = (props) => {
  const [isActive, setIsActive] = useState(false); //allow to keep the content hiden until the clicking event happen
  return (
    <div className="accordeon__item ">
      //Event listener that activate the animation to reveal the data that is
      fetch
      <div
        className="accordeon__item-title"
        onClick={() => setIsActive(!isActive)}
      >
        <h2>{props.title}</h2>
        <img
          className={isActive ? "animated" : "animated-reverse"}
          src={images.arrowDown}
          alt="icone flèche vers le bas"
        />
      </div>
      {isActive && (
        <p className={isActive ? "accordeon__content animatedSlideDown " : ""}>
          {props.content}
        </p>
      )}
    </div>
  );
};

export default Accordeon;
