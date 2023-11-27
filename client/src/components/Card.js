import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { addToFavorites } from "../asyncAction/addFav";
import { addToCard } from "../asyncAction/addCard";


function Card({title, url, price}){
    const dispatch = useDispatch()
    const Items = useSelector(state => state.Items.Items)
    const Favorites = useSelector(state => state.Favorites.Favorites)

    const [Plus,setPlus] = React.useState(false);
    const [Like,setLike] = React.useState(false);

    if(Items.find((prev) => prev.title === title && !Plus ))setPlus(!Plus);
    if(Favorites.find((prev) => prev.title === title && !Like ))setLike(!Like);
    

    function addCartPlus(){
        dispatch(addToCard({title,url,price},Items))
        setPlus(!Plus);
    }

    function addCartLike(){
        dispatch(addToFavorites({title,url,price},Favorites))
        setLike(!Like)
    }

    return(
    <div className="card">
    <div>
        <img onClick = {()=> {addCartLike()}} src={Like ? "/img/liked.png" : "/img/unliked.png"} width={32} height={32} alt="Unliked" />
    </div>
    <img width={133} height={112} src= {url} alt="Sneakers" />
    <h5> {title}</h5>
    <div className="cardChildDiv">
        <div className="container">
            <span>Цена:</span>
            <b> {`${price} руб`}</b>
        </div>
        <img onClick = {()=> {addCartPlus()}} width={32} height={32} src = {Items.find((prev) => prev.title === title) ? "/img/addPlus.png" : "/img/plus.png"} alt="Plus" />
    </div>
    </div>
    );
}

export default Card;