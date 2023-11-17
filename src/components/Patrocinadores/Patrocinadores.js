import React, { useEffect, useState } from "react";
import { HomeFooter } from "../Home/Footer";
import { getPatrocinadores } from "../lib/api";

export const Patrocinadores = () => {
  const [patrocinadores, setPatrocinadores] = useState({});

  useEffect(() => {
    getPatrocinadores().then((data) => {
      setPatrocinadores(data.data);
    });
  }, []);

  return (
    <>
      <section className="patrocinadores">
        <div className="patrocinadores_bg"></div>

        <div className="flex">
          <div className="patrocinadores_title">
            <div className="title">Patrocinadores</div>
          </div>

          <div className="patrocinadores_content">
            {Object.keys(patrocinadores).length !== 0 && (
              <>
                {window.innerWidth > 700 ? (
                  <img
                    src={patrocinadores.imagen.formats.large.url}
                    alt="logos_patrocinadores_dekstop"
                  />
                ) : (
                  <img
                    src={patrocinadores.imagen.formats.large.url}
                    alt="logos_patrocinadores_dekstop"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <HomeFooter />
    </>
  );
};
