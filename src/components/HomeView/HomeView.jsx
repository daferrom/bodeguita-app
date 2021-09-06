import React from 'react';
import style from './HomeView.module.css';
import HomeForm from '../HomeForm/HomeForm';
import LogoHome from '../LogoHome/LogoHome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";



const HomeView = () => {
    return (
        <div className = {style.containerHome} >
           <LogoHome />
            <h1 id="Saludo">Hola Veci!</h1>
           <HomeForm />
           <Router>
                <Switch>
                    <Route path = "/productos">
                    <button>Ingresar</button>
                    </Route>
                </Switch>  
            </Router>
           <button>Ingresar</button>

        </div>
    )
}

export default HomeView
