import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

return(
<div className="checkout">
    {basket?.length ===0? (
        <div>
            <h2>Your Shopping Basket is empty</h2>
        </div>
    ):(
        <div>
            <h3 className="checkout__title ">  Shopping Basket</h3>
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
);
            }

 
export default Checkout;