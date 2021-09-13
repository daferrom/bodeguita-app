import products from '../../database/list.json'

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
            let newItem = state.products.find(
                (product) => product.id === action.payload
            );

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart 
            ? {
               ...state,
               cart: state.cart.map((item) => 
               item.id === newItem.id 
               ?{...item, quantity: item.quantity + 1}
               :item
               ),
            }
            : {
                ...state, 
                cart:[...state.cart, {...newItem, quantity: 1}]
            };

           
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload)
        
            return itemToDelete.quantity > 1 
            ?{
            ...state,
            cart: state.cart.map((item) => 
            item.id === action.payload 
                ?{...item,quantity: item.quantity - 1}
                    :item
                ),
            }
            :{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }

        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }

        case TYPES.CLEAR_CART:{
            return shoppingInitialState
        }
        case TYPES.TOTAL_AMOUNT:{
            return{
                ...state,
                cart: state.cart.filter((item) => item.price === action.payload)               
            }
        }
        default:
        return state
    }
};
export var CartCurrentState  
//// se supone 