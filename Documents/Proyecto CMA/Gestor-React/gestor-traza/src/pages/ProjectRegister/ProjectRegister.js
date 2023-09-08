import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavLateral from "../../components/NavLateral";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";




const dataInitial = {
    nombre:"",
    link:"",   
  }
  
  

const AddLink =()=> {

    const [datosProject, setDatosProject] =useState(dataInitial);

    const [nameProject, setNameProject] = useState('');
    const [linkProject, setLinkProject] = useState('');

  /*   const datos= {
        dataInitial:(datosProject)
    }; */

    
  /*   const datosChange =(e)=> {
        const {value, name} =e.target;
        setDatosProject({...datosProject, [name]:value})
    } */

    const datosChange=(e)=>{
        setNameProject(e.target.value)
    }

    const datosChangeLink=(e)=> {
        setLinkProject(e.target.value)
    }

    const enviarDatos = async ()=> {
        if(nameProject=="" && linkProject.link=="" ){
            toast.success('Por favor complete los campos', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        }else {
            const db =getFirestore();
            const docRef =await addDoc(collection(db,"projects"), {
                linkProject, nameProject
            },
            toast.success('datos guardados con éxito!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
            )
            /* setDatosProject(dataInitial); */
            setNameProject('')
            setLinkProject('')
        }
    }

console.log(name);
    return(
        <>
        <Container fluid>
        <section className="container__register">
        <NavLateral />  
         <Container fluid style={{ padding:'32px', marginTop:'20px' }}>
         <Button variant="light">Regresar</Button>{' '}
             <Row>
             <Form.Label  style={{ margin:'20px', fontSize:'20px' , fontWeight:'bold', color:'#3C53B6'}}>Crear Proyecto</Form.Label>
             </Row>      
            <Container fluid  style={{ border: '1px solid #D2D2D5', borderRadius:'8px', padding:'32px', margin:'20px', background:'#F0F0F0' }}>
            <Row>
                <Col xs={4}>
                <Form.Label column="sm" lg={2}
                     htmlFor='nombre'
                    >proyecto:
                </Form.Label>
                    <Form.Control 
                        type="text" name="nombre"
                        id="nombre" 
                        value={nameProject} 
                        onChange={datosChange}
                    />
                </Col>
                <Col xs={8}>                
                <Form.Label column="sm" lg={2} 
                     htmlFor='link'
                    >Link:
                </Form.Label>
                    <Form.Control
                        type="text" name="link"
                        id="link" 
                        value={linkProject} 
                        onChange={datosChangeLink}
                    />
                </Col>
                <Col  md={{ span: 4 , offset: 5 }}>
                <Button  as="input" type="submit" value="Guardar" onClick={enviarDatos} />
                <Button  as="input" type="submit" value="Cancelar" variant="danger"  />
                </Col>
            </Row>
            </Container>
            <ToastContainer />
        </Container>
        </section>
        </Container>
        </>
    )
}

export default AddLink;