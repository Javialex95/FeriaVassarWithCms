import React, { useEffect } from 'react'
import { HomeManifesto } from './HomeManifesto'
import { HomeSlider } from './HomeSlider'
import { HomeEmpren } from './HomeEmpren'
import { HomeExperience } from './HomeExperience'
import { HomeRedes } from './HomeRedes'
import { HomeContacto } from './HomeContacto'
import { HomeFooter } from './Footer'
import { HomeEntradas } from './HomeEntradas'

export const Home = ({ contacto }) => {

    useEffect(() => {
        if (contacto) {
            const contactoVar = document.getElementById('contacto')
            if (contactoVar) {
                contactoVar.scrollIntoView();
            }
        }
    }, [contacto]);


    return (
        <div id="home" className="home">
            <HomeSlider />
            <HomeEntradas />
            <HomeManifesto />
            <HomeEmpren />
            <HomeExperience />
            <HomeRedes />
            <HomeContacto />
            <HomeFooter showLogos={true} />
        </div>
    )
}
