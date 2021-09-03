import React from 'react';
import style from './HomeView.module.css';
import HomeForm from '../HomeForm/HomeForm';
import LogoHome from '../LogoHome/LogoHome';



const HomeView = () => {
    return (
        <div className = {style.containerHome} >
           <LogoHome />
            <h1 id="Saludo">Hola Veci!</h1>
           <HomeForm />
           <button>Ingresar</button>
        </div>
    )
}

export default HomeView
