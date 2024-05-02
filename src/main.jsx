import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXts32aJGQFYZjVN0BE_iIscBcsuLW73k",
  authDomain: "react-js-98293.firebaseapp.com",
  projectId: "react-js-98293",
  storageBucket: "react-js-98293.appspot.com",
  messagingSenderId: "978943171530",
  appId: "1:978943171530:web:67c9747f90e58a4dbacd33"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
