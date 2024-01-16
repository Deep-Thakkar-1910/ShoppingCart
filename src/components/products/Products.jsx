import { memo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "../products/Products.scss";
const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productsContainer">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            id={product.id}
            description={product.description}
            category={product.category}
            image={product.image}
            price={product.price + " $"}
          />
        );
      })}
    </div>
  );
};

export default memo(Products);
