import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { getProducts } from "./Redux/slices/productSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components/products/Products.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Cart from "./components/Cart/Cart.jsx";
import "./App.scss";
import Overlay from "./components/Overlay/Overlay.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();
  async function getProductsData() {
    const response = await axios.get(`${import.meta.env.VITE_PRODUCT_API}`);
    return response;
  }
  // populating the products state on load
  useEffect(() => {
    getProductsData().then((res) => {
      dispatch(getProducts(res.data));
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      {isLoading ? <Loader /> : <Products />}
      {isCartOpen ? <Overlay /> : null}
      <Cart />
    </div>
  );
}

export default App;
