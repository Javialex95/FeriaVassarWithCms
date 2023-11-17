import React from "react";
import { Button } from "../Common/Button";
import { Link } from "react-router-dom";

export const HomeManifesto = ({ video, manifesto }) => {
  return (
    <section className="home-manifesto">
      <div className="flex home-manifesto-contenedor flex">
        <div className="home-manifesto-contenedor-title flex">
          <div className="home-manifesto-contenedor-title-aros"></div>

          <div className="titulo">
            <p>UN MOVIMIENTO CREATIVO</p>
            <h2>Manifiesto</h2>
          </div>
        </div>

        <div className="home-manifesto-text">
          {manifesto.map((item, i) => (
            <>
              <h2>{item.titulo} </h2>
              <p>{item.descripcion}</p>
            </>
          ))}
        </div>
      </div>

      <div className="relative">
        <iframe
          className="home-manifesto_iframe"
          srcDoc={`
                            <style>
                                img{object-fit:cover}
                                *{padding:0;margin:0;overflow:hidden}
                                html,body{height:100%;}
                                img,span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                                span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
                            </style>
                            <a href=${video.url_VIDEO}> 
                                <img src=${video.video_PORTADA.formats.medium.url}>
                  
                            </a>
                    `}
          src={`${video.url_VIDEO}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted
          autoPlay
        ></iframe>
        <div className="home-manifesto_button">
          <Link to={`${video.url_BOTON}`}>
            <Button>
              <span>
                Conoce qué es <strong>Vassar</strong>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
