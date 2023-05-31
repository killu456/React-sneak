import CardInBasket from "./CardInBasket";
import Info from "../components/Info";


import React from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import {AddOrderAction, GetOrdersAction } from "../store/getCartOrders";
import { addToCard } from "../asyncAction/addCard";
import { RepCartOpenAction } from "../store/getItems";

function Drawer(props) {
  const dispatch = useDispatch();
  
  const Items = useSelector(state => state.Items.Items) 
  const ClickButton = useSelector(state => state.Orders.ClickButton)

  const Price = Items.reduce((acc,obj)=> acc+=obj.price,0);
  const Order = Math.floor(Math.random() * 100000);


  function ClickBut(){
      for(let i = 0;i < Items.length;i++){
          dispatch(addToCard(Items[i],Items));  
      }
      axios.post("https://645d3ef1250a246ae31b9fbb.mockapi.io/orders",{order:Order,orders : Items});
      dispatch(AddOrderAction())
  }

  function ClickCartRemove(){
    dispatch(RepCartOpenAction())
    dispatch(AddOrderAction())
  }
  

  return (
    <div className="overlay">
       
      <div className="drawer">
        <h2>
          Корзина <img onClick = {() => dispatch(RepCartOpenAction())} className="cu-p" src="./img/btn-remove.png" alt="Remove" />
        </h2>
        {ClickButton ?

        <Info 
          Title = {`Ваш заказ #${Order} скоро будет передан курьерской доставке`}
          Paragraph = {"Заказ оформлен!"}
          Url = {"/img/complete.png"}
          W = {83}
          H = {120}
          onRemove = {ClickCartRemove}
        />

        :
        <>

        {Items.length > 0 ? 

        <>
        <div className="items">
          {Items.map((obj,index)=> 
              <CardInBasket 
              key = {index}
              id = {obj.id}
              title = {obj.title}
              url = {obj.url}
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
              onRemove = {() => dispatch(RepCartOpenAction())}
            />
        }
      </>
        }
  
      </div>
      <div className="remove" onClick={() => dispatch(RepCartOpenAction())}></div>
    </div>
  );
}

export default Drawer;