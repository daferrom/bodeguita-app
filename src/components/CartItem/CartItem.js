import React from 'react'
import './CartItem.css'

const CartItem = ({data, delFromCart}) => {
    let {id, name, price, imageUrl} = data;

    return (
        <div className= "cartItemContainer">
            <h4 className="titleItem" >{name}</h4>
            <div className= "imgAndPrice">
            <img 
                className = "productImage"
                src = {imageUrl}
                alt="Imagen del producto"
            />
            <h5 className="priceTitle">${price}.00</h5>
            </div>
            <div>
            <button>Eliminar</button>    
            <button>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem
