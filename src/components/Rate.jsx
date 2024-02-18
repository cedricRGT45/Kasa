import React from "react";
import images from "./images";
import DataFetcher from "./Datafetcher";
import { useParams } from "react-router-dom";

function Rate(props) {
  const { id } = useParams();
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <DataFetcher url="/logements.json">
      {(data) => {
        const accommodation = data.find((item) => item.id === id);

        if (!accommodation) {
          return <Erreur />;
        }
        return (
          <div className="rate">
            {notes.map((note) =>
              accommodation.rating >= note ? (
                <img
                  key={note.toString()}
                  className="rate__filled-star"
                  src={images.filledStar}
                  alt="étoile de notation vide"
                />
              ) : (
                <img
                  key={note.toString()}
                  className="rate__empty-star"
                  src={images.emptyStar}
                  alt="étoile de notation remplie"
                />
              )
            )}
          </div>
        );
      }}
    </DataFetcher>
  );
}

export default Rate;
