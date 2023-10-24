import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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
    <div className="card  bg-green-100 shadow-xl">
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
          <Link to={`/updateproduct/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          <Link to={`/productdetails/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
