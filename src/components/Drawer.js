import CardInBasket from "./CardInBasket";
import Info from "../components/Info";


import React from "react";
import axios from "axios";

function Drawer(props) {
  const [clickButton,setClickButton] = React.useState(false);

  const Price = props.items.reduce((acc,obj)=> acc+=obj.price,0);
  const Order = Math.floor(Math.random() * 100000);


  function ClickBut(){
      setClickButton(!clickButton)
      for(let i = 0;i < props.items.length;i++){
          props.addToCart(props.items[i]);  
      }
      axios.post("https://645d3ef1250a246ae31b9fbb.mockapi.io/orders",{order:Order,orders : props.items});
  }

  

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина <img onClick = {props.onClickCartRemove} className="cu-p" src="./img/btn-remove.png" alt="Remove" />
        </h2>
        {clickButton ?

        <Info 
          Title = {`Ваш заказ #${Order} скоро будет передан курьерской доставке`}
          Paragraph = {"Заказ оформлен!"}
          Url = {"/img/complete.jpg"}
          W = {83}
          H = {120}
          onRemove = {props.onClickCartRemove}
        />

        :
        <>

        {props.items.length > 0 ? 

        <>
        <div className="items">
          {props.items.map((obj,index)=> 
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
              Url = {"/img/empty-cart.jpg"}
              W = {120}
              H = {120}
              onRemove = {props.onClickCartRemove}
            />
        }
      </>
        }
  
      </div>
    </div>
  );
}

export default Drawer;