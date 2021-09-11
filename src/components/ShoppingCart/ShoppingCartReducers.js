import products from '../../database/list.json'
import Cart from '../Cart/Cart';
import { TYPES } from '../ShoppingCart/ShoppingActions';


//initial state with products//
export const shoppingInitialState = {
    products,
    cart:[],
};
// tasks of the cart //
export function shoppingCartReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload)
            console.log(newItem);
            return{
                ...state,
                cart:[...state.cart, newItem]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
        }
        case TYPES.CLEAR_CART:{
        }
        default:
        return state
    }
};
export var CartCurrentState  
//// se supone 