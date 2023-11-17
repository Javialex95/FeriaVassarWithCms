import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../Common/Button";
import { getPerfil } from "../lib/api";
import instagram from "../../assets/instagram.png";
import { Footer } from "../Footer";

export const SingleEmprenMovil = () => {
  let { id } = useParams();
  const [perfil, setPerfil] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getPerfil(id).then((data) => setPerfil(data.data.perfil));
  }, [id]);

  return (
    <div className="single-emprend-movil">
      <div className="max-width">
        {Object.keys(perfil).length !== 0 ? (
          <>
            <div className="single-emprend-desc-title">
              <h2>{perfil.nombre}</h2>
            </div>

            <div className="single-emprend-galeria flex">
              {perfil.galeriaImg1Url !== "" && (
                <div>
                  <img src={perfil.galeriaImg1Url} alt="imagen galeria" />
                </div>
              )}
              {perfil.galeriaImg2Url !== "" && (
                <div>
                  <img src={perfil.galeriaImg2Url} alt="imagen galeria" />
                </div>
              )}
              {perfil.galeriaImg3Url !== "" && (
                <div>
                  <img src={perfil.galeriaImg3Url} alt="imagen galeria" />
                </div>
              )}
              {perfil.galeriaImg4Url !== "" && (
                <div>
                  <img src={perfil.galeriaImg4Url} alt="imagen galeria" />
                </div>
              )}
              {perfil.galeriaImg5Url !== "" && (
                <div>
                  <img src={perfil.galeriaImg5Url} alt="imagen galeria" />
                </div>
              )}
            </div>

            <div className="single-emprend-desc">
              <div className="single-emprend-desc-container">
                <div className="single-emprend-desc-text">
                  {perfil.descripcion}
                </div>
              </div>

              <hr />

              <div className="botones flex" target="_blank" rel="noreferrer">
                {perfil.urlWeb !== "" && (
                  <a href={perfil.urlWeb}>
                    <Button
                      children="Ir a página"
                      lastWord="web"
                      className="boton-pagina"
                    />
                  </a>
                )}

                {perfil.urlInsta !== "" && (
                  <a href={perfil.urlInsta} target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram" />
                  </a>
                )}
                <Link to="/emprendimientos">
                  <Button
                    children="Regresar a "
                    lastWord="galería"
                    className="go-back-galeria"
                  />
                </Link>
              </div>

              {userId === id && (
                <a className="go-back-perfil" href={`/profile`}>
                  <Button children="Editar perfil" />
                </a>
              )}
            </div>
          </>
        ) : (
          <div className="cargando_modal">Cargando</div>
        )}
      </div>

      <Footer />
    </div>
  );
};
