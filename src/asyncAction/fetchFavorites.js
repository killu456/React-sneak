import { GetFavoritesAction } from "../store/getFavorites"

export function FavoritesFetch(){
    return function(dispatch){
          
        fetch("https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites")
        .then(res => res.json())
        .then(json => dispatch(GetFavoritesAction(json)))
    }
}