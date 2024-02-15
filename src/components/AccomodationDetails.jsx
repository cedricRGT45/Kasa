// useContext() =>utilisation function, state (providerContext)
// setTimeOut()=>retour acceuil 404

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataFetcher from "./Datafetcher";
import Carousel from "./Carousel";
import Erreur from "../pages/Erreur";
import images from "./images";
import Accordeon from "./accordeon";

function AccommodationDetails() {
  const { id } = useParams();

  return (
    <DataFetcher url="/logements.json">
      {(data) => {
        const accommodation = data.find((item) => item.id === id);

        if (!accommodation) {
          return <Erreur />;
        }
        return (
          <div>
            <div className="accomodation">
              <Carousel />
              <div className="accomodation__content">
                <h2 className="accomodation__content-title">
                  {accommodation.title}
                </h2>
                <p className="accomodation__content-location">
                  {accommodation.location}
                </p>
                <div className="accomodation__content-tags">
                  {accommodation.tags.map((tag, index) => (
                    <p className="accomodation__content-tag" key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="accomodation__content-host">
                  <img src={images.emptyStar} alt="étoile de notation"></img>
                  <img src={images.filledStar} alt="étoile de notation"></img>
                  <p>{accommodation.host.name}</p>
                  <img
                    src={accommodation.host.picture}
                    alt={accommodation.host.name}
                  />
                </div>
                {/* <p>{accommodation.description}</p>
                <h3>Équipements</h3>
                <ul>
                  {accommodation.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul> */}
              </div>
              <Accordeon
                title="Description"
                content={accommodation.description}
              />
              <Accordeon
                title="Equipements"
                content=
                  {accommodation.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                
              />
            </div>
          </div>
        );
      }}
    </DataFetcher>
  );
}

export default AccommodationDetails;
