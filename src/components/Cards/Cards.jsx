import React from 'react'
import Card from '../Card/Card'
import Combos from '../../database/list.json'



function Cards({props}) {

 
    return (
        
        <div className ="cardsContainer">
            <Card comboProps={Combos[0]} />
            <Card comboProps={Combos[1]} />
            <Card comboProps={Combos[2]} />
            <Card comboProps={Combos[4]} />
            <Card comboProps={Combos[5]} />
            <Card comboProps={Combos[6]} />
            <Card comboProps={Combos[7]} />
            <Card comboProps={Combos[8]} />
            <Card comboProps={Combos[9]} />
                                              
                     
        </div>
    )
}

export default Cards
