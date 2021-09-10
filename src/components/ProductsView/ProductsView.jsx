import React from 'react'
import NavBar from '../NavBar/NavBar'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
//import Cards from '../Cards/Cards'

const ProductsView = () => {
    return (
        <div className="containerProductsView">
            <NavBar/>
            <h1 className="titleMessage">
                Hola Lalo Landa, elige uno de nuestros combos.
            </h1>
            <h3>Productos</h3>
            <ShoppingCart/>
            <article className="productsContainer"></article>
            
                        
        </div>
    )
}

export default ProductsView
