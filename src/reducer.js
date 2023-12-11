export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(state.basket);
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      console.log(action.payload);
      let tempbasket = state.basket.filter((item) => {
        if (action.payload !== item.id) return item;
      });
      return {
        ...state,
        basket: tempbasket,
      };
    default:
      return state;
  }
};
export default reducer;
