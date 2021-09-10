import React from 'react'
// OJO ESTE PRODUCT ITEM VIENE A SER MI CARD 
//data receive all the parameters (an object) with the attributtes //
const ProductItem = ({data, addToCart}) => {
    let {id, name, price} = data;
    return (
        <div style={{border:"thin solid gray", padding: "1rem"}}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={()=> addToCart(id)}>Agregar al carrito</button>
        </div>
    );
};

export default ProductItem
