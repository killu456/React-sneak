import React from "react";
import {useDispatch} from "react-redux";
import { deleteBasketDevice } from "../http/basketApi";
import { repActive } from "../store/userReducer";
import { DelBasketAction } from "../store/BasketReducer";


function CardInBasket({id,name, url, price}){
    const dispatch = useDispatch()

    function delItem(){
        dispatch(repActive())
        deleteBasketDevice(id)
        dispatch(DelBasketAction(id))
    }

    return( 
    <div className="cartItem">
        <div
          style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL + url})` }}
          className="cartItemImg"></div>

        <div className="cartText">
          <p>{name}</p>
          <b>{`${price} руб`}</b>
        </div>
        <img onClick={() =>  delItem()} className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
      </div>
    );
}

export default CardInBasket;  