import Banner from "../components/Banner";
import Accordeon from "../components/accordeon";
import images from "../components/images"

//Function allowing to import the components that will be displayed on the about page.

const Apropos = () => {
  return (
    <div>
      <Banner
        image={images.aboutBanner}// Allowing to fetch the img path on the image.jsx file
        bannerClassName="banner banner__about"
        imgClassName="banner__img banner__about-img "
      />
      <div className="accordeon">
      <Accordeon
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité
                totale. Les photos sont conforer aux logements, et toutes les informations
                sont régulièrement vérifiées par nos équipes."
      />
      <Accordeon
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices
                de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme."
      />
      <Accordeon
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices
                de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme."
      />
      <Accordeon
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note
                aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont
                bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
    </div>
  );
};

export default Apropos;
