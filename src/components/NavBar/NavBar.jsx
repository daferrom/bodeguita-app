import React from 'react'
import './NavBar.css'
import {
    Link,  
  } from "react-router-dom";

const NavBar = () => {
    return (
        <div className = "navigationBar">
            <ul>
                <li><Link to= "/inicio">Inicio</Link></li>
                <li><Link to= "/productos">Productos</Link></li>
                <li><Link to= "/carrito">Carrito</Link></li>                
            </ul>
        </div>
    )
}

export default NavBar
