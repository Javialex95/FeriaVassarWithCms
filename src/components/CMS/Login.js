import React from 'react'
import { LoginForm } from './Forms/Login/LoginForm'

export const Login = () => {
    return (
        <section className="login">
            <div className="login_container">
                <h1>
                    Recopilación de <strong>assets</strong>
                </h1>

                <div className="forms">
                    <LoginForm />
                </div>

                {/* <HomeFooter /> */}

            </div>
        </section>
    )
}
