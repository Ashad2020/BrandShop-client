import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

export default function SocialLogin() {
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("Logged In successfully");
        if (res.user?.email) {
          navigate("/");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="mx-auto">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="btn bg-[#74e0e0]"
      >
        Continue with Google
      </button>
    </div>
  );
}
