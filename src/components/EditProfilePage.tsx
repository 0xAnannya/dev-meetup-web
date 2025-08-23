import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfilePage = ({ formTitle, user }) => {
  const [name, setName] = useState(user?.name || "");
  const [breed, setBreed] = useState(user?.breed || "");
  const [age, setAge] = useState(user?.age || "");
  const [about, setAbout] = useState(user?.about || "");
  const [location, setLocation] = useState(user?.location || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          name,
          breed,
          age,
          about,
          location,
          photoUrl,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data.data));
      if (res.status === 200) {
        setError(false);
        setStatus(res?.data?.message);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      if (err.status === 500) setStatus("Something Went Wrong");
    }
  };

  return (
    <div className="flex w-full justify-center mt-10 min-h-screen">
      <div className="">
        <fieldset className="fieldset bg-[#fdf6e3] border-base-900 rounded-box w-sm border p-4">
          <legend className="fieldset-legend text-2xl">{formTitle}</legend>
          <label className="label mt-3">Name</label>
          <input
            type="text"
            className="input"
            placeholder=""
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label className="label mt-3">Breed</label>
          <input
            type="text"
            className="input"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="my-awesome-page"
          />

          <label className="label mt-3">Age</label>
          <input
            type="text"
            className="input"
            value={age}
            placeholder="Name"
            onChange={(e) => setAge(e.target.value)}
          />

          <label className="label mt-3">About</label>
          <input
            type="text"
            className="input"
            value={about}
            placeholder="My awesome page"
            onChange={(e) => setAbout(e.target.value)}
          />

          <label className="label mt-3">Location</label>
          <input
            type="text"
            className="input"
            value={location}
            placeholder="My awesome page"
            onChange={(e) => setLocation(e.target.value)}
          />

          <label className="label mt-3">Photo URL</label>
          <input
            type="text"
            className="input"
            value={photoUrl}
            placeholder="My awesome page"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />

          {error ? (
            <div className="text-red-500 mt-2">{status}</div>
          ) : (
            <div className="text-green-600 text-base mt-2">{status}</div>
          )}

          <button
            className="btn btn-neutral w-full mt-5"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default EditProfilePage;
