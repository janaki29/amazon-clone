import { useSelector } from "react-redux";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";

const Subtotal = () => {
  const basket = useSelector((state) => state.basket);

  const getSubtotalAmount = () => {
    let amount = 0;
    basket.map((item) => {
      amount += item.price;
    });
    return amount;
  };

  return (
    <div className="subtotal">
      Subtotal Component
      <NumericFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal (0 items):<strong>{getSubtotalAmount()}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        value={getSubtotalAmount()}
        thousandSeparator=","
        decimalSeparator="."
        prefix="$"
        decimalScale={2} // For rounding to two decimals
        displayType="text" // To display the formatted string
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};
export default Subtotal;
