import React from 'react'
import './CartItem.css'

const CartItem = ({data, delFromCart}) => {
    let {id, name, price, imageUrl, quantity} = data;
    const totalProduct = price * quantity

    return (
        <div className= "cartItemContainer">
            <h4 className="titleItem" >{name}</h4>
            <div className= "imgAndPrice">
            <img 
                className = "productCartImage"
                src = {imageUrl}
                alt="Imagen del producto"
            />
            <h5 className="priceTitle">${price} x {quantity} Un. = ${totalProduct}</h5>
            </div>
            <div>
            <button onClick={()=> delFromCart(id)}>Eliminar uno</button>    
            <button onClick={()=> delFromCart(id, true)}>Eliminar todos</button>
            </div>
        </div>
    )
}

export default CartItem
