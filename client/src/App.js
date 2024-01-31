import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Slider } from "./components/Slider";
import { AppRouter } from "./components/AppRouter";
import { fetchDevices } from "./http/deviceApi";
import { fetchBasketDevices } from "./http/basketApi";
import { GetSneakersAction } from "./store/SneakersReducer";
import { fetchFavoriteDevices } from "./http/favoriteApi";
import { GetFavoritesAction } from "./store/FavoritesReducer";
import { GetBasketItemsAction } from "./store/BasketReducer";
import { ModalWind } from "./components/ModalWind";
import { GetOrdersAction } from "./store/OrdersReducer";
import { fetchOrderDevices } from "./http/orderApi";
import { fetchItems2 } from "./Functions/fetchItems";





export function App() {
  const BasketOpened = useSelector(state => state.Basket.BasketOpened)
  const {User} = useSelector(state => state.UserR)
  const {Sneakers} = useSelector(state => state.Sneakers)
  const {Orders} = useSelector(state => state.Orders)
  const {ModalOpen} = useSelector(state => state.AdminR)
  const dispatch = useDispatch()


  function fetchItems(data,key){
    let arr = [];
    data.forEach(e => {
          let s = Sneakers.filter((obj) => e.deviceId === obj.id)
          if(s.length) arr = [...arr,{...s[0],ItemId:e.id}]
    });  
    arr.length > 0 && key == "orders" ? dispatch(GetOrdersAction(arr)) : key == "baskets" ? dispatch(GetBasketItemsAction(arr)) : key == "favorites" &&  dispatch(GetFavoritesAction(arr)) 
  }

  
React.useEffect(() => {
function Start(){
      fetchDevices().then(data => dispatch(GetSneakersAction(data)))
      if(!User.id) return
      fetchBasketDevices(User.id).then(data => fetchItems(data,"baskets"))
      fetchFavoriteDevices(User.id).then(data => fetchItems(data,"favorites"))
      fetchOrderDevices(User.id).then(data => fetchItems(data,"orders"))
}
Start()
},[])

console.log(Orders)
 
return(
 <div className="wrapper">
      {ModalOpen && <ModalWind/>}
      {BasketOpened ? <Drawer/> : undefined}
      <Header/>
      <div className="content">
          <AppRouter/>
      </div>
  </div>
  );
}

