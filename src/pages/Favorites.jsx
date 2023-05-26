import Card from "../components/Card";
import Info from  "../components/Info";
import { useSelector } from "react-redux";


import React from "react";

function Fav({addToCart,addToFav}){
    const Favorites = useSelector(state => state.Favorites.Favorites)

    return(
        <>
        {Favorites.length > 0 ?
         <>
        <h1>Мои закладки</h1>
        <div className="ds-f">
          {Favorites.map((obj,index) => 
            <Card
            key = {index}
            title = {obj.title} 
            url = {obj.url} 
            price = {obj.price}
            addToCart={addToCart}
            addToFav={addToFav}
            />
          )}
        </div>
         </>  :

          <Info 
            Title = {"Вы ничего не добавляли в закладки"}
            Paragraph = {"Закладок нет :("}
            Url = {"/img/image.png"}
            W = {70}
            H = {70}
          />
            } 
         </>
    )
}

export default Fav;