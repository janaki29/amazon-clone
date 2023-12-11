import { useSelector } from "react-redux";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";
import { useEffect } from "react";
const Checkout = () => {
  const basket = useSelector((state) => state.basket);
  // console.log(basket);

  // useEffect(() => {}, [basket]);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/PNow/PD-Leadup/Header.jpg"
        />
        <div>
          <h2 className="checkout__title"> Your shopping basket</h2>
        </div>
        <div className="basket__item">
          {basket.map((item) => {
            return (
              item.title !== "" && (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              )
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
