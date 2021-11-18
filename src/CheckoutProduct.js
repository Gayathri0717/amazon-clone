import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./CheckoutProduct.css"; 
import { useStateValue } from "./StateProvider";



function CheckoutProduct({ id, title, image, price, rating }) {
   const [{Basket},dispatch] = useStateValue();
   console.log( id, title, image, price, rating );
  const removeFromBasket = () => {
    dispatch({
        type:'REMOVE_FROM_BASKET',
          id:id,});
  };
  return (
    <div className="checkoutProduct">
        <div className="checkProduct__image">
      <img src={image} alt="/"></img>

        </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <StarRateIcon />
              // <StarOutlineIcon/>
            ))}
        </div>
      <button onClick={removeFromBasket}>Remove FromBasket</button>

       
      </div>
    </div>
  );
}

export default CheckoutProduct;
