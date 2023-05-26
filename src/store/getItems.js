const defaultState = {
    Items:[],
    Plus:false,
}

const GET_ITEMS = 'GET_ITEMS';
const DEL_ITEM = 'DEL_ITEM';

export const itemsReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_ITEMS:
                return {...state,Items:[...state.Items,...action.payload]}
        case DEL_ITEM:
            return {...state,Items:state.Items.filter((obj)=> obj.title !== action.payload)}
        default:
            return state;
    }
}

export const GetItemsAction = (payload) => ({type:GET_ITEMS,payload})
export const DelItemsAction = (payload) => ({type:DEL_ITEM,payload})