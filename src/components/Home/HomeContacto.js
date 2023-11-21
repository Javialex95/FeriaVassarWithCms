import { chevronUp } from "../Common/Icons";
import correo from '../../assets/2023/correo.png'

export const HomeContacto = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-contacto" id="contacto">
      <div className="home-contacto_container">
        <div className="home-contacto_text">
          <h2 className="libre_font">Contáctanos</h2>
          <h3>
            <a
              href="mailto:vassarferia@paramolab.com"
              target="_blank"
              rel="noreferrer"
            >
              vassarferia@paramolab.com
            </a>
          </h3>
        </div>

        <img className="correo" src={correo} alt="correo" />
      </div>

      <div className="home-contacto_comebackUp">
        <div onClick={toTop} className="scrollTo">
          <span>Volver arriba</span>
          <div className="">{chevronUp}</div>
        </div>
      </div>
    </div>
  );
};
