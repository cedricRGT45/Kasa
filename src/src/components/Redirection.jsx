import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => navigate("/404");
  }, [history]);
};

export default Redirection;
