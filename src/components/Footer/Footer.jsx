import React from 'react'
import LogoDev from '../../Assets/logos/Logodev.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className = "footer">
            
            <hr className="footerLine"></hr>
            <img id="logoDiegoDev" src={LogoDev} alt="Logo developer Diego Ferro"></img>
            <div className="footerTxts">
                <h6>
                    © Copyright 2021 – Todos los derechos reservados
                    <br></br>Desarrollado por Diego Ferro
                </h6>
            </div>
        </footer>
    )
}

export default Footer
