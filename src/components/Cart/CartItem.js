import React from 'react'


const CartItem = ({data, delFromCart}) => {
    let {id, name, price, quantity } = data;
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            <h4>${price}.00 x {quantity} = $ {price*quantity}</h4>
            <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
            <br />
            <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
            <br />
            <br />
        </div>
    )
}

export default CartItem
