import "./Navbar.scss";
import { IoCart } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../Redux/slices/isCartOpen.js";
const Navbar = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = state.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="navbar">
      <div className="brand">
        <h1>Cartify</h1>
        <IoCart className="brandIcon" />
      </div>
      <div>
        <div className="shoppingCart" onClick={() => dispatch(openCart(true))}>
          <IoCart className="cartIcon" />
          <div className={cartItems ? "cartQuantity" : ""}>
            <div>
              <p className={"cartCount"}>{cartItems ? cartItems : null}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
