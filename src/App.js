import React, { useEffect } from 'react';
import "./index.css";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from 'react-router-dom';

import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import FileManager from "./Pages/FileManager";
import Analytics from "./Pages/Analytics";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";
import Homepage from './Pages/HomePage';
import Login from './Pages/LoginPage';
import SideBar from "./Components/Sidebar/SideBar";
import TraineeSideBar from "./Components/Sidebar/TranieeSidebar";
import { AuthProvider, RequireAuth, useAuth } from './authService/auth';
import api from './authService/api';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Layout from './Components/Layout';
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
  useEffect(() => {
    handleRefresh();
  }, [])

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
          <Route path="/order" element={<Order /> } />
          <Route path="/saved" element={<Saved /> } />
          <Route path="/settings" element={<Setting /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
