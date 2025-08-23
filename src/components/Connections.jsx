import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <>No Connections Found</>;

  return (
    <div className="text-center  my-5">
      <h1 className="p-4  text-3xl opacity-80 ">Connections</h1>

      {connections.map((connection) => {
        const { name, breed, age, about, photoUrl, gender } = connection;
        return (
          <div className=" bg-base-100 border-1 flex  m-4 p-3 items-center  rounded-lg w-full lg:w-1/2 gap-4 mx-auto shadow-md">
            <div className="flex-shrink-0">
              <img
                alt="photo"
                className="w-25 h-25 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 flex flex-col">
              <h2 className="font-semibold text-xl">{name}</h2>
              <div className="flex flex-col md:flex-row justify-between my-3">
                {" "}
                {age && <p>Age : {age}</p>} {}
                {breed && <p>Breed: {breed}</p>}
                {gender && <p>Gender: {gender}</p>}
              </div>

              {about && (
                <p>
                  {" "}
                  Meet Jolly, a gentle soul who loves long walks and afternoon
                  naps in the sun. I'm great with kids and other pets, and my
                  favorite hobby is collecting sticks from every park I visit.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
