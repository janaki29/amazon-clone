import { useDispatch } from "react-redux";
import "./Product.css";
import { addToBasket } from "./actions";
// import image from "./images/StockMarket.jpg";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasketHanler = () => {
    dispatch(
      addToBasket({
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      })
    );
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
      <img src={image} />
      <button onClick={addToBasketHanler}>Add to basket</button>
    </div>
  );
};
export default Product;
