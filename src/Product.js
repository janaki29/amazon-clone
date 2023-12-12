import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToBasket, incrementProductCount } from "./actions";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const addToBasketHandler = () => {
    let incrementflag = 0;
    basket.map((item) => {
      if (item.id === id) {
        incrementflag = 1;
      }
    });

    if (incrementflag === 0) {
      dispatch(
        addToBasket({
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        })
      );
    } else {
      dispatch(incrementProductCount(id));
    }
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
      <button onClick={addToBasketHandler}>Add to basket</button>
    </div>
  );
};
export default Product;
