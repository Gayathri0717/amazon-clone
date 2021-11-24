export const initialState = {
  basket: [
    {
        id: "123456",
        title:
          "Apple Watch SE (GPS, 40mm) - Gold Aluminium Case with Starlight Sport Band - Regular",
        price: 29000,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY218_.jpg",

        id:"1234",
        title:"Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage) Without Offers",
        price:35000,
        rating:5,
        image:"https://images-eu.ssl-images-amazon.com/images/I/41bfYmgS8nL._AC_SR400,600_.jpg",


        
    },
  ],
  user: null,
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exist in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product(id:${action.id} as its not in basket)`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
