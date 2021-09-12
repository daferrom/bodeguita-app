import React from 'react'

const TotalSum = ({dataPrices}) => {
    let {quantity, price, id} = dataPrices
    console.log(id)
    let totalPerProduct = price * quantity

    return (
        <div>
            <h3>${totalPerProduct}</h3>
            
        </div>    
        
    )
}

export default TotalSum
