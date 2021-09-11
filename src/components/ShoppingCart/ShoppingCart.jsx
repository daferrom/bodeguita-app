import React from 'react'
import { useReducer } from 'react'
import Card from '../Card/Card'
import CartItem from '../CartItem/CartItem'
import { shoppingCartReducer, shoppingInitialState } from './ShoppingCartReducers.js'
import './ShoppingCart.css'
import { TYPES } from './ShoppingActions'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingInitialState);
    
    const { products, cart} = state
    //the const addToCart save the function to add a product to the cart//
    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    //the const addToCart save the function to del one product or all of these from the cart//
    const delFromCart = () => {}

    const clearCart = () => {}


    return (
        <div>
            <h3>Productos</h3>
            <article className="grid-responsive">
                {products.map((product) => 
                <Card key={product.id} data={product} addToCart={addToCart}/>
                )}
            </article>
            <h3>Carrito</h3>
            <article className="itemInCart">
            <button onClick ={clearCart}>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} imageUrl={item}/>)
            }
            </article> 
        </div>
    )
}

export default ShoppingCart
