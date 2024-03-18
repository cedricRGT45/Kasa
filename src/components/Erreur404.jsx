import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Erreur404 = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/erreur"); // Redirige vers /404 lors du rendu du composant
  }, [navigate]);

  return (
    <div className="erreur">
      <p className="erreur__title">404</p>
      <p className="erreur__subtitle">{props.texte}</p>
      <NavLink className="erreur__link" to="/">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Erreur404;
