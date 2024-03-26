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
<<<<<<< HEAD
import TraineeExamDetails from "./Pages/TraineeExamDetails";
=======
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";
>>>>>>> db4f17dcfba5c57cfaf712984c279ad4f09c485c
import Users from "./Pages/Users";
import { RequireAuth } from './authService/auth';
import "./index.css";
function App() {
<<<<<<< HEAD
=======
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
  // useEffect(() => {
  //   handleRefresh();
  // })

>>>>>>> db4f17dcfba5c57cfaf712984c279ad4f09c485c
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
<<<<<<< HEAD
        <Route element={<RequireAuth> <MasterLayout /> </RequireAuth>}>
          <Route element={<AdminLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Users />} />
            <Route path="/exams" element={<Messages />} />
            <Route path="/graph" element={<Analytics />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          <Route element={<RequireAuth> <TraineeLayout /> </RequireAuth>}>
            {/**
           * trainee
            */ }

            <Route path="/trainee" element={<>This is trainee dashboard</>} />
            <Route path="/trainee/profile" element={<Users />} />
            <Route path="/trainee/exams" element={<TraineeExamDetails />} />
            <Route path="/trainee/assignments" element={<AssignmentStatus />} />

            <Route path="/logout" element={<Logout />} />
          </Route>
=======
        <Route element={<RequireAuth> <Layout/> </RequireAuth>}>
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/users" element={ <Users /> } />
          <Route path="/messages" element={<Messages /> } />
          <Route path="/analytics" element={ <Analytics /> } />
          <Route path="/file-manager" element={<FileManager /> } />
          <Route path="/order" element={<Order /> } />
          <Route path="/saved" element={<Saved /> } />
          <Route path="/settings" element={<Setting /> } />
>>>>>>> db4f17dcfba5c57cfaf712984c279ad4f09c485c
        </Route>
      </Routes>
    </>
  );
}

export default App;
