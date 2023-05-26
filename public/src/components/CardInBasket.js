import React from "react";

function CardInBasket({id,title, url, price,addToCart}){

    return( 
    <div className="cartItem">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="cartItemImg"></div>

        <div className="cartText">
          <p>{title}</p>
          <b>{`${price} руб`}</b>
        </div>
        <img onClick={() => addToCart({title,url,price,id})} className="removeBtn" src="/img/btn-remove.png" alt="Remove" />
      </div>
    );
}

export default CardInBasket;  