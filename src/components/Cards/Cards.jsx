import React from 'react'
import Card from '../Card/Card'
import Combos from '../../database/list.json'



function Cards({props}) {
    console.log(Combos)

    const comboDes = 
        {
        title: 'Combo pa desayunar',
        price: "32.800",
        description: " 1 Un Tostadas Bimbo, 1 Cesta de huevos(30 unidades), 1 Paquete de Avena molida de 220grs, 1 Pan Bimbo, 1 Libra de café pitayó. 1 Libra de Chocolate.",
        imageUrl:"#",
        id:1}
    
   
    return (
        
        <div className ="cardsContainer">
            <Card comboDes={comboDes} />
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>   
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>
            <Card comboDes={comboDes}/>                       
                     
        </div>
    )
}

export default Cards
