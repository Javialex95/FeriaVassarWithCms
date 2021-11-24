import React, { useRef, useState } from 'react'
import { Button } from '../../../Common/Button';
import { loginSchema } from '../Login/loginSchema'
import Form from '../../../Common/Form/Form';
import { Input } from '../../../Common/Form/Input';
import { login } from '../../../lib/api';
import {
    Redirect
} from "react-router-dom";

export const LoginForm = () => {
    const triggerSubmit = useRef(null);
    const [errorLogin, setErrorLogin] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false)

    const submitContenido = async (data) => {
        console.log("Submit triggerd and validated", data)
        // Handle submit here

        await login(data)
            .then(data => {
                if (data.data.id) {
                    setErrorLogin(false)
                    localStorage.setItem('userId', data.data.id);
                    setLoginSuccessful(true)
                }
            }).catch(err => {
                if (err) {
                    setErrorLogin(true)

                    setTimeout(() => {
                    setErrorLogin(false)
                        
                    }, 2000);
                }
            })

    }

    const doSubmit = () => {
        triggerSubmit.current.click()
    }
    
    const userId = localStorage.getItem('userId');

    console.log(userId)

    if(loginSuccessful || userId){
       return <Redirect to="/profile" />
    }

    return (
        <>
            <Form validationSchema={loginSchema} onSubmit={submitContenido} render={({ control }) => {
                return (
                    <>
                        <div className="login_form">
                            <div className="form-field">
                                <Input control={control} name="user" placeholder="Nombre de usuario" />
                            </div>

                            <div className="form-field mt-3">
                                <Input control={control} name="password" placeholder="Contraseña"  />
                            </div>

                            <>
                                <Button hoverDirection="left" className="inline mx-auto" onClick={doSubmit}>
                                    <span>entrar</span>
                                </Button>
                                <input ref={triggerSubmit} hidden type="submit" />
                            </>

                        </div>
                    </>
                )
            }} />
        </>
    )
}
