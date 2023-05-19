import Card from "../components/Card";
import Info from  "../components/Info";


import React from "react";

function Fav({Favorite}){
    return(
        <>
        {Favorite.length > 0 ?
         <>
        <h1>Мои закладки</h1>
        <div className="ds-f">
          {Favorite.map((obj,index) => 
            <Card
            key = {index}
            title = {obj.title} 
            url = {obj.url} 
            price = {obj.price}
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