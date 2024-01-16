/* eslint-disable react/prop-types */
import { memo } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/slices/cartSlice.js";
import "./Cart.scss";
const CartItems = ({ title, image, price, quantity, item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItems">
      <img src={image} alt={title} />
      <div className="cartContent">
        <h3 className="cartTitle">{`${title.slice(0, 11)}...`}</h3>
        <h2 className="cartPrice">{`${(parseFloat(price) * quantity).toFixed(
          2
        )}$`}</h2>
        <div className="cartQuantity">
          <FaMinus
            className="quantityButtons"
            onClick={() => dispatch(removeFromCart(item))}
          />
          <span className="quantityText">{quantity}</span>
          <FaPlus
            className="quantityButtons"
            onClick={() => dispatch(addToCart(item))}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CartItems);
