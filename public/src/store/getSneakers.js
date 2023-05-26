
const defaultState = {
    Sneakers:[],
    Isloading:true,
    Search: "",
}

const GET_SNEAKERS = 'GET_SNEAKERS';
const SEARCH = "SEARCH";

export const sneakersReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_SNEAKERS:
                return {...state,Sneakers:[...state.Sneakers,...action.payload],Isloading:false}
        case SEARCH:
                return {...state,SearchValue:action.payload}
        default:
            return state;
    }
}

export const GetSneakersAction = (payload) => ({type:GET_SNEAKERS,payload})
export const SearchAction = (payload) => ({type:SEARCH,payload})
