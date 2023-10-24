import { useLoaderData } from "react-router-dom";
import CartDetails from "../../components/CartProductDetails/CartDetails";
import { useState } from "react";

export default function Cart() {
  const loadedProducts = useLoaderData();
  const [Products, setProducts] = useState(loadedProducts);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 ">
        {/* {Products.map((product) => {
          return (
            <CartDetails
              key={product._id}
              Products={Products}
              product={product}
              setProducts={setProducts}
            ></CartDetails>
          );
        })} */}
        {Products.length ? (
          Products.map((product) => {
            return (
              <CartDetails
                key={product._id}
                Products={Products}
                product={product}
                setProducts={setProducts}
              ></CartDetails>
            );
          })
        ) : (
          <h2 className="text-5xl text-center col-span-full">
            You have not added any products to your cart yet!
          </h2>
        )}
      </div>
    </>
  );
}
