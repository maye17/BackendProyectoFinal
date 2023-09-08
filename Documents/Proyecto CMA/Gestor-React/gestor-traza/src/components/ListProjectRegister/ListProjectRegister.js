import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import {db} from '../../firebase/firebaseConfig'
import { collection, query, getDocs} from "firebase/firestore";
import NavLateral from "../NavLateral";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/index';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const ListProject =()=> {

  const  [datoProject, setDatoProject] = useState([]);
   

    const [isLoading, setisLoading] = useState(true)
let { id }= useParams();


    useEffect(()=> {
        const getProject = async() => {
            const q = query(collection(db,"projects"));
            const docs =[];
            const querySnaptshot = await getDocs(q);
            querySnaptshot.docs.map((doc)=> {
                docs.push({...doc.data(), id: doc.id})
                
            });
            
            setDatoProject(docs) 
             
            
            console.log('datoProject',datoProject);
        }
        getProject()
        setTimeout(()=>{
            setisLoading (false)
        }, 2000)
    },[id]);

    return(
        <div className="">
       {isLoading ? (
            <div className="Spinner">
                <Spinner/>
            </div>
        ):(
            <Container fluid>
                <section className="container__register">
                <NavLateral/>
                <Container fluid style={{ padding:'32px', marginTop:'20px' }}>
                <Button variant="light">Regresar</Button>             
                <Button variant="success">Agregar</Button>
                    <Table striped bordered hover size="sm" > 
                    <thead>
                        <tr>
                          <th>Proyecto</th>
                          <th>Link de acceso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datoProject.map((dato) => {
                            return(
                                <tr key={dato.id}>
                                    <td>{dato.nameProject}</td>
                                    <td><Link>{dato.linkProject}</Link></td>  
                                </tr>    
                                   

                            )
                            
                        })
                        }
                        
                    </tbody>
                    </Table>

        </Container>
        </section>
   </Container>
        )} 
        </div>
       
    )
}

export default ListProject;