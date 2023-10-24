import { Link } from "react-router-dom";

export default function BrandCard({ brand }) {
  const { _id, name, img } = brand;
  return (
    <Link to={`/brandDetails/${_id}`}>
      <div className="card bg-[#F0F0F0] shadow-xl ">
        <figure className="px-2 pt-2">
          <img
            src={img}
            alt="Brand Name"
            className="rounded-xl w-28 h-28 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <svg
            role="presentation"
            focusable="false"
            width="40"
            height="40"
            className="hover:hidden"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
              fill="gray"
            ></path>
          </svg>
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
}
