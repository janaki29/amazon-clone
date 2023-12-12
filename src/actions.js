export const addToBasket = (item) => ({
  type: "ADD_TO_BASKET",
  payload: item,
});
export const removeFromBasket = (id) => ({
  type: "REMOVE_FROM_BASKET",
  payload: id,
});
export const incrementProductCount = (id) => ({
  type: "INCREMENT_PRODUCT_COUNT",
  payload: id,
});

export const decrementProductCount = (id) => ({
  type: "DECREMENT_PRODUCT_COUNT",
  payload: id,
});
