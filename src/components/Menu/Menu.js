import { Link } from "react-router-dom";
import { SearchMenu } from "../Common/SearchMenu";
import { ROUTES } from "../Router/routes";
import imagen_menu_web from "../../assets/2023/menu_e_iconos/v.png";

export const Menu = ({ redirect, setRedirect, toggleMenu }) => {
  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    menu.classList.remove("show-menu");
    body.style.overflow = "auto";
  };

  return (
    <>
      <div className="menu flex">
        <div className="menu-items">
          <ul className="menu-items-list">
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to="/"
            >
              Home
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.STARTUPS}
            >
              <b>Emprendimientos</b>
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.VASSAR}
            >
              Es <b>Vassar</b>
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.GALERIA}
            >
              Galería
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.EXPERIENCE}
            >
              Experiencia
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.BLOG}
            >
              Blog
            </Link>
            <br />
            <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.FAQ}
            >
              FAQ
            </Link>
            <br />
            {/* <Link onClick={() => { closeMenu(); toggleMenu(); }} to={ROUTES.FUNDACIONES}>Fundaciones</Link> <br /> */}
            {/* <Link
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
              to={ROUTES.PATROCINADORES}
            >
              Patrocinadores
            </Link> */}
            <br />
            <Link
              to="/contacto"
              onClick={() => {
                closeMenu();
                toggleMenu();
              }}
            >
              Contacto
            </Link>
          </ul>

          <SearchMenu
            toggleMenu={toggleMenu}
            setRedirect={setRedirect}
            className="white-search"
            redirect={redirect}
          />
        </div>

        <div className="menu-images">
          <img
            className="imagen_menu_web"
            src={imagen_menu_web}
            alt="imagen menu web"
          />
        </div>

      </div>
    </>
  );
};
