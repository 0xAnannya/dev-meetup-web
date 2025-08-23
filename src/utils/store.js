import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import FeedReducer from "./feedSlice";
import ConnectionsReducer from "./connectionsSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    feed: FeedReducer,
    connections: ConnectionsReducer,
  },
});

export default store;
