import React from "react";

export default function BrandCard({ brand }) {
  const { name, img } = brand;
  return (
    // <div className="card card-compact w-52 bg-base-100 shadow-xl">
    //   <figure>
    //     <img src={img} alt="Brand Image" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{name}</h2>
    //   </div>
    // </div>
    <div className="card w-60 bg-base-100 shadow-xl bg-green-100">
      <figure className="px-2 pt-2">
        <img
          src={img}
          alt="Brand Name"
          className="rounded-xl w-28 h-28 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
}
