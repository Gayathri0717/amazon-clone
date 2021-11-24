import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import  CurrencyFormat from "react-currency-format";
import{useStateValue} from "./StateProvider";  
import "./Subtotal.css";
import {getBasketTotal} from "./reducer";

function Subtotal() {  
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
            Subtotal({basket.length} items): <strong>{ ` ${value} `}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> this order contains a gift
                </small>
                </>
            )}
            decimalscale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSepartor={true}
                prefix={"₹"}
            
            />
<button>Proceed to Checkout</button>            
        </div>
    );
}

export default Subtotal;
