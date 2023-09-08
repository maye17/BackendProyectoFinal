import React, {useEffect, useState} from "react";
import { useAuth } from "../../context/AuthContext"
import CardHome from "../CardHome/CardHome"
import { useParams } from "react-router-dom";
import Spinner from '../../components/Spinner/index';
import Container from "react-bootstrap/esm/Container";

//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";




const Inicio =()=> {

    const [list, setListproject] = useState([]);

    let {id} = useParams();

    const [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        const getListProject = async ()=> {
            const q = query(collection(db,"projects"));
            const documents =[];
            const querySnaptshot = await getDocs(q);
            querySnaptshot.forEach((document)=> {
                documents.push({...document.data(),id:document.id})
                
            });
            setListproject(documents)
        }
        getListProject()
        setTimeout(()=> {
            setisLoading(false)
        },2000)
    },[id]);

   console.log(list);
    const {user} = useAuth();


    return(
        <div>
            {isLoading ? (
                <div>
                    <Spinner/>
                </div>
            ):(
                <Container fluid>
                    <section>
                        {list.map((item) =>{
                           return(
                               <div key = {item.id}>
                                    <CardHome data = {item}/> 
                               </div>
                            
                           ) 
                        })}
                    </section>
                </Container>
            )
                
        }
            
        </div>
   
/*         <>
        <LoginAccess />        
        </> */
    )
}

export default Inicio;