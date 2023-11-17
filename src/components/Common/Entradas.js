import React from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../Router/routes";

export const Entradas = ({ homePage }) => {
  const location = useLocation();

  if (
    location.pathname === ROUTES.CMS_LOGIN ||
    location.pathname === ROUTES.CMS_EMPRENDIMIENTO ||
    location.pathname === ROUTES.CMS_ADMIN ||
    location.pathname === ROUTES.CMS_LISTA
  ) {
    return null;
  }
  return (
    <>
      {Object.keys(homePage).length !== 0 && (
        <a
          className="home_fixedButton"
          target="_blank"
          rel="noreferrer"
          href={homePage.boton_FECHA}
        >
          ENTRADAS
        </a>
      )}
    </>
  );
};
