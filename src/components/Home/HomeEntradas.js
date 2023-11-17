import React from "react";
import { Button } from "../Common/Button";

export const HomeEntradas = ({ fecha, lugar, direccion, boton }) => {
  return (
    <div className="home-entradas flex">
      <div className="fechas">
        <h2>
          {fecha} <br />
          <strong> {lugar} </strong>
        </h2>
        <span> {direccion} </span>
      </div>

      <a href={boton} target="_blank" rel="noreferrer">
        <Button>
          Compra tus entradas <strong>aquí</strong>.
        </Button>
      </a>
    </div>
  );
};
