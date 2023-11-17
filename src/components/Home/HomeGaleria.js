import React from "react";
import { plus } from "../Common/Icons";
import { Link } from "react-router-dom";

export const HomeGaleria = ({ galeria }) => {
  return (
    <div className="home-galeria">
      <div className="mobile-separator"></div>

      <div className="home-galeria_title">
        <h2>Galería</h2>
      </div>

      <div className="home-galeria_container">
        <div className="desktop-hide text">
          Descubre los espacios y experiencias que nos hacen diferentes.
        </div>

        <div className="home-galeria_images">
          {galeria.map((img, i) => (
            <>
              {i < 3 && (
                <img
                  src={img.formats.medium.url}
                  alt="imagen"
                />
              )}
            </>
          ))}
        </div>

        <Link to="/galeria">
          <button>
            <span>Ver más</span>
            <div className="">{plus}</div>
          </button>
        </Link>
      </div>
    </div>
  );
};
