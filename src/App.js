import React from 'react';
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
import { AuthProvider, RequireAuth } from './authService/auth';

function App() {
  return (

    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <SideBar>
          <Routes>
            {/**
           * TODO: Make group of all admin routes and user routes below
           * <StatissticsTabsMenu />
           * <HistoricDataMenu />
           * <Form />
          */}

            <Route path="/dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>} />
            <Route path="/users" element={<RequireAuth> <Users /> </RequireAuth>} />
            <Route path="/messages" element={<RequireAuth><Messages /> </RequireAuth>} />
            <Route path="/analytics" element={<RequireAuth><Analytics /> </RequireAuth>} />
            <Route path="/file-manager" element={<RequireAuth><FileManager /> </RequireAuth>} />
            <Route path="/order" element={<RequireAuth><Order /> </RequireAuth>} />
            <Route path="/saved" element={<RequireAuth><Saved /> </RequireAuth>} />
            <Route path="/settings" element={<RequireAuth><Setting /> </RequireAuth>} />
          </Routes>
        </SideBar>
      </AuthProvider>
    </>
  );
}

export default App;
