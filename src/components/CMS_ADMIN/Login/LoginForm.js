import React, { useState } from "react";
import { Button } from "../../Common/Button";
import { Redirect } from "react-router-dom";
import Users from "./Users.json";

export const LoginForm = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [userForm, setUserForm] = useState({
    user: "",
    password: "",
  });

  const onChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitContenido = () => {
    if (userForm.user === "" || userForm.password === "") {
      return setErrorLogin(true);
    }

    const confirm = Users.map((user) => {
      if (user.user === userForm.user && user.password === userForm.password) {
        return "existe";
      } else {
        return "no existe";
      }
    });

    if (confirm[0] === "existe") {
      setLoginSuccessful(true);
      localStorage.setItem("adminId", "vassar-si-no-app");
    } else {
      setLoginSuccessful(false);
      localStorage.removeItem("adminId");
    }
  };

  const userId = localStorage.getItem("adminId");

  if (loginSuccessful || userId) {
    return <Redirect to="/admin-lista" />;
  }

  return (
    <>
      <form>
        {errorLogin && <p>DEBES DE RELLENAR TODOS LOS CAMPOS</p>}
        <div className="login_form">
          <div className="form-field">
            <input
              name="user"
              onChange={onChange}
              placeholder="Ingresa el usuario"
            />
          </div>

          <div className="form-field mt-3">
            <input
              onChange={onChange}
              name="password"
              placeholder="Contraseña"
            />
          </div>

          <>
            <Button
              onClick={submitContenido}
              hoverDirection="left"
              className="inline mx-auto"
            >
              <span>entrar</span>
            </Button>
          </>
        </div>
      </form>
    </>
  );
};
