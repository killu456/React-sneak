import Drawer from "./components/Drawer";
import Header from "./components/Header";




import React from "react";

import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { SneakersFetch } from "./asyncAction/fetchSneakers";
import { ItemsFetch } from "./asyncAction/fetchItems";
import { FavoritesFetch } from "./asyncAction/fetchFavorites";
import { Slider } from "./components/Slider";
import { AppRouter } from "./components/AppRouter";
import { fetchDevices } from "./http/deviceApi";
import { fetchBasketDevices } from "./http/basketApi";
import { GetItemsAction } from "./store/getItems";
import { GetSneakersAction } from "./store/getSneakers";





export function App() {
  const cartOpened = useSelector(state => state.Items.cartOpened)
  const {User} = useSelector(state => state.UserR)
  const dispatch = useDispatch()

React.useEffect(() => {
function fetchData(){
  fetchDevices().then(data => dispatch(GetSneakersAction(data)))
  //fetchBasketDevices(User.id).then(data => dispatch(GetItemsAction(data)))
  dispatch(ItemsFetch())
  dispatch(FavoritesFetch())
}
fetchData()
},[])
 
return(
 <div className="wrapper">
      {cartOpened ? <Drawer/> : undefined}
      <Header/>
      <div className="content">
          <AppRouter/>
      </div>
  </div>
  );
}

