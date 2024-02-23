import React from 'react';
import TraineeMarksChart from './TraineeMarksChart';
const AdminDashboard = ({  }) => {
 
  const traineeData = [
    { name: 'Trainee 1', marks: 80 },
    { name: 'Trainee 2', marks: 75 },
    { name: 'Trainee 3', marks: 90 },
  ];

  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      <TraineeMarksChart traineeData={traineeData} />
    </div>
  );
};

export default AdminDashboard;
