import {createContext, useContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";


 const authContext = createContext([]);

 export const useAuth =() => useContext(authContext);


export const AuthProvider = ({ children })=> {

    const [user, setUser] = useState(null)

    const [loading, setLoading] =useState(true);

    const singup =(email,password)=> createUserWithEmailAndPassword(auth,email,password);
    const login =(email,password) => signInWithEmailAndPassword(auth, email,password);

    const logout =()=> signOut=>(auth);

    useEffect( ()=>{
        onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser);
            setLoading(false);
        })
    } , []  );

    return (
        <authContext.Provider value={{singup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    );
    }


    export default AuthProvider;