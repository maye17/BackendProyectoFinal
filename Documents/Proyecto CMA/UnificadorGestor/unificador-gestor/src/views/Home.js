import React from 'react'
import { auth } from '../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'

function Home() {
  return (
    <div>
      <h1>Home</h1>
    <button onClick={signOut(auth)}>Cerrar Sesión</button>
    </div>
  )
}

export default Home