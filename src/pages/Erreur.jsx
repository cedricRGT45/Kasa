import Erreur404 from "../components/Erreur404";

//404 page if the slug is wrong
const Erreur = () => {
  return (
    <div>
      <Erreur404 texte="Oups! La page que vous demandez n'existe pas." />
    </div>
  );
};

export default Erreur;
