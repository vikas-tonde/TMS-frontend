import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import "./index.css";

import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Layout from './Components/Layout';
import Analytics from "./Pages/Analytics";
import FileManager from "./Pages/FileManager";
import Homepage from './Pages/HomePage';
import Login from './Pages/LoginPage';
import Messages from "./Pages/Messages";
import Saved from "./Pages/Saved";
import Users from "./Pages/Users";
import api from './authService/api';
import { RequireAuth, useAuth } from './authService/auth';
function App() {
  let navigate = useNavigate();
  let auth = useAuth();
  let handleRefresh = async () => {
    try {
      let response = await api.get("/api/users/");
      let { data } = response.data;
      console.log("Logged in after refresh.");
      auth.setUser(data.user)
    } catch (error) {
      navigate("/login", { replace: true, state: "Please login first.." });
    }
  }
<<<<<<< HEAD
  // useEffect(() => {
  //   handleRefresh();
  // })
=======
>>>>>>> b38c8ba73fd5a524b890e0dc6b0b9b01b7869a56

  return (

    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        {/**
           * TODO: Make group of all admin routes and user routes below
          */}
        <Route element={<RequireAuth> <Layout/> </RequireAuth>}>

          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/users" element={ <Users /> } />
          <Route path="/messages" element={<Messages /> } />
          <Route path="/analytics" element={ <Analytics /> } />
          <Route path="/file-manager" element={<FileManager /> } />
       
          <Route path="/saved" element={<Saved /> } />
        

        </Route>

      </Routes>
    </>
  );
}

export default App;
