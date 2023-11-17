import React from "react";
import { NewsletterForm } from "./NewsletterForm";
import imgparamodal from "../../../assets/imgparamodal.png";

export const NewsletterPopUp = ({ toggleModal }) => {

  const itemNewsletter = localStorage.getItem('itemNewsletter');

  return (
    <div className={itemNewsletter === null ? 'newsletterPopUp newsletter_modal' : 'newsletterPopUp newsletter_modal hideModal'}>
      <div className="imagen">
        <img src={imgparamodal} alt="imgparamodal" />
      </div>

      <NewsletterForm toggleModal={toggleModal} />
    </div>
  );
};
