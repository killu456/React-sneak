import axios from "axios";
import { DelItemsAction, GetItemsAction } from "../store/getItems";


export function addToCard(obj,Items){
    const objCart = Items.find((elem)=> elem.title === obj.title) 
    if(!objCart){ 
        return async function(dispatch){
            const {data} = await axios.post("https://645bd41aa8f9e4d6e774412f.mockapi.io/items",obj)
            dispatch(GetItemsAction([data]))
        }
    }
    else{
        return function(dispatch){
            axios.delete(`https://645bd41aa8f9e4d6e774412f.mockapi.io/items/${objCart.id}`);
            dispatch(DelItemsAction(objCart.title))
        }
    }
}