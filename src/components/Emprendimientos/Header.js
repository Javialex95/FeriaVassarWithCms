import React from "react";

export const Header = ({ galeria }) => {
  return (
    <div className="container-startups-header">
      <h2>
        Nuestros <br /> <b>emprendimientos</b>{" "}
      </h2>
      <p>
        Descubre las marcas que hacen parte de esta gran comunidad
        {galeria && (
          <span style={{ paddingLeft: "5px" }}>
            desplazándote horizontal y verticalmente por la galería.
          </span>
        )}
      </p>
    </div>
  );
};
