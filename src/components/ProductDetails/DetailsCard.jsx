import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

export default function DetailsCard() {
  const { user } = useAuth();

  const loadedProduct = useLoaderData();
  const {
    _id,
    brand,
    productName,
    photoUrl,
    category,
    price,
    description,
    rating,
  } = loadedProduct;

  const handleAddToCart = () => {
    const addToCart = {
      uid: user.uid,
      email: user.email,
      brand,
      productName,
      photoUrl,
      category,
      price,
      description,
      rating,
    };

    fetch(
      "https://brand-shop-server-7eqgjgoe9-md-ashads-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCart),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added in your cart");
        }
      });
  };

  return (
    <div className="card w-96 bg-green-100 shadow-xl mx-auto my-8">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt={category}
          className="rounded-xl h-60 w-4/5 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Product Name: {productName}</h2>
        <p>Brand Name: {brand}</p>
        <p>{description}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
