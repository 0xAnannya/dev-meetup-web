import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import DogNManAnimation from "../Animation/DogNManAnimation";

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
  const navigate = useNavigate();

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
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError(true);
      if (err.status === 500) setStatus("Something Went Wrong");
    }
  };

  return (
    <div className="w-full flex  justify-center">
      <div className=" bg-[#fdf6e3] border-base-900 rounded-box  w-fit h-fit border p-7 my-20">
        <legend className="text-2xl font-bold mb-4">{formTitle}</legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter name"
              value={name}
              width={500}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Breed */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Breed</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Age</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* About */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">About</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Something about them"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter photo URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
        </div>

        {/* Status */}
        {error ? (
          <div className="text-red-500 mt-2">{status}</div>
        ) : (
          <div className="text-green-600 text-base mt-2">{status}</div>
        )}

        {/* Save button */}
        <button
          className="btn btn-neutral w-full mt-15"
          onClick={handleSaveProfile}
        >
          Save Profile
        </button>
      </div>
      <div>
        <DogNManAnimation />
      </div>
    </div>
  );
};

export default EditProfilePage;
