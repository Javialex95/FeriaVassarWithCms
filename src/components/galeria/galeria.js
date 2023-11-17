import React, { useEffect, useState } from "react";
import { getGaleria } from "../lib/api";

export const Galeria = () => {
  const [imagen, setImagen] = useState("");
  const [galeria, setGaleria] = useState([]);

  const showModal = () => {
    document.querySelector(".galeria_modal").classList.toggle("show_modal");
  };

  useEffect(() => {
    getGaleria().then((data) => setGaleria(data.data.imagenes));
  }, []);

  return (
    <div className="galeria">
      <div className="experience_title">
        <h1>
          <span>Galería</span>
        </h1>
      </div>

      <div className="galeria_contenedor flex">
        {galeria.length > 0 && (
          <>
            {galeria.map((img) => (
              <img
                onClick={() => {
                  showModal();
                  setImagen(img.imagen.formats.medium.url);
                }}
                src={img.imagen.formats.medium.url}
                alt="imagen"
              />
            ))}
          </>
        )}
      </div>

      <div className="galeria_modal">
        <div
          className="cerrar"
          onClick={() => {
            showModal();
            setTimeout(() => {
              setImagen("");
            }, 500);
          }}
        >
          X
        </div>
        <img src={imagen} alt="imagen grande" />
      </div>
    </div>
  );
};
