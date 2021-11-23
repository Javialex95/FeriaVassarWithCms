import React, { useState } from 'react'
import { Button } from '../Common/Button'
import { Filtros } from '../Common/Filtros'
import { Search } from '../Common/Search'
import {
    Link
} from "react-router-dom";

export const Sidebar = ({ setSearched, setPerfiles, className, buttonText, url, perfiles, filtro, search, lastWord }) => {

    const [hideSearch, setHideSearch] = useState(false);
    const [hideFilter, setHideFilter] = useState(false);

    return (
        <div className={`sidebar ${className}`}>

            {filtro === undefined && search === undefined ?
                <>
                    {!hideSearch ?

                        <Search
                            setSearched={setSearched}
                            setPerfiles={setPerfiles}
                            setHideFilter={setHideFilter}
                        />
                        :
                        <div className="no-search"></div>

                    }

                    {!hideFilter ?

                        <Filtros
                            perfiles={perfiles}
                            filtro={filtro}
                            setHideSearch={setHideSearch}
                        />
                        :
                        null

                    }


                    {window.innerWidth > 700 &&
                        <Link to={url} >
                            <Button className="sidebarButton">
                                <span>{buttonText} <strong>{lastWord}</strong></span>
                            </Button>
                        </Link>
                    }

                </>
                :
                <Link to='/emprendimientos' >
                    <Button
                        children="Ver"
                        lastWord="todos"
                        className="sidebarButton"

                    />
                </Link>


            }

            {window.innerWidth > 700 &&
                <div className="sidebar-footer flex">
                    <div>
                        © VASSAR 2021
                    </div>

                    <div>
                        Todos los derechos reservados
                    </div>
                </div>

            }


        </div>
    )
}
