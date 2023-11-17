import React from "react";
import { plus } from "../Common/Icons";
import { Link } from "react-router-dom";

export const HomeExperience = ({ experiencia }) => {
  return (
    <div className="home-experience">
      <div className="mobile-separator"></div>

      <div className="home-experience_title">
        <h2>La experiencia</h2>
      </div>

      <div className="home-experience_container">
        <div className="desktop-hide text">
          Descubre los espacios y experiencias que nos hacen diferentes.
        </div>

        <div className="home-experience_images">
          {experiencia.map((item, i) => (
            <>
              {i + 1 <= 5 ? (
                <div className={`image image-${i + 1}`}>
                  <img src={item.imagen.url} alt="" />
                </div>
              ) : (
                <div className={`image image--hidden image-${i + 1}`}>
                  <img src={item.imagen.url} alt="" />
                </div>
              )}
            </>
          ))}
        </div>

        <Link to="/experiencia">
          <button>
            <span>Ver más</span>
            <div className="">{plus}</div>
          </button>
        </Link>
      </div>
    </div>
  );
};
