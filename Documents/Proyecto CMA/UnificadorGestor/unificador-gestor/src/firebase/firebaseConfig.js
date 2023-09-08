
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAUPHhwvgxVdbcx3F22aGYQ0iIdewt88dQ",
  authDomain: "gestor-trazabilidad.firebaseapp.com",
  projectId: "gestor-trazabilidad",
  storageBucket: "gestor-trazabilidad.appspot.com",
  messagingSenderId: "528618418183",
  appId: "1:528618418183:web:85166ab856f79840c93aa2"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore (firebaseApp);


// Define los roles de usuario y sus correspondientes rutas permitidas
export const rolesConfig = {
  admin: ["/admin", "/user", "/guest"],
  user: ["/user", "/guest"],
  guest: ["/guest"],
};