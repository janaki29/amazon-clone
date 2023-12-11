import { useDispatch } from "react-redux";
import "./CheckoutProduct.css";
import { removeFromBasket } from "./actions";
import { useEffect } from "react";
// import image from "./images/StockMarket.jpg";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>*</p>;
            })}
        </div>
      </div>
      <div className="image__container">
        <img src={image} height={"100px"} width={"100px"} />
      </div>
      <button onClick={removeFromBasketHandler}>Remove from basket</button>
    </div>
  );
};
export default CheckoutProduct;
