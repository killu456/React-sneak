const defaultState = {
    Favorites:[],
}

const GET_FAVORITES = 'GET_FAVORITES';
const ADD_FAVORITE = "ADD_FAVORITE"
const DEL_FAVORITE = "DEL_FAVORITE"

export const favoritesReducer = (state = defaultState,action) =>{
    switch(action.type){
        case GET_FAVORITES:
                return {...state,Favorites:[...action.payload]}
        case ADD_FAVORITE:
                return {...state,Favorites:[...state.Favorites,action.payload]}
        case DEL_FAVORITE:
                return {...state,Favorites:state.Favorites.filter((e) => e.ItemId != action.payload)}
        default:
            return state;
    }
}

export const GetFavoritesAction = (payload) => ({type:GET_FAVORITES,payload});
export const DelFavoriteAction = (payload) => ({type:DEL_FAVORITE,payload});
export const AddFavoriteAction = (payload) => ({type:ADD_FAVORITE,payload});
