import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Fav from "./pages/Favorites";
import SneakersItems from "./pages/SneakersItems";
import Orders from "./pages/Orders";
import User from "./pages/User";
import Info from "./components/Info";



import React from "react";

import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { SneakersFetch } from "./asyncAction/fetchSneakers";
import { ItemsFetch } from "./asyncAction/fetchItems";
import { FavoritesFetch } from "./asyncAction/fetchFavorites";





export function App() {
  const cartOpened = useSelector(state => state.Items.cartOpened)
  const dispatch = useDispatch()

React.useEffect(() => {
function fetchData(){
  dispatch(SneakersFetch())
  dispatch(ItemsFetch())
  dispatch(FavoritesFetch())
}
fetchData()
},[])
 
return(

 <div className="wrapper">
     



      {cartOpened ?
          <Drawer/>
        : 
      undefined}
      <Header/>

      <div className="content">
        <Routes>
            <Route path = "/favorites" element = {<Fav/>}/>
            <Route path = "/orders" element = {<Orders/>}/>
            <Route path = "/" element = { <SneakersItems/>}/>
            <Route path = "/user" element = {<User/>}/>
            <Route path="*" element = {<Info
                   Title = {"Перепроверьте пожалуйста"}
                   Paragraph = {"Вы неправильно ввели ссылку :("}
                   Url = {"/img/sad.png"}
                   W = {70}
                   H = {70}
            />}/>
        </Routes>
      </div>
    </div>
    );
}

