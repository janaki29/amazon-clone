import { useSelector } from "react-redux";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";

const Subtotal = () => {
  const basket = useSelector((state) => state.basket);
  const getNumberOfItemsInBakset = () => {
    let basketCount = 0;
    basket.map((item) => {
      basketCount += item.count;
    });
    return basketCount;
  };

  const getSubtotalAmount = () => {
    let amount = 0;
    basket.map((item) => {
      amount += item.price * item.count;
    });
    return amount;
  };
  console.log("Real time", basket);
  return (
    <div className="subtotal">
      Subtotal Component
      <NumericFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({getNumberOfItemsInBakset()} items):
                <br></br>
                <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        value={getSubtotalAmount().toFixed(2)}
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
