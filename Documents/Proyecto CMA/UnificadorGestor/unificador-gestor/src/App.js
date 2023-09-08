
import React,{ useState } from 'react';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

function App() {


  const [user, setUser] = useState('');

  onAuthStateChanged(auth,(userFirebase)=>{
    if(userFirebase){
      setUser(userFirebase);
    }else {
      setUser(null)
    }

  })
  
  return (
    <>
        {user ? <Home/> : <Login/>}
    </>
  );
}

export default App;
