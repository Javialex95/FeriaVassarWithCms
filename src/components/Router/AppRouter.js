import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../CMS/Login";
import { Emprendimientos } from "../Emprendimientos/Emprendimientos";
import { Recopilacion } from "../CMS/Recopilacion";
import { ListaContainer } from "../Emprendimientos/Lista/ListaContainer";
import { SingleEmpren } from "../Emprendimientos/SingleEmpren";
import { SingleEmprenMovil } from "../Emprendimientos/SingleEmprenMovil";
import { Experience } from "../Experience/Experience";
import { Faq } from "../Faq/Faq";
import { Home } from "../Home/Home";
import { getHome, getPerfiles } from "../lib/api";
import { MenuOpener } from "../Menu/MenuOpener";
import { Vassar } from "../Vassar/Vassar";
import { ROUTES } from "./routes";
import { ScrollToTop } from "../Common/ScrollToTop";
import { Patrocinadores } from "../Patrocinadores/Patrocinadores";
import { Fundaciones } from "../Fundaciones/Fundaciones";
import { Galeria } from "../galeria/galeria";
import { Blog } from "../Blog/Blog";
import { Post } from "../Blog/Post";
import { LoginAdmin } from "../CMS_ADMIN/LoginAdmin";
import { ListaAdmin } from "../CMS_ADMIN/ListaAdmin";
import { Entradas } from "../Common/Entradas";

export const AppRouter = () => {
  const [searched, setSearched] = useState([]);
  const [perfiles, setPerfiles] = useState([]);
  const [perfilesFiltrados, setPerfilesFiltrados] = useState([]);
  const [perfilesFilter, setPerfilesFilter] = useState([]);
  const [error, setError] = useState("");
  const [homePage, setHomePage] = useState({});

  useEffect(() => {
    if (searched.length === 0) {
      getPerfiles().then((data) => setPerfiles(data.data.orderPerfil));
    }

    if (searched.msj) {
      setError(searched.msj);

      setTimeout(() => {
        getPerfiles().then((data) => setPerfiles(data.data.orderPerfil));
      }, 600);
    }

    if (searched.perfiles) {
      setPerfiles(searched.perfiles);
      setError("");
    }
  }, [searched]);

  useEffect(() => {
    getHome().then((data) => {
      setHomePage(data.data);
    });

    // To show the newsletter only one time.
    // const itemNewsletter = localStorage.getItem("itemNewsletter");
    // if (itemNewsletter === null) {
    //   const body = document.querySelector("body");
    //   body.classList.add("noScroll");
    // }
  }, []);

  return (
    <>
      <Router>
        <MenuOpener />
        <ScrollToTop />

        <Entradas homePage={homePage} />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home homePage={homePage} />
          </Route>

          <Route exact path={ROUTES.HOMECONTACTO}>
            <Home homePage={homePage} contacto={true} />
          </Route>

          <Route exact path={ROUTES.STARTUPS}>
            <Emprendimientos
              perfiles={perfiles}
              searched={searched}
              error={error}
              perfilesFiltrados={perfilesFiltrados}
              setSearched={setSearched}
              setPerfiles={setPerfiles}
              setPerfilesFiltrados={setPerfilesFiltrados}
            />
          </Route>

          <Route exact path={ROUTES.STARTUPSSEARCH}>
            <Emprendimientos
              perfiles={perfiles}
              searched={searched}
              error={error}
              setSearched={setSearched}
              setPerfiles={setPerfiles}
            />
          </Route>

          <Route exact path={ROUTES.STARTUPFILTER}>
            <Emprendimientos
              perfiles={perfiles}
              searched={searched}
              error={error}
              perfilesFilter={perfilesFilter}
              setSearched={setSearched}
              setPerfiles={setPerfiles}
              setPerfilesFilter={setPerfilesFilter}
            />
          </Route>

          <Route exact path={ROUTES.STARTUPSLISTA}>
            <ListaContainer
              perfiles={perfiles}
              searched={searched}
              error={error}
              setSearched={setSearched}
              setPerfiles={setPerfiles}
            />
          </Route>

          <Route exact path={ROUTES.SINGLE}>
            {window.innerWidth > 700 ? <SingleEmpren /> : <SingleEmprenMovil />}
          </Route>

          <Route exact path={ROUTES.FAQ}>
            <Faq />
          </Route>

          <Route exact path={ROUTES.EXPERIENCE}>
            <Experience />
          </Route>

          <Route exact path={ROUTES.VASSAR}>
            <Vassar />
          </Route>

          <Route exact path={ROUTES.PATROCINADORES}>
            <Patrocinadores />
          </Route>

          <Route exact path={ROUTES.CMS_LOGIN}>
            <Login />
          </Route>
          <Route exact path={ROUTES.CMS_EMPRENDIMIENTO}>
            <Recopilacion />
          </Route>
          <Route exact path={ROUTES.FUNDACIONES}>
            <Fundaciones />
          </Route>

          <Route exact path={ROUTES.GALERIA}>
            <Galeria />
          </Route>

          <Route exact path={ROUTES.BLOG}>
            <Blog />
          </Route>

          <Route exact path={ROUTES.POST}>
            <Post />
          </Route>

          <Route exact path={ROUTES.CMS_ADMIN}>
            <LoginAdmin />
          </Route>

          <Route exact path={ROUTES.CMS_LISTA}>
            <ListaAdmin />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
