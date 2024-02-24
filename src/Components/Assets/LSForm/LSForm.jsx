import React, { useState } from "react"
import "./LSForm.css"

import user_icon from "../usuario.png"
import mail_icon from "../mail.png"
import password_icon from "../password.png"

const LSFormulario = () => {

    const [action,setAction]= useState("Registro");
    const [showName, setShowName] = useState(true);//esta de aquí es para usar valores booleanos en el código y que esté más limpio y sea más sencillo de leer

    const handleForgotPasswordClick = () =>{
        //esto es para redirigir al usuario a una página de recuperación de contraseña
        window.location.href = "/url para la página de recuperarcontraseña";
    };

    return(
        <div className="container">
            <div className="header">
                <div className="text"> {action} </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {showName && (
                    <div className="input">
                        <img src= {user_icon} alt="ícono de usuarie" />
                        <input id="Name" type="text" required placeholder="Nombre" />
                </div> )}
           
            </div>
            <div className="inputs">
                <div className="input">
                    <img src= {mail_icon} alt="ícono de email" />
                    <input id="email" type="email" required placeholder="Correo" />
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src= {password_icon} alt="ícono de candado" />
                    <input id="password" type="password" minLength="8" pattern="[a-z0-5]{8}" required placeholder="Contraseña" />
                </div>
            </div>
            {action==="Ingresar" &&(   //esto hace que sólo se muestre en la parte de Ingresar  
                <div  className="forgot-password">¿Olvidaste tu contraseña? <span onClick={handleForgotPasswordClick}>Click aquí</span> </div> 
            )}
            
            <div className="submit-container">
                <div
                    className={action === "Ingresar"? "submit gray" : "submit"}
                    onClick={()=> {
                        setAction("Registro");
                        setShowName(true); //esto muestra el nombre cuando le das en "regsitro" 
                    }} //el {" "} es sólo un espacio en blanco que se deja por fines de mejorar la legibilidad 
                > 
                    {" "} 
                    Registro
                </div> 
                <div 
                    className={action==="Registro"?"submit gray":"submit"}
                    onClick={()=>{
                        setAction("Ingresar");
                        setShowName(false); //esto oculta el campo de nombre cuando le dan en ingresar
                    }}
                >
                    Ingresar
                </div>
            </div>
        </div>
    )
}

export default LSFormulario