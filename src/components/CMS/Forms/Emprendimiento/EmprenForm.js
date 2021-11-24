import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../../Common/Button';
import Form from '../../../Common/Form/Form';
import { Input } from '../../../Common/Form/Input';
import { Select } from '../../../Common/Form/Select';
import { FileUpload } from '../../../Common/Form/FileUpload'
import { emprenSchema } from './emprenSchema';
import { categorias } from './categorias';
import { getPerfil, updateProfile } from '../../../lib/api';
import { Redirect } from 'react-router';
import { Cargando } from '../../../Common/Cargando';
import { imagesValidator } from './file';


const fieldsToIgnore = []; // ["nombre"]

export const EmprenForm = ({ data }) => {
    const triggerSubmit = useRef(null);
    const formRef = useRef(null);
    const [perfil, setPerfil] = useState({})
    const [globalError, setGlobalError] = useState(false)
    const [globalErrorArchivos, setGlobalErrorArchivos] = useState(false)
    const [loading, setLoading] = useState(true)

    const realCategory = () => {
        return categorias.find(categ => categ.value === perfil.categoria);
    }


    const submitContenido = async (data) => {
        const userId = localStorage.getItem('userId');
        console.log("subtmitted", data);

        const {
            nombre,
            descripcion,
            categoria,
            urlInsta,
            urlWeb,
            galeriaImg1,
            galeriaImg2,
            galeriaImg3,
            galeriaImg4,
            galeriaImg5,
            imagenMenu,
            logo
        } = data;

        const newData = {
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoria,
            urlInsta: urlInsta,
            urlWeb: urlWeb
        }

        console.log(galeriaImg1,
            galeriaImg2,
            galeriaImg3,
            galeriaImg4,
            galeriaImg5,
            imagenMenu,
            logo)

        if (galeriaImg1 === '' || galeriaImg2 === '' || galeriaImg3 === '' || imagenMenu === '' || logo === '') {
            return setGlobalErrorArchivos(true)
        }

        // GUARDAR IMAGENES
        imagesValidator(userId, galeriaImg1, 'galeriaImg1');
        imagesValidator(userId, galeriaImg2, 'galeriaImg2');
        imagesValidator(userId, galeriaImg3, 'galeriaImg3');
        imagesValidator(userId, galeriaImg4, 'galeriaImg4');
        imagesValidator(userId, galeriaImg5, 'galeriaImg5');
        imagesValidator(userId, imagenMenu, 'imagenMenu');
        imagesValidator(userId, logo, 'logo');
        setLoading(true)

        // Submit to API
        const result = await updateProfile(newData, userId)

        if (result.status === 200) {
            setTimeout(() => {
                setLoading(false)
                document.querySelector('.modal').classList.add('show-modal')

            }, 5000);
        }

        fieldsToIgnore.forEach(field => {
            if (data[field])
                delete data[field]
        })



    }

    const doSubmit = () => {
        triggerSubmit.current.click()
    }

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        getPerfil(userId).then(data =>
            setPerfil(data.data.perfil)
        )
    }, []);

    const onErrors = errors => {
        console.log("aa", errors)
        if (Object.keys(errors).length > 0)
            setGlobalError(true)
    }

    const userId = localStorage.getItem('userId')

    if (!userId) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <Form ref={formRef} validationSchema={emprenSchema} onErrors={onErrors} onSubmit={submitContenido} render={({ control }) => {
                return (
                    <>
                        {Object.keys(perfil).length !== 0 ?
                            <div className="recopilacion_form">
                                <div className="form-field">
                                    <div className="indication">
                                        Nombre de tu emprendimiento
                                    </div>
                                    <Input control={control} name="nombre" placeholder="NOMBRE DEL EMPRENDIMIENTO" defaultValue={perfil.nombre} />


                                </div>
                                <div className="indication">
                                    Selecciona la categoría a la cual pertenece tu emprendimiento
                                </div>
                                <div className="form-field">
                                    <Select control={control} name="categoria" placeholder="CATEGORÍA" options={categorias} defaultValue={realCategory()} />

                                </div>

                                <div className="form-field">
                                    <div className="indication">
                                        Escribe una descripcion de la marca que contenga máximo 100 palabras
                                    </div>
                                    <Input control={control} name="descripcion" placeholder="DESCRIPCIÓN" maxLength="1000" type="textarea" defaultValue={perfil.descripcion} />


                                </div>

                                <div className="form-field mb-2">
                                    <div className="indication">
                                        Adjunta los links de su marca
                                    </div>

                                    <Input control={control} name="urlWeb" placeholder="LINK DE WEB" maxLength="200" defaultValue={perfil.urlWeb} />
                                </div>
                                <div className="form-field mb-2">
                                    <Input control={control} name="urlInsta" placeholder="LINK DE INSTA" maxLength="200" defaultValue={perfil.urlInsta} />


                                </div>

                                <div className="recopilacion_section">
                                    <h2>IMÁGENES DE LA MARCA</h2>

                                    <div className="indication">
                                        Se requieren de 3 a 5 imágenes características de la marca o sus productos que aparecerán en su perfil de la pagina web
                                    </div>
                                    <div className="indication">
                                        Las imágenes deben pesar máximo 500 KB cada una.
                                    </div>
                                    <div className="indication last-indication">
                                        Las imágenes deben medir 1000 x 1000 px (cuadradas).
                                    </div>

                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="galeriaImg1" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.galeriaImg1} required={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>
                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="galeriaImg2" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.galeriaImg2} required={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>
                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="galeriaImg3" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.galeriaImg3} required={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>
                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="galeriaImg4" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.galeriaImg4} opcional={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>
                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="galeriaImg5" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.galeriaImg5} opcional={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>


                                </div>

                                <div className="recopilacion_section mt-3">
                                    <h2>IMAGEN MENÚ</h2>

                                    <div className="indication">
                                        Se requiere 1 imagen características de la marca (sin texto), que aparecerá en el menú de la pagina web.
                                    </div>
                                    <div className="indication">
                                        Las imágenes deben pesar máximo 300 KB cada una.
                                    </div>
                                    <div className="indication">
                                        Las imágenes deben medir 300 x 300 px (cuadradas).
                                    </div>

                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="imagenMenu" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.imagenMenu} required={true} />
                                        </div>
                                        <div className="indication">.jpg</div>
                                    </div>


                                </div>

                                <div className="recopilacion_section mt-3">
                                    <h2>IMAGEN LOGO</h2>

                                    <div className="indication">
                                        Se requiere logo de la marca sin fondo.
                                    </div>
                                    <div className="indication">
                                        Las imagen deben pesar máximo 300 KB cada una.
                                    </div>
                                    <div className="indication">
                                        Las imagen deben medir 150 px de ancho.
                                    </div>

                                    <div className="file-field">
                                        <div className="">
                                            <FileUpload control={control} name="logo" onSelect={() => { }} setErrorFile={() => { }} defaultValue={perfil.logo} required={true} />
                                        </div>
                                        <div className="indication">.png</div>
                                    </div>


                                </div>

                                {globalError &&
                                    <div className="file-btn_error-msg global-error">
                                        <span className="file-btn_error-msg">
                                            EXISTEN ERRORES EN EL FORMULARIO

                                        </span>
                                    </div>
                                }

                                {globalErrorArchivos &&
                                    <div className="file-btn_error-msg global-error">
                                        <span className="file-btn_error-msg">
                                            <p>RECUERDA SUBIR LOS ARCHIVOS DE IMÁGENES OBLIGATORIOS</p>
                                        </span>
                                    </div>
                                }

                                <div className="recopilacion_submit">

                                    {!loading ?
                                        <Button hoverDirection="left" className="inline mx-auto" onClick={doSubmit}>
                                            <span>Enviar</span>
                                        </Button>

                                        :
                                        <div className="loading-msg">
                                            <span>Estamos guardando tu información: Por favor no cierres esta pestaña. </span>
                                        </div>
                                    }


                                    <input ref={triggerSubmit} hidden type="submit" />
                                </div>

                            </div>
                            :
                            <Cargando />

                        }
                    </>
                )
            }} />
        </>
    )
}
