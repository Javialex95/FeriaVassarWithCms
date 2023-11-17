import React from "react";
import { NewsletterModal } from "./NewsletterModal";
import { estrellasNewsletter } from "../../Common/Icons/index";

export const Newsletter = () => {
  const toggleModal = () => {
    const newsletter_modal = document.querySelector(".newsletter_modal");
    const body = document.querySelector("body");
    body.classList.toggle("noScroll");
    newsletter_modal.classList.toggle("showModal");
  };

  return (
    <div className="newsletter">
      <div className="newsletter_title">
        <h2>Newsletter</h2>
        <p> {estrellasNewsletter} </p>
      </div>
      <div className="newsletter_info">
        <p>
          Descubre más de la fuerza creadora de Vassar y se parte de este
          impulso emprendedor, inscríbete aquí y recibe noticias, publicaciones
          y sorpresas que esta comunidad trae para tí.
        </p>
        <div onClick={toggleModal} className="buton">
          Inscribirse
        </div>
      </div>

      <NewsletterModal toggleModal={toggleModal} />
    </div>
  );
};
