import React, {useRef, useContext} from 'react';
import {AppContext} from '../application/provider';
import './Login.css'


const Login = () => {
    let nom =useRef(null);
    let adWritten =useRef(null);

    const [state,setState] = useContext(AppContext);

    return (
        <div>
            <h2 className="inputTitle">Ingresa tu nombre</h2>
            <input className="inputBox" type="text" ref={nom} onChange={ () => {setState({...state, name:nom.current.value})}} />
            <h2 className="inputTitle">Ingresa tu dirección</h2>
            <input className="inputBox" type="text" ref={adWritten} onChange={ () => {setState({...state, adress:adWritten.current.value})}} />
        </div>
      
    )
}

export default Login

