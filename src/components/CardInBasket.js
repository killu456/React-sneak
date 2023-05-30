import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../asyncAction/addCard";

function CardInBasket({id,title, url, price}){
    const dispatch = useDispatch()
    const Items = useSelector(state => state.Items.Items)

    return( 
    <div className="cartItem">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="cartItemImg"></div>

        <div className="cartText">
          <p>{title}</p>
          <b>{`${price} руб`}</b>
        </div>
        <img onClick={() => dispatch(addToCard({title,url,price,id},Items))} className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
      </div>
    );
}

export default CardInBasket;  