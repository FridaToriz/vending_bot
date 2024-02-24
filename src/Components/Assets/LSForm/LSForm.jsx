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

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [emailError, setEmailError]= useState("");
    const [passwordError, setPasswordError]= useState(""); 
    // esto servirá para poder agregar mensajes de error en caso de que le usuarie llene mal el campo de email o contraseña

    const handleRegistro = () =>{
        //valida la entrada de le usuarie
        let isValid = true;
        if (!email.includes("@")){
            setEmailError ("Correo electrónico no válido");
            isValid = false;
        } else {
            setEmailError("");
        }
        if (password.length<8) {
            setPasswordError("La contraseña debe tener al menos 8 caracteres")
            isValid = false; 
        } else {
            setPasswordError("");
        } //si la entrada es válida, continúa el registro
        if (isValid){

        }
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
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Correo electrónico" />
                    {emailError && <div className="error-message"> {emailError}</div>}
                </div> 
                     
            </div> 
            <div className="inputs">
                <div className="input">
                    <img src= {password_icon} alt="ícono de candado" />
                    <input id="password" type="password" minLength="8" pattern="[a-z0-5]{8}" value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder="Contraseña" />
                    {passwordError && <div className="error-message">{passwordError}</div>}
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
                        setShowName(true); 
                        handleRegistro();
                        //esto muestra el nombre cuando le das en "regsitro" 
                        //y también hace que el botón de registro realmente sea un botón
                    }} //el {" "} es sólo un espacio en blanco que se deja por fines de mejorar la legibilidad 
                > 
                    {" "} 
                     Registro
                </div> 
                <div 
                    className={action==="Registro"?"submit gray":"submit"}
                    onClick={()=>{
                        setAction("Ingresar");
                        setShowName(false); 
                        handleRegistro();
                        //esto oculta el campo de nombre cuando le dan en ingresar
                    }}
                >
                    Ingresar
                </div>
            </div>
        </div>
    )
}

export default LSFormulario