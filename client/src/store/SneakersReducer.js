const defaultState = {
    Sneakers:[],
    Isloading:true,
    Search:  "",
    PutItem:"",
}

const GET_SNEAKERS = 'GET_SNEAKERS';
const ADD_SNEAKER = 'ADD_SNEAKER';
const DEL_SNEAKER = 'DEL_SNEAKER';
const SEARCH = "SEARCH";
const PUT_CART = "PUT_CART";

export const sneakersReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_SNEAKERS:
                return {...state,Sneakers:[...action.payload],Isloading:false}
        case ADD_SNEAKER:
                return {...state,Sneakers:[...state.Sneakers,...action.payload]}
        case DEL_SNEAKER:
                return {...state,Sneakers:state.Sneakers.filter((e) => e.id != action.payload)}
        case SEARCH:
                return {...state,Search:action.payload}
        case PUT_CART:
                return {...state,PutItem:action.payload}
        default:
            return state;
    }
}

export const GetSneakersAction = (payload) => ({type:GET_SNEAKERS,payload})
export const SearchAction = (payload) => ({type:SEARCH,payload})
export const AddSneakerAction = (payload) => ({type:ADD_SNEAKER,payload})
export const DelSneakerAction = (payload) => ({type:DEL_SNEAKER,payload})
export const PutCartAction = (payload) => ({type:PUT_CART,payload})
