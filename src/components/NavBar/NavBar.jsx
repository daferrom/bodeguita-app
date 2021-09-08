import React from 'react'
import './NavBar.css'
import {
    Link,  
  } from "react-router-dom";
import LogoNav from '../../Assets/logos/LogoBodeguitaAlone.png'
import LogoCart from '../../Assets/logos/LogoCarritoDF.png'

const NavBar = () => {
    return (
        <div className = "navigationBar">
            <ul>
                <li>
                    <Link to= "/">
                        INICIO
                    </Link>
                </li>
                <li>
                    <Link to= "/productos">
                        <img 
                            className ="LogoBodeguitaNav"
                            src = {LogoNav}
                            alt ="productos">
                        </img>
                    </Link></li>
                <li>
                    <Link to= "/carrito">
                        <img 
                            className ="LogoCart"
                            src = {LogoCart}
                            alt ="Carrito">
                        </img>
                    </Link>
                </li>                
            </ul>
        </div>
    )
}

export default NavBar
