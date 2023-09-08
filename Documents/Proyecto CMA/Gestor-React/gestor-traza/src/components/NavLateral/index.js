import React from 'react';
import './Navlateral.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaHome, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

import { CDBBtn, CDBContainer } from "cdbreact";
import Container from 'react-bootstrap/esm/Container';

const NavLateral = ({flagNavLateral}) => {

    
    const {user,logout} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async ()=> {
        await logout()
        navigate('/')
    }

  return (
    (!flagNavLateral) ?
    <>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Menú
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">
              <Link to='/Principal'>
              Home
              </Link>
              </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user" iconType="solid">
            <Link to ={`/register`}>
                            Usuarios
                        </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="users">Perfiles</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="plus-square" iconType="solid">
            <Link to ={`/Proyectos`}>
                        Proyecto
                        </Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <CDBSidebarMenuItem icon="arrow-left" iconType="solid" style={{ color: 'red'}} onClick={handleLogout}>
        Logout
            </CDBSidebarMenuItem>
         {/*  <div
            className="sidebar-btn-wrapper"
            style={{padding: '30px 75px'}}
          > */}
            
         {/*  </div> */}
        </CDBSidebarFooter>
      </CDBSidebar>
      </>
      :null
  );
};

export default NavLateral;