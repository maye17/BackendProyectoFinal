import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/cma-logo.png';
import './style.css'
import Button from 'react-bootstrap/esm/Button';
import { FaQuestion } from "react-icons/fa";

const Navbar =()=> {


  /* const {user, logout,loading} = useAuth();
  const navigate = useNavigate();


  const handleLogout = async ()=> {
   await  logout()
   navigate('/login')
  };

  if(loading){
    return(<h1>Loading</h1>)
  }
 */

 

    return(
    
      <>
      <nav className="navbar navbar__container">
              <form className="container-fluid justify-content-end">
              <div className="card-body box__card__body-img mb-2">
                <Link to='/'>
                  <img src={Logo} className="card-img-top" alt="..."/>
                  </Link>
              </div>
                <Button 
                variant="secondary"
                className="me-2" type="button"><FaQuestion/></Button>
              </form>
            </nav>
            <Link to="/"></Link>    
      </>

 
    )
    
}

export default Navbar;

