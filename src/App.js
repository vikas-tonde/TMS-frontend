import React from 'react';
import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from './Components/Layouts/AdminLayout';
import MasterLayout from './Components/Layouts/MasterLayout';
import TraineeLayout from './Components/Layouts/TraineeLayout';
import Analytics from "./Pages/Analytics";
import AssignmentStatus from './Pages/AssignmentStatus';
import Dashboard from "./Pages/Dashboard";
import Homepage from './Pages/HomePage';
import Login from './Pages/LoginPage';
import Logout from "./Pages/Logout";
import Messages from "./Pages/Messages";


import { RequireAuth } from './authService/auth';
import "./index.css";



function App() {
  return (

    <>

    </>
  );
}

export default App;
