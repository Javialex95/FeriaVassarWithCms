import React from "react";
import { NewsletterForm } from "./NewsletterForm";
import imgparamodal from "../../../assets/imgparamodal.png";

export const NewsletterModal = ({ toggleModal }) => {
  return (
    <div className="newsletter_modal">
      <div className="imagen">
        <img src={imgparamodal} alt="imgparamodal" />
      </div>

      <NewsletterForm toggleModal={toggleModal} />
    </div>
  );
};
