 import React, {useEffect} from "react";


 
const  PerfilAdmin = ({handle}) => {

    
    useEffect(()=>{
        handle(false);
        return () => handle(true);
      },[handle]);
     
      
     return (
     <> <div>In Perfil Admin</div></>
     )
    }
 

   export default PerfilAdmin;