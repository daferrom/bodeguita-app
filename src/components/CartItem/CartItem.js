import React from 'react'
import './CartItem.css'
import LogoDelFromCart from '../../Assets/logos/LogoDelFromCart.png'
import LogoMinus from '../../Assets/logos/minusLogo.png'

const CartItem = ({data, delFromCart}) => {
    let {id, name, price, imageUrl, quantity} = data;
    const totalProduct = price * quantity

    return (
        <div>
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
            </div>
                <div className="btnsContainer">
                    <div className="counterBtnsContainer">             
                        <button className="minusBtn" onClick={()=> delFromCart(id)}><img src={LogoMinus} alt="Eliminar uno"></img></button>  
                        <p className="counter">{quantity}</p>
                        <button className="minusBtn" onClick={()=> delFromCart(id)}><img src={LogoMinus} alt="Eliminar uno"></img></button>  
                    </div>
                <button className="btnDelFromCart" onClick={()=> delFromCart(id, true)}><img src={LogoDelFromCart} alt="Eliminar todos"></img></button>
            </div>
        </div>
    )
}

export default CartItem
