import { useLoaderData } from "react-router-dom";
import CartDetails from "../../components/CartProductDetails/CartDetails";

export default function Cart() {
  const Products = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {Products.map((product) => {
          return (
            <CartDetails key={product._id} product={product}></CartDetails>
          );
        })}
      </div>
    </>
  );
}
