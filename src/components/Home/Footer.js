import React from 'react'
import { ROUTES } from '../Router/routes';

export const HomeFooter = ({showLogos}) => {

    return (
        <footer className="home-footer">
            {
                showLogos &&
                <div className="home-footer_top">
                    <div className="logos">
                   
                    </div>
                </div>
            }
            <div className="home-footer_bottom">
                <div className="">© VASSAR 2021</div>
                <div className="">Todos los derechos reservados</div>
            </div>
        </footer>
    )
}
