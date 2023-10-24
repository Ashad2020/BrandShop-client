import { Link } from "react-router-dom";

export default function CartDetails({ product }) {
  const {
    _id,
    brand,
    productName,
    photoUrl,
    category,
    price,
    description,
    rating,
  } = product;
  return (
    <div className="card w-96 bg-green-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt={category}
          className="rounded-xl h-60 w-4/5 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>{brand}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}
