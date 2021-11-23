import React from 'react'
import { Button } from '../Common/Button'

export const HomeEntradas = () => {
    return (
        <div className="home-entradas flex">

            <div className="fechas">
                <h2>
                    Del 10 al 16 de diciembre <br />
                    <strong>Parque El Country</strong>
                </h2>
                <span>
                    CALLE 127 # 12, BOGOTÁ
                </span>
            </div>

            <Button >
                Adquiere tus entradas a <strong>Vassar</strong>
            </Button>

        </div>
    )
}
