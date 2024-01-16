import "./Overlay.scss";
import { useDispatch } from "react-redux";
import { closeCart } from "../../Redux/slices/isCartOpen";
const Overlay = () => {
  const dispatch = useDispatch();
  return (
    <div className="overlay" onClick={() => dispatch(closeCart(false))}></div>
  );
};

export default Overlay;
