import React from 'react'
import { ROUTES } from '../Router/routes';

export const HomeFooter = ({showLogos}) => {

    return (
        <footer className="home-footer">
            {
                showLogos &&
                <div className="home-footer_top">
                    <div className="logos">
                        <div className="home-footer_logo logo1"></div>
                        <div className="home-footer_logo logo2"></div>
                        <div className="home-footer_logo logo3"></div>
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
