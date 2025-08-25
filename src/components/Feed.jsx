import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import PawsAnimation from "../Animation/PawsAnimation";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feed == null || feed.length === 0)
    return (
      <div className="flex justify-center my-10 text-2xl font-semibold">
        No New User Found
      </div>
    );

  return (
    <>
      <div className="bg-[#FFF7ED] w-full justify-center flex">
        {feed && (
          <div>
            <UserCard user={feed[0]} />
          </div>
        )}
      </div>
      {/* <div className=" ">
        <PawsAnimation />
      </div> */}
    </>
  );
};

export default Feed;
