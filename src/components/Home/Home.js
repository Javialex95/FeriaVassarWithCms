import React from 'react'
import { HomeManifesto } from './HomeManifesto'
import { HomeSlider } from './HomeSlider'
import { HomeEmpren } from './HomeEmpren'
import { HomeExperience } from './HomeExperience'
import { HomeRedes } from './HomeRedes'
import { HomeContacto } from './HomeContacto'
import { HomeFooter } from './Footer'
import { HomeEntradas } from './HomeEntradas'

export const Home = () => {
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
