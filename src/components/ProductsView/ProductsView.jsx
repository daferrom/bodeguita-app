import React from 'react'
import NavBar from '../NavBar/NavBar'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
//import Cards from '../Cards/Cards'
import ShowState from '../showState/ShowState'

const ProductsView = () => {
    return (
        <div className="containerProductsView">
            <NavBar/>
            
            <ShoppingCart/>
            <article className="productsContainer"></article>
            
                        
        </div>
    )
}

export default ProductsView
