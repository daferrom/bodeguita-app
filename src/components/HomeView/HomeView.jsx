import React from 'react';
import style from './HomeView.module.css';
import HomeForm from '../HomeForm/HomeForm';
import LogoHome from '../LogoHome/LogoHome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,  
  } from "react-router-dom";



const HomeView = () => {
    return (
        <div className = {style.containerHome} >
           <LogoHome />
            <h1 id="Saludo">Hola Veci!</h1>
           <HomeForm />
           <Link to = "/productos" className="btn" >
               Ingresar
           </Link>

           
           
        </div>
    )
}

export default HomeView
