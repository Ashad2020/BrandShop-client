import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { loginUser, user } = useAuth();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password.length < 6) {
      toast.error("Please give at least 6 character password");
      console.log(email, password);
      return;
    }
    loginUser(email, password)
      .then((res) => {
        toast.success("Logged In successfully");
        if (res.user?.email) {
          // fetch(
          //   `https://brand-shop-server-7eqgjgoe9-md-ashads-projects.vercel.app/user/${res.user?.uid}`
          // )
          //   .then((res) => {
          //     return res.json();
          //   })
          //   .then((data) => {
          //     // if (data.insertedId) {
          //     //   alert("user added database");
          //     // }
          //     console.log(data);
          //   });
          navigate("/");
        }
      })
      .catch((err) => {
        err && toast.error("Please give your correct email and password");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <h2>Login Now</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <label className="label px-4 text-sm">
          New here?{" "}
          <Link to="/signup" className="label-text-alt link link-hover text-sm">
            Create an account
          </Link>
        </label>
      </div>
    </div>
  );
}
