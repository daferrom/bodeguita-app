import React from 'react';
import style from './HomeView.module.css';
import HomeForm from '../HomeForm/HomeForm';
import LogoHome from '../LogoHome/LogoHome';
import {
Link,  
  } from "react-router-dom";
import Footer from '../Footer/Footer';



const HomeView = () => {
    return (
        <div className = {style.containerHome} >
           <LogoHome />
            <h1 className={style.greetingTitle}>
                Hola Veci!
            </h1>
           <HomeForm />
           <Link to = "/productos" className="btn in" >
               Ingresar
           </Link>
           <Footer/>
        </div>
    )
}

export default HomeView
