import React from 'react'
import './Card.css'
import imagesList from '../../Assets/images'


const Card = ({comboDes}) => {
    return (
        <div className ="cardContainer">
            <h3 className="productTitle">
                {comboDes.title}
            </h3>
            <img 
                className = "productImage"
                src = {imagesList.[0].img}
                alt="Imagen del producto"
                />
            <h3 
                className="priceProduct">
                    {comboDes.price}
            </h3>
            <h4 
                className="includedArticlesTitle">
                    Articulos incluidos
            </h4>
            <p 
                className="articles">
                    {comboDes.description}
            </p>
            <button className="btn">Añadir al carrito</button>
        </div>
    )
}

export default Card
