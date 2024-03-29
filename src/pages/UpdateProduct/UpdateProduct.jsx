import { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function UpdateProduct() {
  const [product, setProduct] = useState({
    brand: "",
    productName: "",
    photoUrl: "",
    category: "",
    price: "",
    description: "",
    rating: "",
  });
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
  console.log(loadedProduct);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    fetch(
      `https://brand-shop-server-7eqgjgoe9-md-ashads-projects.vercel.app/product/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product modified successfully");
        }
      });
    setProduct({
      brand: "",
      productName: "",
      photoUrl: "",
      category: "",
      price: "",
      description: "",
      rating: "",
    });
    const form = event.target;
    form.reset();
    // Add further logic to handle the form data, e.g., sending it to a server.
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="hero bg-base-200 py-12">
      <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <div className="input-group">
              <select
                name="brand"
                className="select select-bordered"
                onChange={handleInputChange}
                defaultValue={brand}
                value={product.brand}
                required
              >
                <option disabled value="">
                  Pick Brand
                </option>
                <option>Panasonic</option>
                <option>TP-Link</option>
                <option>Minister</option>
                <option>Havit</option>
                <option>Fantech</option>
                <option>Baseus</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              className="input input-bordered"
              required
              defaultValue={productName}
              value={product.productName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoUrl"
              className="input input-bordered"
              required
              defaultValue={photoUrl}
              value={product.photoUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="input-group">
              <select
                name="category"
                className="select select-bordered"
                onChange={handleInputChange}
                defaultValue={category}
                value={product.category}
                required
              >
                <option disabled value="">
                  Product Category
                </option>
                <option>Science Kit</option>
                <option>Smart Watch</option>
                <option>Mouse</option>
                <option>Keyboard</option>
                <option>Router</option>
                <option>Power-Bank</option>
                <option>Headphone</option>
                <option>UPS & Stabilizer</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
              required
              defaultValue={price}
              value={product.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Short Description of the Product
              </span>
            </label>
            <textarea
              placeholder="Short Description"
              name="description"
              className="textarea textarea-bordered textarea-md w-full"
              defaultValue={description}
              value={product.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <div className="input-group">
              <select
                name="rating"
                className="select select-bordered"
                onChange={handleInputChange}
                defaultValue={rating}
                value={product.rating}
                required
              >
                <option disabled value="">
                  Rating
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
