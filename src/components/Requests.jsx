import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests } from "../utils/requestsSlice";

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

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <>No Request Found</>;
  return (
    <div className="  my-5">
      <h1 className="p-4  text-2xl opacity-80 ">Incoming Requests</h1>

      {requests.map((request) => {
        const { _id, name, breed, age, photoUrl, gender, locality } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className=" bg-base-100  justify-between flex-col md:flex-row flex my-5 mx-12 p-3 items-center w-full md:w-1/2 rounded-lg gap-4 shadow-xl"
          >
            <div className="flex justify-around items-around">
              <div className="flex-shrink-0">
                <img
                  alt="photo"
                  className="w-25 h-25 rounded-full object-cover"
                  src={photoUrl}
                />
              </div>
              <div className="text-left mx-4 flex flex-col">
                <h2 className="font-semibold text-xl">{name}</h2>
                <div className="flex flex-col sm:flex-row justify-normal gap-1 sm:gap-4 my-3">
                  {" "}
                  {age && <p>Age : {age}</p>} {}
                  {breed && <p>Breed: {breed}</p>}
                  {gender && <p>Gender: {gender}</p>}
                  {locality && <p>Locality: {locality}</p>}
                </div>

                {/* {about && <p>{about}</p>} */}
              </div>
            </div>
            <div className="card-actions  mt-2 flex">
              <button className="btn btn-success">Interested</button>
              <button className="btn btn-neutral">Ignore</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
