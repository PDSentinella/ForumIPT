import React from "react";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage"
import UserProfilePage from "../src/Pages/UserProfilePage"
import { Route, Routes } from 'react-router-dom';
import ChannelPage from "./Pages/ChannelPage";
function App() {

  return (
    <div className="overflow-y-hidden">
    <Routes>
    <Route
        exact
        path="/"
        element={localStorage.getItem("user") ? <HomePage/> : <HomePage/>}
      />
      <Route
        exact
        path="/profile"
        element={<UserProfilePage></UserProfilePage>}
      />
    </Routes>
    </div>
  );
}



export default App;
