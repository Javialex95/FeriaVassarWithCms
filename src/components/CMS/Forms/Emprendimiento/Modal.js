import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Common/Button';

export const Modal = () => {
    const userId = localStorage.getItem('userId')

    return (
        <div className="modal">

            <div className="modal-container">
                <div className="modal-container-info">
                    <p>
                        ¡Hemos actualizado tu información!
                    </p>

                    <Link to={`/emprendimiento/${userId}`}>
                        <Button className="modal-button" >
                            Ir a tu perfil
                        </Button>
                    </Link>

                </div>
            </div>

        </div>
    )
}
