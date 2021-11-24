import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

return(
<div className="checkout">
    <div className="checkout__left">
    {basket?.length ===0? (
        <div className="checkout__remove">
            <h2>Your Shopping Basket is empty</h2>
        </div>
    ):(
        <div>
            <h1 className="checkout__title ">  Shopping Basket</h1>
            {basket.map((item) =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                
             
                
            ))}
        </div>
    )}
    </div>
    {basket.length > 0 && (
        <div className="checkout__right">
            <Subtotal/>
        </div>
    )}
    </div>

);
            }

 
export default Checkout;