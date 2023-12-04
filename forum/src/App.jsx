import React from "react";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage"
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
    </Routes>
    </>
  );
}



export default App;
