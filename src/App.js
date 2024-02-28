import React, { useState } from 'react';
import Login from'./Pages/LoginPage';
import Homepage from'./Pages/HomePage';
import SideBar from "./Components/Sidebar/SideBar";
import TraineeSideBar from "./Components/Sidebar/TranieeSidebar";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import FileManager from "./Pages/FileManager";
import Analytics from "./Pages/Analytics";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div>
      {isLoggedIn ? (
       <Router>
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
 
           <Route path="*" element={<> not found</>} />
         </Routes>
       </SideBar>
     </Router>
        
      ) : (
        <Homepage onLogin={handleLogin} />
      )}
    </div>


  );
}

export default App;
