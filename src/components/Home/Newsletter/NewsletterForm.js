import React, { useRef, useState } from "react";
import logo from "../../../assets/logovassarnegro.png";
import { Close } from "./Close";

export const NewsletterForm = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const newsletterSubmit = useRef(null);

  const doSubmit = () => {
    newsletterSubmit.current.click();
  };

  return (
    <section className="newsletter_form">
      <div id="mc_embed_signup">
        <form
          action="https://paramopresenta.us5.list-manage.com/subscribe/post?u=1a1976824fdbd12281545222a&amp;id=bc0d569099"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank" rel="noreferrer" 
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor= "mce-EMAIL">Correo Electrónico</label>
              <input
                type="email"
                defaultValue={email}
                onChange={setEmail}
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>

            <div className="flex">
              <div className="mc-field-group">
                <label htmlFor= "mce-FNAME">Nombres</label>
                <input
                  type="text"
                  defaultValue={fname}
                  onChange={setFname}
                  name="FNAME"
                  className="required"
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor= "mce-LNAME">Apellidos</label>
                <input
                  type="text"
                  defaultValue={lname}
                  onChange={setLname}
                  name="LNAME"
                  className="required"
                  id="mce-LNAME"
                />
              </div>
            </div>

            <div className="mc-field-group size1of2">
              <label htmlFor= "mce-PHONE">Número de celular</label>
              <input
                type="text"
                name="PHONE"
                className="required"
                defaultValue={phone}
                onChange={setPhone}
                id="mce-PHONE"
              />
            </div>

            <div className="mc-field-group size1of2">
              <div className="content__gdpr">
                <label>AVISO DE PRIVACIDAD</label>
                <div className="flex">
                  <p>
                    Al dar clic en el botón "Subscribe" aceptas nuestros
                    términos y condiciones y política de tratamiento de datos.
                    <br />
                    <br />
                    Puedes consultar nuestra política de tratamiento de datos
                    aquí: <a target="_blank" rel="noreferrer"  href="https://feriavassar.com/privacidad.pdf">https://feriavassar.com/privacidad.pdf</a>
                  </p>
                  <fieldset
                    className="mc_fieldset gdprRequired mc-field-group"
                    name="interestgroup_field"
                  >
                    <label className="checkbox subfield" htmlFor= "gdpr_94">
                      <input
                        type="checkbox"
                        id="gdpr_94"
                        name="gdpr[94]"
                        value="Y"
                        className="av-checkbox gdpr"
                        required
                      />
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>

            <div hidden={true}>
              <input type="hidden" name="tags" value="30938" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response"></div>
            </div>

            <div className="clear" style={{ display: "none" }}>
              <input
                ref={newsletterSubmit}
                type="submit"
                value="SUSCRÍBETE AL NEWSLETTER"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>

            <div className="buton" onClick={doSubmit}>
              Inscribirse
            </div>
          </div>
        </form>
      </div>

      <div onClick={toggleModal} className="close">
        <Close />
      </div>

      <img className="logo" src={logo} alt="logo_feria_newsletter" />
    </section>
  );
};
