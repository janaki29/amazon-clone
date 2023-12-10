import "./Subtotal.css";
import { NumericFormat } from "react-number-format";

const Subtotal = () => {
  return (
    <div className="subtotal">
      Subtotal Component
      <NumericFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal (0 items):<strong>0</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        // value={getBasketTotal(basket)}
        value={0}
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
