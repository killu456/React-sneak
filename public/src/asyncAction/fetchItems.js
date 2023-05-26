import { GetItemsAction } from "../store/getItems"

export function ItemsFetch(){
    return function(dispatch){
        fetch("https://645bd41aa8f9e4d6e774412f.mockapi.io/items")
        .then(res => res.json())
        .then(json => dispatch(GetItemsAction(json)))
    }
}