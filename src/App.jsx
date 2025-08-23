import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";

import { Provider } from "react-redux";
import store from "./utils/store";
import ProfilePage from "./components/ProfilePage";
import Connections from "./components/Connections";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
