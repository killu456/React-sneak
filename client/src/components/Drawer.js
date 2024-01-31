import CardInBasket from "./CardInBasket";
import Info from "../components/Info";


import React from "react";
import {useDispatch, useSelector } from "react-redux";
import {AddOrderAction} from "../store/OrdersReducer";
import { GetBasketItemsAction, RepBasketOpenAction} from "../store/BasketReducer";
import { SHOP_ROUTE } from "../utils/constants";
import { deleteBasketDevice, fetchBasketDevices } from "../http/basketApi";
import { createOrderDevice } from "../http/orderApi";
import { fetchItems2 } from "../Functions/fetchItems";


function Drawer(props) {
  const dispatch = useDispatch();
  
  const Items = useSelector(state => state.Basket.BasketItems) 
  const {Sneakers} = useSelector(state => state.Sneakers) 
  const {User,active} = useSelector(state => state.UserR) 
  const ClickButton = useSelector(state => state.Orders.ClickButton)

  const Price = Items.reduce((acc,obj)=> acc+=obj.price,0);
  const Order = Math.floor(Math.random() * 100000);

  function fetchBasketItems(data){
    let arr = [];
    data.forEach(e => {
          let s = Sneakers.filter((obj) => e.deviceId === obj.id)
          if(s.length) arr = [...arr,{...s[0],ItemId:e.id}]
    });  
    if(arr.length) dispatch(GetBasketItemsAction(arr)) 
  }

  React.useEffect(() => {
      if(User.id) fetchBasketDevices(User.id).then(data => fetchBasketItems(data))
  },[])


  function ClickBut(){
      createOrderDevice({userId:User.id,orders:Items})
      dispatch(AddOrderAction())
      dispatch(GetBasketItemsAction([]))

      Items.forEach(e => {
        deleteBasketDevice(e.ItemId)
      })
  }

  function ClickCartRemove(){
    dispatch(RepBasketOpenAction())
    dispatch(AddOrderAction())
  }

  

  return (
    <div className="overlay">
       
      <div className="drawer">
        <h2>
          Корзина <img onClick = {() => dispatch(RepBasketOpenAction())} className="cu-p" src="./img/btn-remove.png" alt="Remove" />
        </h2>
        {ClickButton ?

        <Info 
          Title = {`Ваш заказ #${Order} скоро будет передан курьерской доставке`}
          Paragraph = {"Заказ оформлен!"}
          Url = {"/img/complete.png"}
          W = {83}
          H = {120}
          onRemove = {ClickCartRemove}
          pathRoute = {SHOP_ROUTE}
        />

        :
        <>

        {Items.length > 0 ? 

        <>
        <div className="items">
          {Items.map((obj,index)=> 
              <CardInBasket 
              key = {index}
              id = {obj.ItemId}
              name = {obj.name}
              url = {obj.img}
              price = {obj.price}
              />
          )}
        </div>

    
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Сумма:</span>
              <div></div>
              <b>{`${Price} руб.`}</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{`${Math.floor(Price * 0.05)} руб.`}</b>
            </li>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{`${Math.floor(Price * 0.05)+Price} руб.`}</b>
            </li>
          </ul>
          <button onClick={() => ClickBut()} className="greenButton">
            Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
          </button>
        </div>
        </> 
        :

            <Info 
              Title = {"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              Paragraph = {"Корзина пустая"}
              Url = {"/img/empty-cart.png"}
              W = {120}
              H = {120}
              onRemove = {() => dispatch(RepBasketOpenAction())}
              pathRoute = {SHOP_ROUTE}
            />
        }
      </>
        }
  
      </div>
      <div className="remove" onClick={() => dispatch(RepBasketOpenAction())}></div>
    </div>
  );
}

export default Drawer;