import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import useAuth from "../../../hooks/useAuth";

export default function Navbar() {
  let { user, logOut } = useAuth();

  return (
    <div className="navbar bg-base-100 text-xl px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-xl">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600 "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a>Add Product</a>
            </li>
            <li>
              <a>My Cart</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex h-8 w-72">
          <svg viewBox="0 0 400 36" fill="#2E4374">
            <g fillRule="evenodd">
              <g>
                <g transform="translate(.347)">
                  <path
                    id="logo-wordmark-brand_svg__Fill-1"
                    d="M98.445 35.118V17.965h-3.677v-5.687h3.677V4.283l6.244-1.413v9.408h4.69v5.687h-4.69v17.153z"
                  ></path>
                  <path d="M87.394 35.118V22.915c0-4.421-2.402-5.382-4.805-5.382-2.402 0-4.805.913-4.805 5.286v12.299h-6.03v-22.84h6.03v1.699c1.324-.961 2.942-2.115 6.13-2.115 5.098 0 9.51 2.932 9.51 10.092v13.164h-6.03zM56.484 17.513c2.694-.61 5.382.495 6.878 2.584L51.458 22.79c.41-2.52 2.332-4.668 5.026-5.277zm6.945 9.91a6.57 6.57 0 01-3.98 2.679c-2.711.614-5.416-.51-6.907-2.626l11.942-2.702 1.944-.44 3.72-.841a11.782 11.782 0 00-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.611 8.95 3.863-.875 6.868-3.46 8.376-6.751l-5.654-1.269z"></path>
                  <path
                    id="logo-wordmark-brand_svg__Fill-2"
                    d="M31.89 35.118l-9.364-22.84h6.57l5.932 15.49 5.982-15.49h6.57l-9.365 22.84z"
                  ></path>
                  <path d="M10.703 17.507c2.694-.61 5.382.495 6.878 2.584L5.677 22.785c.41-2.52 2.332-4.668 5.026-5.278zm6.945 9.91a6.57 6.57 0 01-3.98 2.68c-2.71.613-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.718-.842a11.782 11.782 0 00-.31-2.371c-1.513-6.426-8.055-10.433-14.61-8.95C2.888 13.65-1.2 20.063.314 26.489c1.514 6.426 8.055 10.432 14.611 8.949 3.864-.874 6.869-3.46 8.376-6.75l-5.654-1.27z"></path>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addproduct"}>Add Product</NavLink>
          </li>
          <li>
            <a>My Cart</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="Photo of user" />
              </div>
            </label>
            <div>
              <a className="justify-between">{user.displayName}</a>
            </div>

            <div>
              <button onClick={logOut}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/signin">Login</Link>
        )}
      </div>
    </div>
  );
}
