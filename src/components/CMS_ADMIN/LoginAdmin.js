import React from "react";
import { LoginForm } from "./Login/LoginForm";



export const LoginAdmin = () => {
  return (
    <section className="login">
      <div className="login_container">
        <h1>
          Login administrador
        </h1>

        <div className="forms">
          <LoginForm />
        </div>

        {/* <HomeFooter /> */}
      </div>
    </section>
  );
};
