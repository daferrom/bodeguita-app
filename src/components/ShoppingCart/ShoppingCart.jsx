import React from 'react'
import { useReducer } from 'react'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'
import { shoppingCartReducer, shoppingInitialState } from './ShoppingCartReducers.js'
import './ShoppingCart.css'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingInitialState);
    
    const { products, cart} = state
    //the const addToCart save the function to add a product to the cart//
    const addToCart = (id) => {
        console.log(id)
    }
    //the const addToCart save the function to del one product or all of these from the cart//
    const delToCart = () => {}

    const clearCart = () => {}


    return (
        <div>
            <h3>Productos</h3>
            <article className="grid-responsive">
                {products.map((product) => 
                <Card key={product.id} data={product} addToCart={addToCart}/>
                )}
            </article>
        </div>
    )
}

export default ShoppingCart
