import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFetcher from "../components/Datafetcher";
import Carousel from "../components/Carousel";
import Accordeon from "../components/accordeon";
import Rate from "../components/Rate";

function AccommodationDetails() {
  const { id } = useParams();

  return (
    <DataFetcher url="/logements.json">
      {(data) => {
        const accommodation = data.find((item) => item.id === id); // Matching the accomodation to the id

        // If the accomodation does not exist return to the 404 page
        if (!accommodation) {
          return <Navigate to="/erreur" />;
        }

        return (
          <div>
            <div className="accomodation">
              <Carousel />
              <div className="accomodation__content">
                <div className="accomodation__content-informations">
                  <h1 className="accomodation__content-title">
                    {accommodation.title}
                  </h1>
                  <p className="accomodation__content-location">
                    {accommodation.location}
                  </p>
                  {/*map allow to render the list of objects by iteration */}
                  <div className="accomodation__content-tags">
                    {accommodation.tags.map((tag, index) => (
                      <p className="accomodation__content-tag" key={index}>
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="accomodation__content-host">
                  <Rate />
                  <div className="accomodation__content-hostDetails">
                    <p className="accomodation__content-hostDetails-name">
                      {accommodation.host.name}
                    </p>
                    <img
                      className="accomodation__content-hostPicture"
                      src={accommodation.host.picture}
                      alt={accommodation.host.name}
                    />
                  </div>
                </div>
              </div>
              <div className="accomodation-accordeon">
                <Accordeon
                  title="Description"
                  content={accommodation.description}
                />
                <Accordeon
                  title="Équipements"
                  content={accommodation.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                />
              </div>
            </div>
          </div>
        );
      }}
    </DataFetcher>
  );
}

export default AccommodationDetails;
