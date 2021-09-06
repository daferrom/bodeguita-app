import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className ="cardContainer">
            <h3 className="productTitle">
                Combo pa' desayunar
            </h3>
            <img src="#" alt="Imagen del producto"></img>
            <h3 className="priceProduct">32.800</h3>
            <h4 className="includedArtTitle">Articulos incluidos</h4>
            <p className="articles">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae vero, explicabo reprehenderit incidunt odit aliquam assumenda cumque ipsa facere. Illo voluptate accusantium nulla facilis, doloremque blanditiis debitis nobis eveniet dolore!</p>
            <button className="btnAddToCart">Añadir al carrito</button>
        </div>
    )
}

export default Card
