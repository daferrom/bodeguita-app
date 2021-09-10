import React from 'react'
import { useReducer } from 'react'
import NavBar from '../NavBar/NavBar'
import { shoppingCartReducer, shoppingInitialState } from './ShoppingCartReducers.js'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingInitialState)
    return (
        <div>
            <NavBar/>
            <h3>Carrito</h3>
            <article className="productsContainer"></article>
        </div>
    )
}

export default ShoppingCart
