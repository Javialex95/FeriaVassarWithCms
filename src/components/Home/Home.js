import React, { useEffect } from "react";
import { HomeManifesto } from "./HomeManifesto";
import { HomeSlider } from "./HomeSlider";
import { HomeEmpren } from "./HomeEmpren";
import { HomeExperience } from "./HomeExperience";
import { HomeRedes } from "./HomeRedes";
import { HomeContacto } from "./HomeContacto";
import { HomeFooter } from "./Footer";
import { HomeEntradas } from "./HomeEntradas";
import { HomeGaleria } from "./HomeGaleria";
import { Newsletter } from "./Newsletter/Newsletter";
import { LoadingHome } from "./LoadingHome";

export const Home = ({ homePage, contacto }) => {
  useEffect(() => {
    if (contacto && Object.keys(homePage).length !== 0) {
      const contactoVar = document.getElementById("contacto");
      if (contactoVar) {
        contactoVar.scrollIntoView();
      }
    }
  }, [homePage, contacto]);

  const toggleModal = () => {
    localStorage.setItem("itemNewsletter", true);
    const newsletter_modal = document.querySelector(".newsletterPopUp");
    const body = document.querySelector("body");
    body.classList.remove("noScroll");
    newsletter_modal.classList.add("hideModal");
  };

  return (
    <div id="home" className="home">
      {Object.keys(homePage).length !== 0 ? (
        <>
          <HomeSlider banner={homePage.Banner} />
          <HomeEntradas
            fecha={homePage.fecha}
            lugar={homePage.lugar}
            direccion={homePage.direccion}
            boton={homePage.boton_FECHA}
          />
          <HomeManifesto
            video={homePage.Video}
            manifesto={homePage.manifesto}
          />
          <HomeGaleria galeria={homePage.galeria} />
          <HomeEmpren emprendimientos={homePage.Emprendimientos} />
          <HomeExperience experiencia={homePage.experiencia} />
          <Newsletter />
          <HomeRedes />
          <HomeContacto />
          <HomeFooter logos={homePage.logos_FOOTER} showLogos={true} />
          {/* <NewsletterPopUp toggleModal={toggleModal} /> */}
        </>
      ) : (
        <LoadingHome />
      )}
    </div>
  );
};
