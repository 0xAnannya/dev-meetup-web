import { useState } from "react";
import image from "../../assets/loginBackground.jpg";
import axios from "axios";
import LoginPageAnimation from "../Animation/LoginPageAnimation";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("oscar@gmail.com");
  const [password, setPassword] = useState("Oscar@123");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Something Went Wrong");
      console.error("err:", err);
    }
  };

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>

      <div className="flex flex-col-reverse items-center sm:flex-row-reverse justify-center sm:items-center">
        {/* Login card */}
        <div className="card bg-base-100 w-full h-100  max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-center sm:text-left">
              Hello there
            </h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full"
                placeholder="Password"
              />
              <div className="mt-2 flex justify-end">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>
              {error && <p className="text-red-500 ">{error}</p>}

              <button className="btn btn-neutral w-full" onClick={handleLogin}>
                Login
              </button>
            </fieldset>
          </div>
        </div>

        {/* Animation (hidden on very small screens if needed) */}
        <div className="w-full flex justify-center sm:static fixed bottom-0 ">
          <LoginPageAnimation />
        </div>
      </div>
    </div>
  );
};

export default Login;
