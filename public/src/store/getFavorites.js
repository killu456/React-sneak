const defaultState = {
    Favorites:[],
    Like:false,
}

const GET_FAVORITES = 'GET_FAVORITES';
const DEL_FAVORITE = 'GET_FAVORITE';

export const favoritesReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_FAVORITES:
                return {...state,Favorites:[...state.Favorites,...action.payload]}
        case DEL_FAVORITE:
                return {...state,Favorites:state.Favorites.filter((obj)=> obj.title !== action.payload)}
        default:
            return state;
    }
}

export const GetFavoritesAction = (payload) => ({type:GET_FAVORITES,payload});
export const DelFavoritesAction = (payload) => ({type:DEL_FAVORITE,payload});