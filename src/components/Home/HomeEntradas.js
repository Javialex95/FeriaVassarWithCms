import { Button } from "../Common/Button";

export const HomeEntradas = ({ fecha, lugar, direccion, boton }) => {
  return (
    <div className="home-entradas flex">
      <div className="fechas">
        <h2>
          <span className="libre_font">{fecha}</span> <br />
          <strong> {lugar} </strong>
        </h2>
        <span> {direccion} </span>
      </div>

      <a href={boton} target="_blank" rel="noreferrer">
        <Button>
          <strong>Adquiere tus</strong>{" "}
          <span className="libre_font">entradas</span>.
        </Button>
      </a>
    </div>
  );
};
