import toast from "react-hot-toast";

export default function CartDetails({ product, Products, setProducts }) {
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

  const handleDelete = () => {
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product removed from your cart!");
        }
      });
    const updateedProducts = Products.filter((product) => product._id != _id);
    console.log(_id);
    console.log(updateedProducts);
    setProducts(updateedProducts);
  };
  return (
    <div className="card bg-green-100 shadow-xl">
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
          <button onClick={handleDelete} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
