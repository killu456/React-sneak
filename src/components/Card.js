import React from "react";
import { AppContext } from "../App";

function Card( {title, url, price}){
    const {cartItems,Favorite,addToCart,addToFav} = React.useContext(AppContext);


    const [Plus,setPlus] = React.useState(false);
    const [Like,setLike] = React.useState(false);

    if(cartItems.find((prev) => prev.title === title && !Plus ))setPlus(!Plus);
    if(Favorite.find((prev) => prev.title === title && !Like ))setLike(!Like);
    

    function addCartPlus(){
        addToCart({title,url,price})
        setPlus(!Plus);
    }

    function addCartLike(){
        addToFav({title,url,price})
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
        <button className="button">
        <img onClick = {()=> {addCartPlus()}} width={32} height={32} src= {cartItems.find((prev) => prev.title === title) ? "/img/addPlus.png" : "/img/plus.png"} alt="Plus" />
        </button>
    </div>
    </div>
    );
}

export default Card;