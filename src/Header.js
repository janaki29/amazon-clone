import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBasketTotal } from "./reducer";
const Header = () => {
  const basket = useSelector((state) => state.basket);
  const getNumberOfItemsInBakset = () => {
    let basketCount = 0;
    basket.map((item) => {
      basketCount += item.count;
    });
    return basketCount;
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i.pinimg.com/564x/ae/7f/ee/ae7fee496a3757129f7e6ac6e8795f15.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello guest</span>
            <span className="header__optionLineTwo"> Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {getNumberOfItemsInBakset()}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
