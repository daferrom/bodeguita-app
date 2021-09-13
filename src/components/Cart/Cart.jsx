import React, {useContext} from 'react'
import {useReducer} from "react";
import { 
  //shoppingInitialState,
  shoppingReducer,
} from './ShoppingReducers.js'

//import Contador from '../Contador/Contador.js'//
import NavBar from '../NavBar/NavBar'
import './Cart.css'
import { shoppingCartReducer } from '../ShoppingCart/ShoppingCartReducers.js';
import CartItem from './CartItem.js';
import { TYPES } from './ShoppingAction.js';
import Context from '../../Context/Context.js';
import ShowState from '../showState/ShowState.js';


const Cart = () => {
  const context = useContext(Context)
  
  console.log(context)

    return (
        <div>
          <NavBar />
        </div>
    )
}

export default Cart
