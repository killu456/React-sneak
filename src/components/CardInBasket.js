import React from "react";
import App, { AppContext } from "../App";

function CardInBasket(props){
  const {addToCart} = React.useContext(AppContext);

    return( 
    <div className="cartItem">
        <div
          style={{ backgroundImage: `url(${props.url})` }}
          className="cartItemImg"></div>

        <div className="cartText">
          <p>{props.title}</p>
          <b>{`${props.price} руб`}</b>
        </div>
        <img onClick={() => addToCart(props)} className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
      </div>
    );
}

export default CardInBasket;  