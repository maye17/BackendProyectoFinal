import React, { useState } from "react";
import {useAuth} from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavLateral from "../../components/NavLateral";
import './register.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";



const Register =() => {

    const [user, setUser] = useState(
        {
            email:"",
            password:"",
        }
    );

    const {singup} = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]:value})
        
    }

    const handleSubmit = async () => {
        setError('')
        try {
           await singup(user.email, user.password)
            navigate('/')       
            
        } catch (error) {
            if(error.code ==="auth/invalid-email")
            {
                setError(
                    toast.error('Correo invalido', {
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
            else if (error.code === "auth/weak-password") {
                setError(
                    toast.error('La contraseña debe tener mínimo 6 caracteres', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                )
            } 
            else if (error.code === "auth/email-already-in-use"){
                setError(
                    toast.error('El email ya esta registrado', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                )
            }
        }               
    } 
       
    
    return(
        <>
        <Container fluid>
         <section className="container__register">
         <NavLateral />  
         <Container fluid style={{ padding:'32px', marginTop:'20px' }}>
         <Button variant="light">Regresar</Button>{' '}
             <Row>
             <Form.Label  style={{ margin:'20px', fontSize:'20px' , fontWeight:'bold', color:'#3C53B6'}}>Crear Usuarios</Form.Label>
             </Row>
            <Container fluid  style={{ border: '1px solid #D2D2D5', borderRadius:'8px', padding:'32px', margin:'20px', background:'#F0F0F0' }}>
            <Row>
                <Col xs={4}>
                <Form.Label column="sm" lg={2}
                     htmlFor='user'
                    >Usuario:
                </Form.Label>
                    <Form.Control 
                        type="user" name="user"
                        id="user" 
                        value={user.user} 
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={4}>                
                <Form.Label column="sm" lg={2} 
                     htmlFor='name'
                    >Nombre:
                </Form.Label>
                    <Form.Control
                        type="text" name="name"
                        id="name" 
                        value={user.name} 
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={4}>
                <Form.Label column="sm" lg={2} 
                     htmlFor='lastname'
                    >Apellido:
                </Form.Label>
                    <Form.Control 
                        type="text" name="lastname"
                        id="lastname" 
                        value={user.lastname} 
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={6}>
                <Form.Label column="sm" lg={4}
                     htmlFor='email'
                >Correo electrónico:
                </Form.Label>
                    <Form.Control
                        type="email" name="email"
                        id="email" 
                        value={user.email} 
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={6}>
                <Form.Label column="sm" lg={2}
                     htmlFor='password'
                >Contraseña:
                </Form.Label>
                    <Form.Control 
                        type="email" name="password"
                        id="password" 
                        value={user.password} 
                        onChange={handleChange}
                    />
                </Col>
                <Col  md={{ span: 6, offset: 5 }}>
                <Button  as="input" type="submit" value="Guardar" onClick={handleSubmit} />
                <Button  as="input" type="submit" value="Cancelar" variant="danger"  />
                </Col>
            </Row>
            </Container>
            </Container>

         
    {/*         <form className="box__card card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <div className="box__card__body-img mb-2">
                    </div>
                    <div className="box__card__body-pa mb-2">
                        <h4>Crea tu cuenta</h4>
                    </div>
                    <div className="box__card__body-text mb-2">
                        <label 
                        htmlFor='email'
                        className="col-sm-8 col-form-label">Ingresa tu usuario</label>
                        <div className="col-sm-10">
                            <input 
                            className="box__card__body-input-user form-control "
                            type="email" name="email"
                            id="email" 
                            value={user.email} 
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="box__card__body-text mb-2">
                        <label 
                        htmlFor='password'
                        className="col-sm-8 col-form-label">Ingresa tu contraseña</label>
                        <div className="col-sm-10">
                        <input 
                            className="box__card__body-input-user form-control "
                            type="password" name="password"
                            id="password"
                            value={user.password} 
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="box__card__body-btn mb-2">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="button" className="btn btn-lg btn  btn-primary" id="ingresar"
                            onClick={handleSubmit}>Registrarse</button>
                        </div>
                    </div>
                </div>
              </form> */}
             </section> 
             <ToastContainer />
             </Container> 
        </>
    )
}

export default Register;