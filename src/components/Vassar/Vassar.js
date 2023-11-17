import React, { useEffect, useState } from "react";
import vassarIcon from "../../assets/logo_es_vassar_web.png";
import { chevronUp, rightArrowLong } from "../Common/Icons";
import { WordUp } from "../Common/WordUp";
import gif_vassar from "../../assets/gif_vassar.gif";
import { getEsVassar } from "../lib/api";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export const Vassar = () => {
  const [esVassar, setEsVassar] = useState({});

  useEffect(() => {
    getEsVassar().then((data) => {
      setEsVassar(data.data);
    });
  }, []);

  return (
    <section id="top" className="vassar">
      {Object.keys(esVassar).length !== 0 && (
        <>
          <div className="vassar_images">
            <div className="">
              <img src={gif_vassar} alt="" />
            </div>
          </div>
          <div className="vassar_content">
            <div className="vassar_icon">
              <div className="">
                <img src={vassarIcon} alt="" />
              </div>
            </div>
            <div className="vassar_text">
              <div className="vassar_text_container">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="text-justify prose"
                >
                  {esVassar.informacion}
                </ReactMarkdown>
            
              </div>

              <div className="arrow">{rightArrowLong}</div>
            </div>

            <footer className="vassar_footer">
              <div className="home-contacto_comebackUp">
                <a href="#top" className="scrollTo">
                  <span>Volver arriba</span>
                  <div className="">{chevronUp}</div>
                </a>
              </div>

              <div className="vassar_footer_top">
                <div className="logos">
                  <div className="vassar_footer_logo logo1"></div>
                  <div className="vassar_footer_logo logo2"></div>
                  <div className="vassar_footer_logo logo3"></div>
                </div>
              </div>
              <div className="vassar_footer_bottom">
                <div className="">© VASSAR {new Date().getFullYear()}</div>
                <div className="">Todos los derechos reservados</div>
              </div>
            </footer>
          </div>
        </>
      )}
    </section>
  );
};
