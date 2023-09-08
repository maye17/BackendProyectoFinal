import React from "react";
/* import { useAuth } from "../../context/AuthContext"; */
import NavLateral from "../../components/NavLateral";
import './principal.css'
import Container from 'react-bootstrap/Container';
import Inicio from "../../components/Inicio";




const Principal =()=>{



/* 
    
    const navigate = useNavigate()
   
    const handleLogout = async ()=> {
        await logout()
        navigate('/')
    }
 */

 /*    const [isLoading, setisLoading] = useState(true);
    setTimeout(()=> {
        setisLoading(false)
    },2000) */
  
    return(
        
        <>
        <Container fluid>
            <div className="container-all">
                <NavLateral />
                    <div className="container-all-first">  
                    <h1>Bienvenido</h1>
                    <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                   
            </div>
            </div>
            <Inicio/>
           
        </Container>
        </>
    )
}

export default Principal;