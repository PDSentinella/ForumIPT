import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Registo from "./Pages/Registo";
import UserProfilePage from "../src/Pages/UserProfilePage";
import ChannelPage from './Pages/ChannelPage.jsx';
import DashBoard from './Pages/Dashboard/DashBoard.jsx';
import Geral from './Pages/Dashboard/Geral.jsx';
import Users from './Pages/Dashboard/Users.jsx';
import Canais from './Pages/Dashboard/Canais.jsx';
import Pubs from './Pages/Dashboard/Pubs.jsx';
import Chat from './Pages/WebChat/Chat.jsx'
import PDF from "./Pages/PdfReader/pdf.jsx";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <div className="overflow-y-hidden">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={user ? <HomePage /> : <Login />} />
        <Route path="/Login" element={user === null ? <Navigate to="/" /> : <Login />}/>
        <Route path="/Registo" element={user === null? <Navigate to="/" /> : <Registo />} />

        {/* Protected Routes */}
        {user && (
          <>
            <Route path="/profile/:id" element={<UserProfilePage selected="info"/>} />
            <Route path="/canal/:id" element={<ChannelPage  />} />
            <Route path="/Chat" element={<Chat />}/>
            <Route path="/pdf" element={<PDF />}/>
            {/* Dashboard com nested Routes */}
            {
              user.admin_privileges === true ?   (<Route path="/DashBoard" element={<DashBoard />}>
              {/* Redirect para o geral sempre que o utilizador meter uma rota dentro do sub domínio dashboard invalida */}
              <Route index element={<Navigate to="/Dashboard/Geral" />} />
              <Route path="Geral" element={<Geral />} />
              <Route path="users" element={<Users />} />
              <Route path="Pubs" element={<Pubs />} />
              <Route path="Canais" element={<Canais />} />
            </Route>) : <Route path="/" element={<Navigate to="/" />}/>
            }
          </>
        )}

        {/* Fallback Redirect for any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
