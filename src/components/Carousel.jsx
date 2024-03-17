import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataFetcher from "./Datafetcher";
import images from "./images";

const Carousel = () => {
  //allowing to extract the id from the URL
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

        const showArrows = accommodation.pictures.length > 1; // Condition to dsplay the arrow if there is more than one slide

        return (
          <div className="accomodation__carousel">
            <img
              src={accommodation.pictures[currentSlide]}
              className="accomodation__carousel-img"
              alt={accommodation.title}
            />
            {showArrows && (
              <>
                <img
                  src={images.rightArrow}
                  className="accomodation__carousel-rightArrow accomodation__carousel-arrow"
                  alt="flèche droite du carousel"
                  onClick={goToNextSlide}
                />
                <img
                  src={images.leftArrow}
                  className="accomodation__carousel-leftArrow accomodation__carousel-arrow"
                  alt="flèche gauche du carousel"
                  onClick={goToPreviousSlide}
                />
              </>
            )}
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
