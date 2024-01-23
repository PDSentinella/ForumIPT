import React from "react";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage"
import Registo from "./Pages/Registo";
import UserProfilePage from "../src/Pages/UserProfilePage";
import { Route, Routes } from 'react-router-dom';
import ChannelPage from './Pages/ChannelPage.jsx'

function App() {

  return (
    <div className="overflow-y-hidden">
    <Routes>
    <Route
        exact
        path="/"
        element={localStorage.getItem("user") ? <HomePage/> : <Login/>}
      />
      <Route
        exact
        path="/profile"
        element={<UserProfilePage></UserProfilePage>}
      />
      <Route
        exact
        path="/Registo"
        element={<Registo></Registo>}
      />
      <Route
        exact
        path="/canal/:id"
        element={<ChannelPage></ChannelPage>}
      />
    </Routes>
    </div>
  );
}



export default App;
