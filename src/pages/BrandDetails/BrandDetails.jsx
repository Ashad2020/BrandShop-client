import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Advertisement from "../../components/Advertisement/Advertisement";

export default function BrandDetails() {
  const Products = useLoaderData();

  return (
    <>
      <Advertisement Products={Products}></Advertisement>
      {Products.length
        ? Products.length > 0 && (
            <div className="p-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )
        : !Products.length && (
            <img
              src="https://i.ibb.co/yXWXYwH/no-product-found.png"
              alt="no-product-found"
              border="0"
              className="mx-auto"
            />
          )}
    </>
  );
}
