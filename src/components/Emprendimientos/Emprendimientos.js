import React, { useEffect } from "react";
import { ContainerEmpren } from "./ContainerEmpren";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useParams } from "react-router-dom";
import { searchPerfiles } from "../lib/api";

export const Emprendimientos = ({
  perfilesFiltrados,
  perfilesFilter,
  perfiles,
  searched,
  error,
  setSearched,
  setPerfiles,
  setPerfilesFilter,
  setPerfilesFiltrados,
}) => {
  let { search } = useParams();
  let { filtro } = useParams();

  useEffect(() => {
    if (search !== undefined) {
      searchPerfiles(search).then((data) => setSearched(data.data));
    }
  }, [search, setSearched]);

  useEffect(() => {
    if (filtro !== undefined && perfiles.length !== 0) {
      const result = perfiles.filter(
        (perfil) => perfil.categoria === filtro.toLowerCase()
      );
      setPerfilesFilter(result);
    }
  }, [filtro, perfiles, setPerfilesFilter]);

  return (
    <div className="flex emprendimientos-container">
      {window.innerWidth < 700 && <Header galeria={true} />}

      <Sidebar
        perfiles={perfiles}
        buttonText="Ver"
        lastWord="listado"
        url="/emprendimientos-lista"
        search={search}
        filtro={filtro}
        setSearched={setSearched}
        setPerfiles={setPerfiles}
        setPerfilesFiltrados={setPerfilesFiltrados}
        galeria={true}
      />
      <ContainerEmpren
        perfilesFiltrados={perfilesFiltrados}
        perfiles={perfiles}
        searched={searched}
        search={search}
        error={error}
        filtro={filtro}
        perfilesFilter={perfilesFilter}
        setSearched={setSearched}
      />
    </div>
  );
};
