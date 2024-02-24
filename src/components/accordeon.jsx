import images from "./images";
import React, { useState } from "react";

const Accordeon = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
      <div className="accordeon__item ">
        <div className="accordeon__item-title" onClick={() => setIsActive(!isActive)}>
          <h2>{props.title}</h2>
          <img
            className={isActive ? "animated" : "animated-reverse"}
            src={images.arrowDown}
            alt="icone flèche vers le bas"
          />
        </div>
        {isActive && (
          <p
            className={
              isActive
                ? "accordeon__content animatedSlideDown "
                : ""
            }
          >
            {props.content}
          </p>
        )}
      </div>
  );
};

export default Accordeon;
