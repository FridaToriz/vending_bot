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

    //la siguiente función es para englobar los mensajes de error y hacer el código más limpio
    const validateInput = (email, password) =>{
        let isValid = true;
        let emailError = "";
        let passwordError = "";

        if (!email.includes("@")){
            emailError = "Correo electrónico no válido";
            isValid= false;
        }

        if (password.length <8) {
            passwordError = "La contraseña debe tener al menos 8 caracteres";
            isValid = false;
            
        }
        return {isValid, emailError, passwordError};
    };
    //const [email, setEmail]= useState("");
    //const [password, setPassword]= useState("");
    const [emailError, setEmailError]= useState("");
    const [passwordError, setPasswordError]= useState(""); 
    // esto servirá para poder agregar mensajes de error en caso de que le usuarie llene mal el campo de email o contraseña
    const [registroDatos, setRegistroDatos] = useState({
        nombre: " ",
        email: " ",
        contraseña: " "
    });
    const [ingresarDatos, setIngresarDatos] = useState({
        email:" ",
        contraseña:" "
    });
    //estas dos evitan que los datos ingresados en un formulario se muestren en el otro

    const handleRegistro = () =>{
        //valida la entrada de le usuarie
        const { isValid, emailError, passwordError} =validateInput(registroDatos.email, registroDatos.contraseña);
        if (!isValid) {
            setEmailError(emailError);
            setPasswordError(passwordError);
            return;
            //si los datos son válidos, continúa el registro
        }
    };

    const handleIngresar = () =>{
        //valida la entrada de le usuarie en el formulario de ingresar
       const {isValid, emailError, passwordError} = validateInput(ingresarDatos.email, ingresarDatos.contraseña);
       if (!isValid) {
        setEmailError(emailError);
        setPasswordError(passwordError);
        return;
        //continua si el ingreso es válido
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
                    <input id="email" 
                    type="email" 
                    required 
                    placeholder="Correo electrónico"
                    value={action === "Registro"? registroDatos.email : ingresarDatos.email} 
                    onChange={(e) => 
                        action === "Registro" ? setRegistroDatos({
                            ...registroDatos,
                            email: e.target.value
                        })
                        : setIngresarDatos ({
                            ...ingresarDatos,
                            email: e.target.value
                        })
                    }  
                     /> 
                     {/* //el span es para que el mensaje se muestre abajo en vez de a un lado */}
                    
                    {emailError && <span className="error-message"> {emailError}</span>} 
                </div> 
                     
            </div> 
            <div className="inputs">
                <div className="input">
                    <img src= {password_icon} alt="ícono de candado" />
                    <input id="password" 
                    type="password" 
                    minLength="8" 
                    pattern="[a-z0-5]{8}" 
                    required
                    placeholder="Contraseña"
                    value={action=== "Registro"? registroDatos.contraseña : ingresarDatos.contraseña} 
                    onChange={(e)=> 
                        action === "Registro"
                        ? setRegistroDatos({
                            ...registroDatos,
                            contraseña: e.target.value
                        })
                        : setIngresarDatos({
                            ...ingresarDatos,
                            contraseña: e.target.value
                        })
                    }
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
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
                        handleIngresar();
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