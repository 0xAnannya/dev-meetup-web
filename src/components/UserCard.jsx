import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err.message);
    }
  };

  const { _id, name, breed, photoUrl, age, about } = user;
  return (
    <div className="card bg-[#FFFFFF] w-95 mt-15 shadow-sm">
      <figure>
        <img src={photoUrl} className="w-full p-4" alt="Dogs" />
      </figure>
      <div className="card-body ">
        <p className="flex w-full b text-2xl font-bold">{name}</p>

        <div className="flex   mt-1 ">
          {age && (
            <p className="text-[#ba6230] font-semibold text-lg ">Age: {age}</p>
          )}
          {breed && (
            <p className="text-[#ba6230] font-semibold text-lg ">
              Breed: {breed}
            </p>
          )}
        </div>
        {about && <p>{about}</p>}

        <div className="card-actions justify-center mt-2 flex">
          <button
            className="btn btn-success"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
