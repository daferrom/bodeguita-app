import React, {useContext} from 'react'
import {useReducer} from "react";
import { 
  //shoppingInitialState,
  shoppingReducer,
} from './ShoppingReducers.js'

//import Contador from '../Contador/Contador.js'//
import NavBar from '../NavBar/NavBar'
import './Cart.css'
import ProductItem from './ProductItem.js'
import CartItem from './CartItem.js';
import { TYPES } from './ShoppingAction.js';
import { Context } from '../../context/context.js';


const Cart = () => {
  const {shoppingInitialState}= useContext(Context)
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  console.log(shoppingInitialState)
  const {products, cart} = state;

  const addToCart = (id) => {
    //console.log(id)
    dispatch({type:TYPES.ADD_TO_CART, payload: id})
  }
  
  const delFromCart = (id, all=false) => {
    console.log(id, all);
    if(all){
      dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
  } else {
      dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
  }
  };

  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART});  
  
  };
  

    return (
        <div>
          <NavBar />
            <h1 className ="titleMessage">
              Lalo Landa tienes estos combos<br></br>
              en tu carrito 
            </h1>
            <h3>Productos</h3>  
            <article className ="box grid-responsive">
              {products.map((product) => (
              <ProductItem key={product.id} data={product} addToCart={addToCart}/>
              ))}
            </article>
            <h3>Productos en el carrito</h3>  
            <article className ="box">
            <button onClick={clearCart}>Limpiar carrito</button>
            {cart.map((item,index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
            ))}
            </article>
        </div>
    )
}

export default Cart
