import React from 'react';
import { Bar } from 'react-chartjs-2';

const TraineeMarksChart = ({ traineeData }) => {
  const traineeNames = traineeData.map((trainee) => trainee.name);
  const traineeMarks = traineeData.map((trainee) => trainee.marks);

  const data = {
    labels: traineeNames,
    datasets: [
      {
        label: 'Marks',
        data: traineeMarks,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Trainee Marks</h2>
      <Bar data={data} options={options} />
      <h3>Statistics</h3>
      <p>Total Trainees: {traineeData.length}</p>
      <p>Average Marks: {calculateAverage(traineeMarks)}</p>
    </div>
  );
};

const calculateAverage = (marks) => {
  const sum = marks.reduce((total, mark) => total + mark, 0);
  return sum / marks.length;
};

export default TraineeMarksChart;
