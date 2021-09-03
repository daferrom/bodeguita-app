import React from 'react'
import LogoDev from '../../Assets/logos/Logodev.png'
import style from './Footer.css'

const Footer = () => {
    return (
        <footer className = "footer">
            
            <hr className="footerLine"></hr>
            <img id="logoDiegoDev" src={LogoDev} alt="Logo developer Diego Ferro"></img>
            <h6>© Copyright 2021 – Todos los derechos reservados</h6>
            <h6>Desarrollado por Diego Ferro</h6>
            
        </footer>
    )
}

export default Footer
