import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, image, price }) {
   const [{},dispatch] = useStateValue(); 
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,  
      }

    })
  };
  return (
    <div className="product">
       
       <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
        <p >
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        </div>
      
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon />
              // <StarOutlineIcon/>
            ))}
        </div>
        
        </div>
        <img src={image} alt=""></img> 
      <button onClick={addToBasket}>Add to Basket</button>


      </div>

    

  );
}

export default Product;
