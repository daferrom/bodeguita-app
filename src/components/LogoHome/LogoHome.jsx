import React from 'react'
import Logo from '../../Assets/logos/LogoLaBodeguita.png'
import style from './LogoHome.css'

const LogoHome = () => {
    return (
        <div className="LogoContainer">
            <img id = "LogoLb" src={Logo} alt="Logo de La bodeguita"/>
        </div>
    )
}

export default LogoHome
