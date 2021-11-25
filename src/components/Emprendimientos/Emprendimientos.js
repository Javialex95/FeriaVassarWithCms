import React, { useEffect } from 'react'
import { ContainerEmpren } from './ContainerEmpren'
import { Sidebar } from './Sidebar'
import { Header } from './Header';
import {
    useParams
} from "react-router-dom";
import { searchPerfiles } from '../lib/api';


export const Emprendimientos = ({ perfilesFilter, perfiles, searched, error, setSearched, setPerfiles, setPerfilesFilter }) => {

    let { search } = useParams();
    let { filtro } = useParams();

    useEffect(() => {
        if (search !== undefined) {
            searchPerfiles(search).then(data => setSearched(data.data)
            );
        }
    }, [search, setSearched]);


    useEffect(() => {
        if (filtro !== undefined && perfiles.length !== 0) {
            const result = perfiles.filter(perfil => perfil.categoria === filtro.toLowerCase());
            setPerfilesFilter(result)
        }

    }, [filtro, perfiles, setPerfilesFilter]);

    return (
        <div className="flex emprendimientos-container">
            {
                window.innerWidth < 700 &&
                <Header
                    galeria={true}
                />
            }

            <Sidebar
                setSearched={setSearched}
                perfiles={perfiles}
                setPerfiles={setPerfiles}
                buttonText='Ver'
                lastWord='listado'
                url="/emprendimientos-lista"
                search={search}
                filtro={filtro}
            />
            <ContainerEmpren
                perfiles={perfiles}
                searched={searched}
                error={error}
                filtro={filtro}
                perfilesFilter={perfilesFilter}
                setSearched={setSearched}
            />
        </div>
    )
}
