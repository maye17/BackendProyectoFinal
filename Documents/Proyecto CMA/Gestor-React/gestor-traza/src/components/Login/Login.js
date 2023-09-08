import React, { useState } from "react";
import {useAuth} from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



const Login =() => {


    const [user, setUser] = useState(
        {
            email:"",
            password:"",
        }
    );

    const {login} = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]:value})
       
    }

    const handleLogin = async () => {
        setError('')
        try {
           await login(user.email, user.password)
            navigate('/principal')    

          
            
        } catch (error) {
             if(error.code === "auth/user-not-found")
            {
                setError(
                    toast.error('usuario no existe', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        })
                )
            }
            else if (error.code= "auth/wrong-password") {
                setError(
                    toast.error('Contraseña invalida', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        })) 
                      /*   auth/user-not-found --> usuario no existe
                        auth/wrong-password --> contraseña invalida */
            }                 
            
            } 
            
        }
              
    
       
    
    return(
        <>          
            <section className="box container-fluid">
            <div className="box__card card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <div className="box__card__body-img mb-2">
                    </div>
                    <div className="box__card__body-pa mb-2">
                        <h4>Inicio de sesión</h4>
                    </div>
                    <div className="box__card__body-text mb-2">
                        <label 
                        htmlFor='email'
                        className="col-sm-2 col-form-label">Usuario:</label>
                        <div className="col-sm-10">
                            <input 
                            className="box__card__body-input-user form-control "
                            type="email" name="email"
                            id="email"
                            placeholder="correo electrónico"
                            onChange={handleChange} />
                        </div>
                    </div>
                    <div className="box__card__body-text mb-2">
                        <label 
                        htmlFor='password'
                        className="col-sm-2 col-form-label">Password:</label>
                        <div className="col-sm-10">
                        <input 
                            className="box__card__body-input-user form-control "
                            type="password" name="password"
                            id="password" 
                            placeholder="contraseña"
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="box__card__body-btn mb-2">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button type="button" variant="primary" id="ingresar" onClick={handleLogin}>Ingresar</Button>
                        </div>
                        <div className="mb-2">
                        <Button type="button" id="recuperar" variant="link">¿Olvidaste tu contraseña?</Button>
                    </div>                   
                  
                    </div>
                </div>
              </div>
             </section>  
             <ToastContainer />
        </>
    )
}

export default Login;