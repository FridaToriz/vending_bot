import React from "react"
import "./LSForm.css"

import user_icon from "../Assets/usuario.png"
import mail_icon from "../Assets/mail.png"
import password_icon from "../Assets/password.png"

const LSForm = () => {
    return(
        <div className="container">
            <div className="header">
            <div className="text">Registarse</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src= {user_icon} alt="" />
                <input type="text"/>
            </div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src= {mail_icon} alt="" />
                <input type="email"/>
            </div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src= {password_icon} alt="" />
                <input type="password"/>
            </div>
            </div>
            <div className="forgot-password">¿Olvidaste tu contraseña? <span>Click aquí</span> </div>
            <div className="submit-container">
                <div className="submit">Registrarse</div>
                <div className="submit">Entrar</div>
            </div>
        </div>
    )
}

export default LSForm