import { GetSneakersAction } from "../store/getSneakers"


export function SneakersFetch(){
    return function(dispatch){
        fetch("https://645bd41aa8f9e4d6e774412f.mockapi.io/sneakers")
        .then(res => res.json())
        .then(json => dispatch(GetSneakersAction(json)))
    }
}