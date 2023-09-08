import React from "react";
import Login from "../../components/Login/Login";
import NavLateral from "../../components/NavLateral";
import { useAuth } from "../../context/AuthContext";

const LoginAccess =() => {

    const {user} = useAuth();

    console.log(user);
    return(
        <>
            <Login />

        </>
    )
}

export default LoginAccess;