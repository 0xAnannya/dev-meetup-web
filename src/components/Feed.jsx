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

  return (
    <>
      {feed && (
        <div className="flex bg-[#FFF7ED] justify-center">
          <UserCard user={feed[0]} />
        </div>
      )}
      <div className="flex justify-end -mt-10">
        <PawsAnimation />
      </div>
    </>
  );
};

export default Feed;
