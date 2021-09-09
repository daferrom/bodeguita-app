import React from 'react'


const CartItem = ({data, delFromCart}) => {
    let {id, name, price, quantity } = data;
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            <h4>${price}.00 x {quantity} = $ {price*quantity}</h4>
            <button>Eliminar Uno</button>
            <button>Eliminar Todos</button>
        </div>
    )
}

export default CartItem
