import { NewsletterModal } from "./NewsletterModal";

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
        <div className="container">
          <h2>
            News<span className="libre_font">letter</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="newsletter_info">
          <p>
            Descubre más de la fuerza creadora de Vassar y se parte de este
            impulso emprendedor, inscríbete aquí y recibe noticias,
            publicaciones y sorpresas que esta comunidad trae para tí.
          </p>
          <div onClick={toggleModal} className="buton libre_font">
            Inscribirse
          </div>
        </div>
      </div>

      <NewsletterModal toggleModal={toggleModal} />
    </div>
  );
};
