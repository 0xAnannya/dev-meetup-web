import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const reviewRequests = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <div className="flex justify-center my-10 text-2xl font-semibold">
        No Request Found
      </div>
    );
  return (
    <div className=" flex bg-base-200 flex-start items-center flex-col min-h-screen  w-full ">
      <h1 className="p-4  text-2xl opacity-80 ">Incoming Requests</h1>

      {requests.map((request) => {
        const { _id, name, breed, age, photoUrl, gender, locality } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className=" bg-base-100  border-1  md:flex-row 
            flex my-3  p-3 max-h-fit items-center w-2xl  
            rounded-lg  shadow-xl flex-col justify-between"
          >
            <div className="flex justify-around items-around">
              <div className="flex-shrink-0">
                <img
                  alt="photo"
                  className="w-25 h-25 rounded-full object-cover"
                  src={photoUrl}
                />
              </div>
              <div className="text-left mx-4 flex  flex-col">
                <h2 className="font-semibold text-xl">{name}</h2>
                <div className="grid grid-cols-2 sm:flex-row justify-normal gap-1 sm:gap-4 my-3">
                  {" "}
                  {age && <p>Age : {age}</p>} {}
                  {breed && <p>Breed: {breed}</p>}
                  {gender && <p>Gender: {gender}</p>}
                  {locality && <p>Locality: {locality}</p>}
                </div>

                {/* {about && <p>{about}</p>} */}
              </div>
            </div>
            <div className="card-actions  mt-2 flex  flex-row md:flex-col">
              <button
                className="btn btn-success"
                onClick={() => reviewRequests("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-neutral"
                onClick={() => reviewRequests("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
