import React from 'react'
import './Card.css'
import comboDesayuno from '../../Assets/Imgs/comboDesayuno.png'

const Card = () => {
    return (
        <div className ="cardContainer">
            <h3 className="productTitle">
                Combo pa' desayunar
            </h3>
            <img 
                src = {comboDesayuno}
                alt="Imagen del producto"
                />
            <h3 
                className="priceProduct">
                    32.800
            </h3>
            <h4 
                className="includedArticlesTitle">
                    Articulos incluidos
            </h4>
            <p className="articles">
            1 paquete de Tostadas Bimbo, <br></br>
            1 cesta de huevos, <br></br>
            1 Unidad Avena molida, <br></br>
            1 Pan Bimbo, <br></br> 
            1 libra de café pitayó. <br></br>
            1 Libra de Chocolate. <br></br>
            </p>
            <button className="btn">Añadir al carrito</button>
        </div>
    )
}

export default Card
