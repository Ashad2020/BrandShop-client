export default function ProductCard({ product }) {
  const { brand, productName, photoUrl, category, price, description, rating } =
    product;
  return (
    <div className="card w-96 bg-green-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt={category} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>{brand}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}
