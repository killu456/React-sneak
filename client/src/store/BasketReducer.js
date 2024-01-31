const defaultState = {
    BasketItems:[],
    BasketOpened:false,
}

const GET_BASKET_ITEMS = 'GET_BASKET_ITEMS';
const REPLACE_BASKET_OPENED = "REPLACE_BASKET_OPENED";
const ADD_BASKET_ITEM = "ADD_BASKET_ITEM"
const DEL_BASKET_ITEM = "DEL_BASKET_ITEM"

export const basketReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_BASKET_ITEMS:
                return {...state,BasketItems:[...action.payload]}
        case REPLACE_BASKET_OPENED:
            return {...state,BasketOpened:!state.BasketOpened}
        case ADD_BASKET_ITEM:
                return {...state,BasketItems:[...state.BasketItems,action.payload]}
        case DEL_BASKET_ITEM:
                return {...state,BasketItems:state.BasketItems.filter((e) => e.ItemId != action.payload)}
        default:
            return state;
    }
}

export const GetBasketItemsAction = (payload) => ({type:GET_BASKET_ITEMS,payload})
export const RepBasketOpenAction = (payload) => ({type:REPLACE_BASKET_OPENED,payload})
export const DelBasketAction = (payload) => ({type:DEL_BASKET_ITEM,payload});
export const AddBasketAction = (payload) => ({type:ADD_BASKET_ITEM,payload});