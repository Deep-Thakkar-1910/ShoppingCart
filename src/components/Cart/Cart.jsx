import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { closeCart } from "../../Redux/slices/isCartOpen.js";
import { clearCart } from "../../Redux/slices/cartSlice.js";
import CartItems from "./CartItems.jsx";

import "./Cart.scss";
const Cart = () => {
  const state = useSelector((state) => state.cart);
  const cartState = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();
  let cartTotal = state.reduce((acc, item) => {
    return acc + item.quantity * parseFloat(item.price);
  }, 0);
  return (
    <div className={cartState ? "cart showCart " : "cart"}>
      <span
        className={state.length === 0 ? "showEmptyCart emptyCart" : "emptyCart"}
      >
        Your Cart Is Empty
      </span>
      <IoMdClose
        onClick={() => dispatch(closeCart(false))}
        className="closeIcon"
      />
      <div className="emptyDiv"></div>
      {state?.map((item) => {
        return (
          <div key={item.id}>
            <hr
              style={{
                display: "block",
                borderTop: "2px solid #ccc",
                margin: "30px 0 30px 0",
              }}
            />
            <CartItems
              item={item}
              title={item.title}
              quantity={item.quantity}
              image={item.image}
              price={item.price}
            />
          </div>
        );
      })}
      <span
        className={state.length > 0 ? "showCartTotal cartTotal" : "cartTotal"}
      >
        Total: {cartTotal.toFixed(2)}
      </span>
      <button
        onClick={() => dispatch(clearCart([]))}
        className={state.length > 0 ? "showClearCart clearCart" : "clearCart"}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
