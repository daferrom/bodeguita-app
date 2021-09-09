import React from 'react'
import Contador from '../Contador/Contador.js'
import NavBar from '../NavBar/NavBar'
import './Cart.css'
import ProductItem from './ProductItem.js'
import { shooppingInitialState, shoppingReducer } from './ShoppingReducers.js'

const Cart = () => {
  const [state, dispatch] = useReducer(shoppingReducer,
    shooppingInitialState
    );

  const [products,cart] = state;

  const addToCart = () => {}
  
  const delFromCart = () => {}

  const clearCart = () => {}

  return (
        <div>
          <NavBar />
            <h1 className ="titleMessage">
              Lalo Landa tienes estos combos<br></br>
              en tu carrito 
            </h1>
            <h3>Productos</h3>  
            <article className ="Box"></article>
            {products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={addToCart}/>
            ))}
            <h3>Productos</h3>  
            <article className ="Box"></article>
          <Contador />
        </div>
    )
}

export default Cart
