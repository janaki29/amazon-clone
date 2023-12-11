export const addToBasket = (item) => ({
  type: "ADD_TO_BASKET",
  payload: item,
});
export const removeFromBasket = (id) => ({
  type: "REMOVE_FROM_BASKET",
  payload: id,
});
