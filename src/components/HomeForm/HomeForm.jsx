import React from 'react'
import './HomeForm.css'

const HomeForm = () => {
    return (
        <div className ="homeFormContainer">
            <h2 className="inputTitle">Ingresa tu nombre</h2>
            <input className="input" type="text"></input>
            <h2 className="inputTitle">Ingresa tu dirección</h2>
            <input className="input" type="text"></input>
        </div>
    )
}

export default HomeForm
