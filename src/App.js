import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Fav from "./pages/Favorites";
import SneakersItems from "./pages/SneakersItems";
import Orders from "./pages/Orders";
import User from "./pages/User";



import React from "react";
import axios from "axios";

import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SneakersFetch } from "./asyncAction/fetchSneakers";
import { DelItemsAction,GetItemsAction} from "./store/getItems";
import { ItemsFetch } from "./asyncAction/fetchItems";
import { FavoritesFetch } from "./asyncAction/fetchFavorites";
import { DelFavoritesAction,GetFavoritesAction} from "./store/getFavorites";



export function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const dispatch = useDispatch()

  const Items = useSelector(state => state.Items.Items)
  const Favorites = useSelector(state => state.Favorites.Favorites)

React.useEffect(() => {
function fetchData(){
  dispatch(SneakersFetch())
  dispatch(ItemsFetch())
  dispatch(FavoritesFetch())
}
fetchData()
},[])
 

 async function addToCart(obj){ 
  const objCart = Items.find((elem)=> elem.title === obj.title) 
  if(!objCart){ 
     const {data} = await axios.post("https://645bd41aa8f9e4d6e774412f.mockapi.io/items",obj); 
     dispatch(GetItemsAction([data])); 
  }
  else{
    axios.delete(`https://645bd41aa8f9e4d6e774412f.mockapi.io/items/${objCart.id}`); 
    dispatch(DelItemsAction(objCart.title));
  }
}
  

async function addToFav(obj){
  const objCart = Favorites.find((elem)=> elem.title === obj.title) 
  if(!objCart){ 
     const {data} = await axios.post("https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites",obj); 
     dispatch(GetFavoritesAction([data])); 
  }
  else{
    axios.delete(`https://645d3ef1250a246ae31b9fbb.mockapi.io/favorites/${objCart.id}`); 
    dispatch(DelFavoritesAction(objCart.title));
  }
}

return(
 <div className="wrapper">
      {cartOpened ?
          <Drawer 
          addToCart = {addToCart}
          onClickCartRemove = {()=> setCartOpened(false)}  
          />
        : 
      undefined}
      <Header onClickCart = {()=> setCartOpened(true)}/>

      <div className="content">
      <Routes>
            <Route path = "/favorites" element = {
                  <Fav 
                  addToCart = {addToCart}
                  addToFav = {addToFav}/>
            }/>
             <Route path = "/orders" element = {
                  <Orders/>
            }/>
            <Route path = "/" element = {
                  <SneakersItems
                  addToCart = {addToCart}
                  addToFav={addToFav}
                  />
            }/>
            <Route path = "/user" element = {
                <User/>
            }/>
        </Routes>
        </div>
    </div>
    );
}

