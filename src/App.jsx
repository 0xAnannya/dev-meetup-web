import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Login from "./Login";
import Feed from "./Feed";

import { Provider } from "react-redux";
import store from "./utils/Store";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<div>Connection Page</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
