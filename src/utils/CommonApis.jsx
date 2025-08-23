import { useDispatch } from "react-redux";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "./constants";
import { useNavigate } from "react-router";

export const CommonApis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(
        BASE_URL + "/logOut",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return { handleLogOut };
};
