import React from "react";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage"
import UserProfilePage from "../src/Pages/UserProfilePage"
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
    <Route
        exact
        path="/"
        element={localStorage.getItem("user") ? <HomePage /> : <Login />}
      />
      <Route
        exact
        path="/profile"
        element={<UserProfilePage></UserProfilePage>}
      />
    </Routes>
    </>
  );
}



export default App;
