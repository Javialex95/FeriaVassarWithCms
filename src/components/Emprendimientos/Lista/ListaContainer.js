import React, { useEffect } from 'react'
import { Header } from '../Header';
import { Sidebar } from '../Sidebar'
import { ListaEmprend } from './ListaEmprend';

export const ListaContainer = ({ perfiles, searched, error, setSearched, setPerfiles }) => {

    useEffect(() => {
        setSearched([])
    }, [setSearched]);


    return (
        <div className="flex lista-emprendi-container">
            {window.innerWidth < 700 &&
                <div className="header-movil-lista">
                    <Header />
                    <Sidebar
                        setSearched={setSearched}
                        setPerfiles={setPerfiles}
                        perfiles={perfiles}
                        className='orange'
                        buttonText='Ver galería'
                        url="/emprendimientos"

                    />
                </div>
            }

            {window.innerWidth > 700 &&

                <Sidebar
                    setSearched={setSearched}
                    setPerfiles={setPerfiles}
                    perfiles={perfiles}
                    className='orange'
                    buttonText='Ver galería'
                    url="/emprendimientos"

                />
            }
            <ListaEmprend

                perfiles={perfiles}
                searched={searched}
                error={error}
            />
        </div>
    )
}
