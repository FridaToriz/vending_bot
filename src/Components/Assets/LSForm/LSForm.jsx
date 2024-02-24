import React, { useState } from "react"
import "./LSForm.css"

import user_icon from "../usuario.png"
import mail_icon from "../mail.png"
import password_icon from "../password.png"

const LSFormulario = () => {

    const [action,setAction]= useState("Registro");

    return(
        <div className="container">
            <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
            {action==="Ingresar"?<div></div>: <div className="input">
                <img src= {user_icon} alt="ícono de usuarie" />
                <input id="Name" type="text" required placeholder="Nombre" />
            </div> }
           
            </div>
            <div className="inputs">
            <div className="input">
                <img src= {mail_icon} alt="ícono de email" />
                <input id="email" type="email" required placeholder="Correo" />
            </div>
            </div>
            <div className="inputs">
            <div className="input">
                <img src= {password_icon} alt="ícono de contraseña" />
                <input id="password" type="password" minLength="8" pattern="[a-z0-5]{8}" required placeholder="Contraseña" />
            </div>
            </div>
            {action==="Registro"?<div></div>:<div className="forgot-password">¿Olvidaste tu contraseña? <span>Click aquí</span> </div> }
            
            <div className="submit-container">
                <div className= {action==="Ingresar"?"submit gray":"submit"} onClick={()=>{setAction("Registro")}} > Registro</div>
                <div className= {action==="Registro"?"submit gray":"submit"} onClick={()=>{setAction("Ingresar")}} >Ingresar</div>
            </div>
        </div>
    )
}

export default LSFormulario