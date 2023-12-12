import { useDispatch } from "react-redux";
import "./CheckoutProduct.css";
import {
  addToBasket,
  decrementProductCount,
  incrementProductCount,
  removeFromBasket,
} from "./actions";
import { useEffect } from "react";
// import image from "./images/StockMarket.jpg";
import Rating from "@mui/material/Rating";

const CheckoutProduct = ({ id, title, image, price, rating, count }) => {
  const dispatch = useDispatch();

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket(id));
  };

  useEffect(() => {
    if (count === 0) removeFromBasketHandler();
  }, [count]);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__quantity">
          <small>Quantity:</small>

          <button onClick={() => dispatch(decrementProductCount(id))}>-</button>

          <strong className="checkoutProduct__quantityValue">{count}</strong>
          <button onClick={() => dispatch(incrementProductCount(id))}>+</button>
        </p>
        <div className="checkoutProduct__rating">
          <Rating name="read-only" value={rating} readOnly size={"small"} />
        </div>
        <button onClick={removeFromBasketHandler}>Remove from basket</button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
