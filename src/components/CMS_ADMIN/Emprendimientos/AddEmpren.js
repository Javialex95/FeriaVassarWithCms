import React, { useState } from "react";
import { addEmpren } from "../../lib/api";

export const AddEmpren = ({ perfiles, setPerfiles, showModal }) => {
  const [user, setUser] = useState({
    nombre: "",
    user: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const onChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitAdmin = async () => {
    if (user.nombre === "" || user.user === "" || user.password === "") {
      setError(true);

      return setTimeout(() => {
        setError(false);
      }, 2000);
    }
    const result = await addEmpren(user);
    setPerfiles([result.data.perfil, ...perfiles,]);

    if (result.status === 200) {
      showModal("addEmpren");
    }
  };

  return (
    <div className="modal-form addEmpren">
      <div className="container">
        <div className="cerrar" onClick={() => showModal("addEmpren")}>
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
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Escribe el user"
              onChange={onChangeInput}
              name="user"
              type="text"
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Escribe el password"
              name="password"
              type="text"
              onChange={onChangeInput}
            />
          </div>

          <div onClick={submitAdmin} className="submit-button">
            Enviar
          </div>
        </form>
      </div>
    </div>
  );
};
