export const initialState = {
  basket: [
    {
        id: "123456",
        title:
          "Apple Watch SE (GPS, 40mm) - Gold Aluminium Case with Starlight Sport Band - Regular",
        price: 29000,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY218_.jpg",
    },
  ],
  user: null,
};
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
