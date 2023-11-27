import axios from "axios";
import { DelFavoritesAction, GetFavoritesAction } from "../store/getFavorites";


export function addToFavorites(obj,Favorites){
    const objCart = Favorites.find((elem)=> elem.title === obj.title) 
    if(!objCart){ 
        return async function(dispatch){
            const {data} = await axios.post("https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites",obj); 
            dispatch(GetFavoritesAction([data])); 
        }
    }
    else{
        return function(dispatch){
            axios.delete(`https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites/${objCart.id}`); 
            dispatch(DelFavoritesAction(objCart.title));
        }
    }
  }