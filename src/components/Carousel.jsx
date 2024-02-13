import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataFetcher from "./Datafetcher";
import images from "./images";

const Carousel = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <DataFetcher url="/logements.json">
      {(data) => {
        const accommodation = data.find((item) => item.id === id);
        const goToPreviousSlide = () => {
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? accommodation.pictures.length - 1 : prevSlide - 1
          );
        };

        const goToNextSlide = () => {
          setCurrentSlide((prevSlide) =>
            prevSlide === accommodation.pictures.length - 1 ? 0 : prevSlide + 1
          );
        };

        return (
          <div className="accomodation__carousel">
            <img
              src={accommodation.pictures[currentSlide]}
              className="accomodation__carousel-img"
              alt={accommodation.title}
            />
            <img
              src={images.rightArrow}
              className="accomodation__carousel-rightArrow"
              alt="flèche droite du carousel"
              onClick={goToNextSlide}
            />
            <img
              src={images.leftArrow}
              className="accomodation__carousel-leftArrow"
              alt="flèche gauche du carousel"
              onClick={goToPreviousSlide}
            />
            <p className="accomodation__carousel-counter">
              {currentSlide + 1}/{accommodation.pictures.length}
            </p>
          </div>
        );
      }}
    </DataFetcher>
  );
};

export default Carousel;
