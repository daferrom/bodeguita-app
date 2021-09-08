import React, {useState, Fragment} from 'react'

const Contador = () => {
    
    const [numero, setNumero] = useState(0);
    
    const increase = () => {
        console.log('me diste un click')
        setNumero(numero + 1)
    }

    return (
        <Fragment>
            <h3>mi primer componente {numero}</h3>
            <button onClick={increase}>Aumentar</button>
        </Fragment>
    )
}

export default Contador


