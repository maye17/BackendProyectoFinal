import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import {useAuth} from './context/AuthContext'





//components

import Navbar from "./components/Navbar/Navbar";
import NavLateral from './components/NavLateral/index'
import PerfilAdmin from './components/ProfileAdmin/index'
//pages
import Home from './pages/Home/index';
import Register from './pages/Register'
import Principal from "./pages/Principal";
import  Footer  from "./components/Footer/index";
import Forms from "./pages/Users/index";
import AddLink from "./pages/ProjectRegister/ProjectRegister";
import ListProject from "./components/ListProjectRegister/ListProjectRegister";
import LoginAccess from "./pages/Login";


function App() {


  const [flagNavLateral, setFlagNavLateral] = useState(true);

  const {login} = useAuth();

  



  return (
    
    <div className="rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
     
      <Router>

        <AuthProvider>
        <Navbar/>        
            <NavLateral flagNavLateral={flagNavLateral}  />
        <Routes>
        
          <Route path="/"  element={<LoginAccess/>}/> 
          <Route path="/forms"  element={<Forms/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Principal/perfiladmin" render={(props)=>{
          return <PerfilAdmin  {...props} handle={setFlagNavLateral}/>}
          }/>
           <Route path='/Principal' element={<Principal/>}/>     
           <Route path='/Proyectos' element={<ListProject/>}/>  
           <Route path='/Agregar' element={<AddLink/>}/>      
        </Routes>
        </AuthProvider>
  {/*       <Footer /> */}
      </Router>
      
    </div>
  );
}

export default App;
