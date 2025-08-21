import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/connections" element={<div>Connection Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
