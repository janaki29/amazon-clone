import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
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
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
export default Checkout;
