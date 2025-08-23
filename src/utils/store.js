import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import FeedReducer from "./feedSlice";
import ConnectionsReducer from "./connectionsSlice";
import RequestsReducer from "./requestsSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    feed: FeedReducer,
    connections: ConnectionsReducer,
    requests: RequestsReducer,
  },
});

export default store;
