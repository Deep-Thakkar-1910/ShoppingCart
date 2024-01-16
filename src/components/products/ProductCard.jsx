/* eslint-disable react/prop-types */
import { memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/cartSlice.js";
import "./Products.scss";
const ProductCard = ({ title, id, price, image, description, category }) => {
  const dispatch = useDispatch();
  const cartObjectHandler = () => {
    dispatch(
      addToCart({
        title: title,
        id: id,
        price: price,
        image: image,
        category: category,
      })
    );
  };
  return (
    <div className="productCard">
      <img src={image} alt={title} className="productImage" />
      <div className="productContent">
        <span className="productCategory">{category}</span>
        {/* <h3 className="productTitle">{`${title.slice(0, 5)}...`}</h3> */}
        <h3 className="productTitle">{title}</h3>
        <p className="productDescription">{`${description.slice(
          0,
          100
        )}...`}</p>
        <h1>{price}</h1>
      </div>
      <button onClick={cartObjectHandler} className="cartBtn">
        Add To Cart
      </button>
    </div>
  );
};

export default memo(ProductCard);
