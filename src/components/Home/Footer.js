import React from "react";

export const HomeFooter = ({logos, showLogos }) => {

  return (
    <footer className="home-footer">
      {showLogos && (
        <div className="home-footer_top">
          <div className="logos">
            <img src={logos.formats.large.url} alt="footer" />
          </div>
        </div>
      )}
      <div className="home-footer_bottom">
        <div className="">© VASSAR {new Date().getFullYear()} </div>
        <div className="">Todos los derechos reservados</div>
      </div>
    </footer>
  );
};
