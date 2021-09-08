import React from 'react'
import NavBar from '../NavBar/NavBar'

import Cards from '../Cards/Cards'

const ProductsView = () => {
    return (
        <div className="containerProductsView">
            <NavBar/>
            <h1 className="titleMessage">
                Hola Lalo Landa, elige uno de nuestros combos.
            </h1>
            <Cards />
            
        </div>
    )
}

export default ProductsView
