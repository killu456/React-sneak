import Card from "../components/Card";
import Info from  "../components/Info";
import { useDispatch, useSelector } from "react-redux";


import React from "react";
import { SHOP_ROUTE } from "../utils/constants";
import { fetchFavoriteDevices } from "../http/favoriteApi";
import { GetFavoritesAction } from "../store/FavoritesReducer";
import { fetchItems2 } from "../Functions/fetchItems";

function Fav(){
    const dispatch = useDispatch()
    const {Favorites} = useSelector(state => state.Favorites)
    const {User,active} = useSelector(state => state.UserR)
    const {Sneakers} = useSelector(state => state.Sneakers)

    function fetchFavoritesItems(data){
      let arr = [];
      data.forEach(e => {
            let s = Sneakers.filter((obj) => e.deviceId === obj.id)
            if(s.length) arr = [...arr,{...s[0],ItemId:e.id}]
      });   
      if(arr.length) dispatch(GetFavoritesAction(arr)) 
    }   
  
    React.useEffect(() => {
        if(User.id) fetchFavoriteDevices(User.id).then(data => fetchFavoritesItems(data))
    },[])

    return(
        <>
        {Favorites.length > 0 ?
         <>
        <h1>Мои закладки</h1>
        <div className="ds-f">
          {Favorites.map((obj,index) => 
            <Card
            key = {index}
            id = {obj.id} 
            name = {obj.name} 
            url = {obj.img} 
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
            pathRoute = {SHOP_ROUTE}
          />
            } 
         </>
    )
}

export default Fav;