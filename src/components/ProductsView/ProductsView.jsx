import React from 'react'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card'

const ProductsView = () => {
    return (
        <div className="containerProducts">
            <NavBar/>
            <h1 className="titleMessage">
                Hola Lalo Landa, elige uno de nuestros combos.
            </h1>
            <Card />
            
        </div>
    )
}

export default ProductsView
