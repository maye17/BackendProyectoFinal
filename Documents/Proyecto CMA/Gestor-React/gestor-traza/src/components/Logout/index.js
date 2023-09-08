import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const LogoutUser =()=> {

    const {user,logout} = useAuth();
const navigate = useNavigate()

const handleLogout = async ()=> {
    await logout()
    navigate('/')
}

}

export default LogoutUser;