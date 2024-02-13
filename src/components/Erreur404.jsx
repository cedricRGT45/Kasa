import React from "react";
import { NavLink, Route } from "react-router-dom";

const Erreur404 = (props) => {
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
