export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
export const incrementProductCount = (basket, id) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("add", state.basket);
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };
    case "REMOVE_FROM_BASKET":
      //Do check splice at 3.21.39
      console.log("remove", state.basket);
      let tempbasket = state.basket.filter((item) => {
        if (action.payload !== item.id) return item;
      });
      return {
        ...state,
        basket: tempbasket,
      };
    case "INCREMENT_PRODUCT_COUNT":
      console.log("increment", state.basket);
      let tempbasket_ = state.basket.map((item) => {
        return action.payload === item.id
          ? { ...item, count: item.count + 1 }
          : item;
      });
      return {
        ...state,
        basket: tempbasket_,
      };
    case "DECREMENT_PRODUCT_COUNT":
      console.log("decrement", state.basket);
      let tempbasket__ = state.basket.map((item) => {
        return action.payload === item.id
          ? { ...item, count: item.count - 1 }
          : item;
      });
      return {
        ...state,
        basket: tempbasket__,
      };
    default:
      return state;
  }
};
export default reducer;
