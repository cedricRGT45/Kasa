import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/"); 
    }, 2500); 

    return () => clearTimeout(redirectTimeout);
  }, [history]);
};

export default Redirection;
