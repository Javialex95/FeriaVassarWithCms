import React, { useEffect, useState } from "react";
import { chevronUp } from "../Common/Icons";
import { getExperiencia } from "../lib/api";

export const Experience = () => {
  const [experiencia, setExperiencia] = useState({});
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    getExperiencia().then((data) => {
      setExperiencia(data.data);
      setExperiencias(data.data.experiencias);
    });
  }, []);

  return (
    <>
      <section id="top" className="experience">
        <div className="experience_title">
          <h1>
            <span>experiencia</span>
          </h1>

          <div className="desktop-hide hidden">
            {experiencia.texto_IZQUIERDA}
          </div>
        </div>
        <div className="experience_content">
          <div className="experience_content_container">
            <div className="experience_content_left">
              <div className="">{experiencia.texto_IZQUIERDA}</div>
            </div>
            <div className="experience_content_right">
              {experiencias.length > 0 && (
                <>
                  {experiencias.map((item, index) => {
                    return (
                      <div className="experience_item" key={index}>
                        <div className="experience_item_image">
                          <img
                            src={item.imagen.formats.medium.url}
                            alt="music"
                          />
                        </div>
                        <div className="experience_item_content">
                          <div className="title">{item.titulo}</div>
                          <div className="description">{item.descripcion}</div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer desktop-hide">
        <div className="home-footer_top">
          <div className="home-contacto_comebackUp">
            <a href="#top" className="scrollTo">
              <span>Volver arriba</span>
              <div className="">{chevronUp}</div>
            </a>
          </div>
        </div>
        <div className="home-footer_bottom">
          <div className="">© VASSAR {new Date().getFullYear()}</div>
          <div className="">Todos los derechos reservados</div>
        </div>
      </footer>
    </>
  );
};
