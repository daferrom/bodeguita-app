import React from 'react'
import { useReducer } from 'react'
import Card from '../Card/Card'
import CartItem from '../CartItem/CartItem'
import { shoppingCartReducer, shoppingInitialState } from './ShoppingCartReducers.js'
import './ShoppingCart.css'
import { TYPES } from './ShoppingActions'
import NavBar from '../NavBar/NavBar'
import TotalSum from '../TotalSum/TotalSum'

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingInitialState);
    
    const { products, cart} = state
    //the const addToCart save the function to add a product to the cart//
    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    //the const delFromCart save the function to del one product or all of these from the cart//
    const delFromCart = (id, all = false) => {
        
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }

    }
    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    }
    const pricesInCart = () => {
        dispatch({type:TYPES.TOTAL_AMOUNT})
    }
   

    const cartPrices = cart
    console.log = cartPrices
    return (
        <div>
            <h3>Productos</h3>
            <article className="grid-responsive">
                {products.map((product) => 
                <Card key={product.id} data={product} addToCart={addToCart}/>
                )}
            </article>
            <NavBar/>
            <h3>Carrito</h3>
            <article className="itemInCart">
            <button onClick ={clearCart}>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
            }
            <h3>
                TOTAL $ 
                {
                cart.map(( artInCart , indexA) => <TotalSum key= {indexA} dataPrices={artInCart}  />)
                }           
            </h3>
            </article> 
        </div>
    )
}

export default ShoppingCart
