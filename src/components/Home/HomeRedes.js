import React from 'react'
// import { twitter, facebook, envelope, whatsapp } from '../Common/Icons'
import {  instagram,  } from '../Common/Icons'

export const HomeRedes = () => {
    return (
        <div className="home-redes">
            <div className="home-redes_container">
                <div className="home-redes_item">
                    <a href="https://www.instagram.com/vassarferia/" target="_blank" rel="noreferrer" >{instagram}</a>
                </div>
                {/* <div className="home-redes_item">
                    <a href="!#" target="_blank" rel="noreferrer"  without rel="noreferrer" >{twitter}</a>
                </div>
                <div className="home-redes_item">
                    <a href="mailto:maria.pardo@paramopresenta.com" target="_blank" rel="noreferrer"  without rel="noreferrer" >{envelope}</a>
                </div>
                <div className="home-redes_item">
                    <a href="!#" target="_blank" rel="noreferrer"  without rel="noreferrer" >{facebook}</a>
                </div>
                <div className="home-redes_item">
                   <a href="!#" target="_blank" rel="noreferrer"  without rel="noreferrer" > {whatsapp}</a>
                </div> */}
            </div>
        </div>
    )
}
