import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { getPerfiles } from "../lib/api";
import { ROUTES } from "../Router/routes";
import { AddBulkEmpren } from "./Emprendimientos/AddBulkEmpren";
import { AddEmpren } from "./Emprendimientos/AddEmpren";
import { EditEmpren } from "./Emprendimientos/EditEmpren";
import { Lista } from "./Emprendimientos/Lista";

export const ListaAdmin = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [editPerfil, seteditPerfil] = useState({});
  const [perfilesBulk, setPerfilesBulk] = useState([]);

  const closeSesion = () => {
    localStorage.removeItem("adminId");
  };

  useEffect(() => {
    getPerfiles().then((data) => setPerfiles(data.data.orderPerfil));
  }, []);

  const showModal = (tipo) => {
    document.querySelector(`.${tipo}`).classList.toggle("showModal");
  };

  const userId = localStorage.getItem("adminId");

  if (!userId) {
    return <Redirect to="/admin-login" />;
  }

  return (
    <>
      <section className="recopilacion">
        <div className="recopilacion_left">
          <h1>
            Lista de <strong>emprendimientos</strong>
          </h1>

          <nav className="recopilacion_left_buttons">

            <Link onClick={closeSesion} to={ROUTES.CMS_ADMIN}>
              <div className="button">
                <span>Cerrar sesión</span>
              </div>
            </Link>
          </nav>
        </div>

        <div className="recopilacion_right forms">
          {perfiles.length <= 0 ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
           

              <Lista
                perfiles={perfiles}
                perfilesBulk={perfilesBulk}
                setPerfilesBulk={setPerfilesBulk}
                setPerfiles={setPerfiles}
                seteditPerfil={seteditPerfil}
                showModal={showModal}
              />
            </>
          )}
        </div>
      </section>
      <AddEmpren
        perfiles={perfiles}
        setPerfiles={setPerfiles}
        showModal={showModal}
      />
      <EditEmpren
        perfiles={perfiles}
        perfilesBulk={perfilesBulk}
        setPerfilesBulk={setPerfilesBulk}
        setPerfiles={setPerfiles}
        showModal={showModal}
        editPerfil={editPerfil}
      />
      <AddBulkEmpren
        perfiles={perfiles}
        setPerfiles={setPerfiles}
        setPerfilesBulk={setPerfilesBulk}
        showModal={showModal}
      />
    </>
  );
};
