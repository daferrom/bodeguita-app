import React from 'react'
import './Card.css'
import {
    Link,  
  } from "react-router-dom";

const Card = ({comboProps}) => {
    return (
        <div className ="cardContainer">
            <h3 className="productTitle">
                {comboProps.title}
            </h3>
            <img 
                className = "productImage"
                src = {comboProps.imageUrl}
                alt="Imagen del producto"
                />
            <h3 
                className="priceProduct">
                    {comboProps.price}
            </h3>
            <h4 
                className="includedArticlesTitle">
                    Articulos incluidos
            </h4>
            <p 
                className="articles">
                    {comboProps.description}
            </p>
            <button className="btn">Añadir al carrito</button>
            <button className="btn"><Link to= "/carrito">Ir al carrito</Link></button>
        </div>
    )
}

export default Card
