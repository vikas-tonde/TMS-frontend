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
<<<<<<< HEAD
import BulkEntryModuleForm from './Pages/BulkEntryModuleForm';
import TraineeExamData from './Components/TraineeExamData';
import TraineeExamTable from './Components/TraineeExamTable';
=======



>>>>>>> 22382742d5c8af1b37ab71d2eccfd3d362907e38
function App() {
  return (

    <>

<<<<<<< HEAD
      <Routes>
        {/**
           * TODO: Make group of all admin routes and user routes below
          */}
        <Route element={<RequireAuth> <MasterLayout /> </RequireAuth>}>
          <Route element={<AdminLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Users />} />
            <Route path="/exams" element={<BulkEntryModuleForm />} />
            <Route path="/graph" element={<Analytics />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/table/:empId" element={<TraineeInfo />} />
            <Route path="/TraineeExamData" element={<TraineeExamData />} />
            <Route path="/traineeExamTable" element={<TraineeExamTable />} />
          </Route>

          <Route element={<RequireAuth> <TraineeLayout /> </RequireAuth>}>
            {/**
           * trainee
            */ }

            <Route path="/trainee" element={<>This is trainee dashboard</>} />
            <Route path="/trainee/profile" element={<Users />} />
            <Route path="/trainee/exams" element={<TraineeExamDetails />} />
            <Route path="/trainee/assignment" element={<AssignmentStatus />} />

            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
=======
>>>>>>> 22382742d5c8af1b37ab71d2eccfd3d362907e38
    </>
  );
}

export default App;
