import React, { useEffect, useState } from "react";
import { updateProfile } from "../../lib/api";

export const EditEmpren = ({
  perfiles,
  perfilesBulk,
  setPerfilesBulk,
  setPerfiles,
  editPerfil,
  showModal,
}) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setUser(editPerfil);
  }, [editPerfil]);

  const onChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitAdmin = async () => {
    if (user.nombre === "" || user.user === "" || user.password === "") {
      return setError(true);
    }

    const newPerfiles = perfiles.map((usuario) => {
      if (usuario._id === editPerfil._id) {
        return user;
      } else {
        return usuario;
      }
    });

    if (perfilesBulk.length > 0) {
      const newPerfilesBulk = perfilesBulk.map((usuario) => {
        if (usuario._id === editPerfil._id) {
          return user;
        } else {
          return usuario;
        }
      });

      setPerfilesBulk(newPerfilesBulk);
    }

    setPerfiles(newPerfiles);
    const result = await updateProfile(user, editPerfil._id);

    console.log(result.status);
    if (result.status === 200) {
      showModal("editEmpren");
    }
  };

  return (
    <div className="modal-form editEmpren">
      <div className="container">
        <div className="cerrar" onClick={() => showModal("editEmpren")}>
          X
        </div>
        {error && <p className="error">Debes llenar todos los campos</p>}

        <form>
          <div className="input-container">
            <input
              placeholder="Escribe el nombre"
              onChange={onChangeInput}
              name="nombre"
              type="text"
              value={user.nombre}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Escribe el user"
              onChange={onChangeInput}
              name="user"
              type="text"
              value={user.user}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Escribe el password"
              name="password"
              type="text"
              onChange={onChangeInput}
              value={user.password}
            />
          </div>

          <div className="button" onClick={submitAdmin}>
            Editar
          </div>
        </form>
      </div>
    </div>
  );
};
