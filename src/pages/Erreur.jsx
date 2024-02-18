import Erreur404 from "../components/Erreur404";
import Redirection from "../components/Redirection";

const Erreur = () => {
  return (
    <div>
      <Erreur404 texte="Oups! La page que vous demandez n'existe pas." />
      <Redirection />
    </div>
  );
};

export default Erreur;
