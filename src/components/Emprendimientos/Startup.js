import React from "react";

export const Startup = ({ perfil }) => {
  return (
    <div className={`startup ${perfil.categoria && perfil.categoria.toLowerCase()}`}>
      <div className="startup-container">
        <div
          className="img startup-container-img_1"
          style={{
            background: `url(  ${perfil.imagenMenuUrl}) white`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="contenedor-img">
          <div
            className="img startup-container-img_2"
            style={{
              background: `url(  ${perfil.logoUrl})`,

              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </div>

        <p className="startup-container-text">{perfil.nombre}</p>
      </div>
    </div>
  );
};
