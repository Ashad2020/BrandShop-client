import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import useAuth from "../../hooks/useAuth";

export default function SingUp() {
  const navigate = useNavigate();
  const { createUser, logOut } = useAuth();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      console.log("Enter correct password");
      toast.error(
        "Please give at least 6 characters with a capital letter and a special character"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        console.log(auth.currentUser);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        toast.success("User Created Successfully");
        //if (auth.currentUser?.email) {
        // const createdAt = auth.currentUser?.metadata?.creationTime;
        // const uid = auth.currentUser?.uid;
        // const email = auth.currentUser?.email;
        // const user = {
        //   email,
        //   createdAt,
        //   uid,
        // };
        // fetch(
        //   `https://brand-shop-server-7eqgjgoe9-md-ashads-projects.vercel.app/user`,
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(user),
        //   }
        // )
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     if (!data.insertedId) {
        //       toast.error("This user already exist!");
        //     }
        //   });
        // }
        logOut();
        navigate("/signin");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <h2>Sign Up Now</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Sing Up</button>
          </div>
        </form>
        <label className="label px-4 text-sm">
          Have an account?{" "}
          <Link to="/signin" className="label-text-alt link link-hover text-sm">
            Please Login
          </Link>
        </label>
      </div>
    </div>
  );
}
