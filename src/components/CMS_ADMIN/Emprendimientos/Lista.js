import React, { useEffect, useState } from "react";
import { deleteEmpren } from "../../lib/api";
import { DeleteAlert } from "../Alerts/DeleteAlert";

export const Lista = ({
  perfiles,
  perfilesBulk,
  setPerfilesBulk,
  setPerfiles,
  seteditPerfil,
  showModal,
}) => {
  const [deleteId, setDeleteId] = useState("");
  const [perfilesRegistred, setPerfilesRegistred] = useState([]);

  const showModalDelete = () => {
    document.querySelector(".alertDelete").classList.toggle("showModal");
  };

  useEffect(() => {
    const perfilesRegistrados = perfiles.filter(function (user) {
      return user.logoUrl;
    });

    setPerfilesRegistred(perfilesRegistrados);
  }, [perfiles]);

  const deleteEmprend = (confirmation) => {
    if (confirmation === "si") {
      const newPerfiles = perfiles.filter(function (user) {
        return user._id !== deleteId;
      });

      if (perfilesBulk.length > 0) {
        const perfilesBulkNews = perfilesBulk.filter(function (user) {
          return user._id !== deleteId;
        });

        setPerfilesBulk(perfilesBulkNews);
      }
      setPerfiles(newPerfiles);
      deleteEmpren(deleteId).then((data) => console.log(data));
      showModalDelete();
    } else {
      showModalDelete();
    }
  };

  return (
    <div className="lista">
      {perfilesBulk.length > 0 && (
        <div className="newPerfilesBulk">
          <span>Agregados recientemente</span>
          {perfilesBulk.map((perfil) => (
            <div key={perfil._id} className="lista-emprendimientos">
              <p>{perfil.nombre}</p>
              <p>{perfil.user}</p>

              <div className="botones">
                {perfil.logoUrl && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.feriavassar.com/#/emprendimiento/${perfil._id}`}
                    className="boton boton-editar"
                  >
                    Ver Perfil
                  </a>
                )}
                <p
                  onClick={() => {
                    seteditPerfil(perfil);
                    showModal("editEmpren");
                  }}
                  className="boton boton-editar"
                >
                  Editar
                </p>
                <p
                  onClick={() => {
                    showModalDelete();
                    setDeleteId(perfil._id);
                  }}
                  className="boton boton-eliminar"
                >
                  Eliminar
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        Perfiles que han completado el registro: {perfilesRegistred.length}{" "}
      </div>
      <div className="botones">
        <div onClick={() => showModal("addEmpren")} className="addNewEmpren">
          Añadir nuevo emprendimiento
        </div>

        <div
          onClick={() => showModal("addBulkEmpren")}
          className="addBulkEmprenButton"
        >
          Añadir documento de emprendimientos
        </div>
        <a
          href="https://www.youtube.com/watch?v=MfW6LQMppzM"
          target="_blank"
          rel="noreferrer"
        >
          Ver tutorial
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1xewh8RYrd6EPXVVtBgRgV8AnneMemLhb0HXtVPq2UGk/edit#gid=231967213"
          target="_blank"
          rel="noreferrer"
        >
          Ver formato de lista de emprendimientos
        </a>
      </div>

      {perfiles.map((perfil) => (
        <div key={perfil._id} className="lista-emprendimientos">
          <p>
            <strong>Nombre:</strong> {perfil.nombre}
            <br />
            <strong>User:</strong> {perfil.user}
          </p>

          <div className="botones">
            {perfil.logoUrl && (
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.feriavassar.com/#/emprendimiento/${perfil._id}`}
                className="boton boton-editar"
              >
                Ver Perfil
              </a>
            )}
            <p
              onClick={() => {
                seteditPerfil(perfil);
                showModal("editEmpren");
              }}
              className="boton boton-editar"
            >
              Editar
            </p>
            <p
              onClick={() => {
                showModalDelete();
                setDeleteId(perfil._id);
              }}
              className="boton boton-eliminar"
            >
              Eliminar
            </p>
          </div>
        </div>
      ))}

      <DeleteAlert deleteEmprend={deleteEmprend} />
    </div>
  );
};
