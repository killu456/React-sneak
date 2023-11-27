const defaultState = {
    Items:[],
    cartOpened:false
}

const GET_ITEMS = 'GET_ITEMS';
const DEL_ITEM = 'DEL_ITEM';
const REPLACE_CART_OPENED = "REPLACE_CART_OPENED";

export const itemsReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_ITEMS:
                return {...state,Items:[...state.Items,...action.payload]}
        case DEL_ITEM:
            return {...state,Items:state.Items.filter((obj)=> obj.title !== action.payload)}
        case REPLACE_CART_OPENED:
            return {...state,cartOpened:!state.cartOpened}
        default:
            return state;
    }
}

export const GetItemsAction = (payload) => ({type:GET_ITEMS,payload})
export const DelItemsAction = (payload) => ({type:DEL_ITEM,payload})
export const RepCartOpenAction = (payload) => ({type:REPLACE_CART_OPENED,payload})