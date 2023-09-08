import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, firebaseApp } from '../firebase/firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { doc,setDoc } from 'firebase/firestore';

function Login() {
    const firestore = getFirestore(firebaseApp)

    const [isRegister, setIsRegister] = useState(false);

    const UserRegistrer = async (email, password,role,name,lastname,user)=>{
      const infoUser = await  createUserWithEmailAndPassword(auth, email,password).then((userFirebase)=>{
        
          return userFirebase
      })
      console.log(infoUser.user.uid);
      const docuRef = await doc(firestore,`users/${infoUser.user.uid}`)
      setDoc(docuRef,{correo:email,role:role, name:name,lastname:lastname,user:user})
    }



    const submitHandler = (e) =>{
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const role = e.target.elements.role.value
        const name = e.target.elements.name.value
        const lastname = e.target.elements.lastname.value
        const user = e.target.elements.user.value
        console.log(email,password, role,name,lastname,user);
    
       /*  UserRegistrer(email,password,role, name,lastname,user) */
    
        if(isRegister){
            //registrar un usuario
            UserRegistrer(email,password,role,name,lastname,user)
        }else {
            signInWithEmailAndPassword(auth,email,password);
        }
    

    }

   

  return (
    <div>
        <h1>{isRegister ? "Restiraste" : "Inicia esión"}</h1>
        <form onSubmit={submitHandler}>
            <label>email
                <input id='email' type='email' />
            </label>
            <label>contraseña
                <input id='password' type='password' />
            </label>
            <label>Nombre
                <input id='name' type='text' />
            </label>
            <label>Apellido
                <input id='lastname' type='text' />
            </label>
            <label>Usuario
                <input id='user' type='text' />
            </label>
            <label>Rol
                <select id='role'>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                </select>
            </label>
            <input type="submit"
              value={isRegister ? "Registrate" : "Iniciar sesión"}/>
        </form>
        <button onClick = {()=> setIsRegister(!isRegister) } >{isRegister ? "Ya tengo cuenta":"Registrarme "}</button>
    </div>
  )
}

export default Login