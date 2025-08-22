import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import FeedSlicer from "./feedSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    feed: FeedSlicer,
  },
});

export default store;
