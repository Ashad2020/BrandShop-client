import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { auth } from "../../config/firebaseConfig";

export default function SocialLogin() {
  const navigate = useNavigate();
  const { googleLogin, user } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("Logged In successfully");
        console.log("firebase res", res);
        if (res.user?.email) {
          fetch(`http://localhost:5000/user/${res.user?.uid}`)
            .then((response) => {
              console.log(auth.currentUser?.uid);
              return response.json();
            })
            .then((data) => {
              console.log("data uid", data.uid);
              console.log(auth.currentUser?.uid);
              if (!data?.uid) {
                if (auth.currentUser?.email) {
                  const createdAt = auth.currentUser?.metadata?.creationTime;
                  const uid = auth.currentUser?.uid;
                  const email = auth.currentUser?.email;
                  const user = {
                    email,
                    createdAt,
                    uid,
                  };
                  fetch(`http://localhost:5000/user`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      if (!data.insertedId) {
                        toast.error("This user already exist!");
                      }
                    });
                }
              }
            })
            .catch((err) => console.log(err));
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
