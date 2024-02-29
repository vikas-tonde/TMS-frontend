import React, { useState } from 'react';
import Login from'./Pages/LoginPage';
import Homepage from'./Pages/HomePage';
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import FileManager from "./Pages/FileManager";
import Analytics from "./Pages/Analytics";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";

import SideBar from "./Components/Sidebar/SideBar";
import TraineeSideBar from "./Components/Sidebar/TranieeSidebar";

function App() {

  return (

       <Router>
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/login" element={<Login />} />
           
        </Routes>

        <SideBar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </SideBar>

     </Router>
 
  );
}

export default App;
