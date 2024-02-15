import images from "./images";
import React, { useState } from "react";

const Accordeon = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="accordeon">
      <div className="accordeon__item">
        <div className="accordeon__item-title">
          <h2>{props.title}</h2>
          <img
            onClick={() => setIsActive(!isActive)}
            className={
              isActive ? "accordeon__item-img animated" : "accordeon__item-img"
            }
            src={images.arrowUp}
            alt="icone flèche vers le bas"
          />
        </div>
        {isActive && (
          <div
            className={
              isActive
                ? "accordeon__content animatedSlide"
                : "accordeon__content"
            }
          >
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordeon;
