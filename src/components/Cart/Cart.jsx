import React from 'react'
import Contador from '../Contador/Contador.js'
import NavBar from '../NavBar/NavBar'
import './Cart.css'

const Cart = () => {
    return (
        <div>
          <NavBar />
            <h1 className ="titleMessage">
              Lalo Landa tienes estos combos<br></br>
              en tu carrito 
            </h1>  
          <Contador />
        </div>
    )
}

export default Cart
