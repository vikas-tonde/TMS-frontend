import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { useHistory } from 'react-router-dom';

import TraineeExamDetails from "./Pages/TraineeExamDetails";
import Users from "./Pages/Users";
import { RequireAuth } from './authService/auth';
import TraineeInfo from './Pages/TraineeInfo'
import "./index.css";

import Batch from './Pages/Batch'
import BatchTable from "./Components/BatchTable";
import SingleEntryUser from "./Pages/SingleEntryUser";
import "./index.css";
import BulkEntryModuleForm from './Pages/BulkEntryModuleForm';
import TraineeTable from './Components/TraineeTable';
import TraineeExamData from './Components/TraineeExamData';
function App() {
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
        <Route element={<RequireAuth> <MasterLayout /> </RequireAuth>}>
          <Route element={<AdminLayout />}>
             {/**
           * Please Don't Change any exising Route.
           * You can Add your Route for testing purpose.
            */ }
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Users />} />
            <Route path="/exams" element={<Messages />} />
            <Route path="/exams/single" element={<TraineeExamData />} />

            <Route path="/trainees/singleentry" element={<SingleEntryUser />} />
            <Route path="/trainees/bulkentry" element={<BulkEntryModuleForm />} />
            <Route path="/trainees/alltrainees" element={<TraineeTable />} />

         
            <Route path="/batch" element={<BatchTable />} />
            <Route path="/batch/:batchName" element={<Batch />} />
            <Route path="/graph" element={<Analytics />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/dashboard/:traineeInfo" element={<TraineeInfo />} />
            <Route path="/table/:empId" element={<TraineeInfo />} />
            
          </Route>

          <Route element={<RequireAuth> <TraineeLayout /> </RequireAuth>}>
            {/**
           * trainee
            */ }

            <Route path="/trainee" element={<>This is trainee dashboard</>} />
            <Route path="/trainee/profile" element={<Users />} />
            <Route path="/trainee/exams" element={<TraineeTable />} />
            <Route path="/trainee/assignments" element={<AssignmentStatus />} />

            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
