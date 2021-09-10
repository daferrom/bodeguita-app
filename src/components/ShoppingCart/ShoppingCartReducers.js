import products from '../../database/list.json'
import { TYPES } from '../ShoppingCart/ShoppingActions';


//initial state with products//
export const shoppingInitialState = {
    products,
    cart:[],
};

export function shoppingCartReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
        }
        case TYPES.CLEAR_CART:{
        }
        default:
        return state
    }
};

