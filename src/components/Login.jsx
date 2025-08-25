import { useState } from "react";
import image from "../../assets/loginBackground.jpg";
import axios from "axios";
import LoginPageAnimation from "../Animation/LoginPageAnimation";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [breed, setBreed] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [location, setLocation] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSaveProfile = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        { age, name, photoUrl, emailId, password, about, breed, location },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Something Went Wrong");
      console.error("err:", err);
    }
  };

  const handleToggleIsLoginForm = () => {
    setIsLoginForm((prev) => !prev);
  };

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
      className="hero bg-base-200 min-h-full "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10 flex-grow">
        <div className="flex flex-col-reverse  items-center sm:flex-row-reverse justify-center sm:items-center">
          {/* Login card */}
          <div className="card bg-base-100 w-full my-10 h max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-center sm:text-left">
                Hello there
              </h1>
              <div className="overflow-y-auto max-h-94 scrol">
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

                  {!isLoginForm && (
                    <>
                      <label className="label">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input w-full"
                        placeholder="Name"
                      />
                      <label className="label">Age</label>
                      <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="input w-full"
                        placeholder="Age Of your Pet"
                      />
                      <label className="label">Breed</label>
                      <input
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="input w-full"
                        placeholder="Breed"
                      />
                      <label className="label">Location</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="input w-full"
                        placeholder="Where does your pet lives?"
                      />
                      <label className="label">Photo Url</label>
                      <input
                        type="text"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="input w-full"
                        placeholder=""
                      />
                      <label className="label">About</label>
                      <input
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="input w-full"
                        placeholder="Tell us something about your pet"
                      />
                    </>
                  )}
                </fieldset>

                {isLoginForm && (
                  <div className="mt-2 flex justify-end">
                    <a className="link link-hover text-sm">Forgot password?</a>
                  </div>
                )}
              </div>
              {error && <p className="text-red-500 ">{error}</p>}

              {isLoginForm ? (
                <>
                  {" "}
                  <button
                    className="btn btn-neutral w-full"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-neutral w-full"
                    onClick={handleSaveProfile}
                  >
                    Sign Up
                  </button>
                </>
              )}

              {isLoginForm ? (
                <div className="flex gap-2">
                  New User?{" "}
                  <p
                    className="underline hover:cursor-pointer hover:text-blue-500"
                    onClick={handleToggleIsLoginForm}
                  >
                    Sign Up Now!
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex gap-1">
                    Already a member,
                    <p
                      className=" hover:cursor-pointer hover:text-blue-500"
                      onClick={handleToggleIsLoginForm}
                    >
                      Login!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Animation (hidden on very small screens if needed) */}
          <div className=" ">
            <LoginPageAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
