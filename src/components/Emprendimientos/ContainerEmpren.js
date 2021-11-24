import React, { useEffect, useState } from 'react'
import { Startup } from './Startup'
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Button } from '../Common/Button';
import { rightArrowEmpre } from '../Common/Icons';
import { Cargando } from '../Common/Cargando';

export const ContainerEmpren = ({ perfilesFilter, filtro, perfiles, error }) => {

    const [perfilesNew, setPerfilesNew] = useState([])


    useEffect(() => {

        function splitToBulks(arr, bulkSize = 20) {
            const bulks = [];
            for (let i = 0; i < Math.ceil(arr.length / bulkSize); i++) {
                bulks.push(arr.slice(i * bulkSize, (i + 1) * bulkSize));
            }
            return bulks;
        }

        if (filtro === undefined) {

            const newProfiles = perfiles.filter(perf => perf.logo !== '');

            let result = splitToBulks(newProfiles, 20);
            setPerfilesNew(result)

        } else {
            let result = splitToBulks(perfilesFilter, 20);
            setPerfilesNew(result)
        }


    }, [filtro, perfiles, perfilesFilter]);


    return (
        <div className="container-startups">
            {
                window.innerWidth > 700 &&

                <>
                    <Header
                        galeria={true}
                    />

                    <div className="narrow-right">
                        {rightArrowEmpre}
                    </div>
                </>

            }



            <div className="container-startups-itemsContainer">

                <div className="container-startups-itemsContainer-items">

                    {perfilesNew.length !== 0 &&
                        <>
                            {perfilesNew.map((perf, i) => (
                                <div className={`items-container items-container_${i + 1}`}>

                                    <div className="items flex">
                                        {perf.map((perfil, i) => (
                                            <>


                                                {perfil.logoUrl !== '' &&
                                                    <Link to={`/emprendimiento/${perfil._id}`}>
                                                        <Startup
                                                            key={perfil._id}
                                                            perfil={perfil}
                                                        />
                                                    </Link>
                                                }


                                            </>
                                        ))}
                                    </div>

                                </div>
                            ))
                            }
                        </>

                    }



                    {perfiles.length === 0 && error === '' &&


                        <Cargando />


                    }

                    {perfiles.length === 0 && error !== '' &&
                        <div className="cargando" >

                            <h3>{error} </h3>
                        </div>

                    }
                </div>

                {window.innerWidth < 700 &&
                    <Link className="movil-boton" to="/emprendimientos-lista" >
                        <Button
                            children="Ver lista"
                            className="sidebarButton"

                        />
                    </Link>
                }


            </div>

        </div>
    )
}
