import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function BrandDetails() {
  const Products = useLoaderData();

  return Products.length
    ? Products.length > 0 &&
        Products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
    : !Products.length && (
        <img
          src="https://i.ibb.co/yXWXYwH/no-product-found.png"
          alt="no-product-found"
          border="0"
          className="mx-auto"
        />
      );
}
