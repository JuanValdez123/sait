// client/src/components/PieChartComponent.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ data = [], title = 'Task Distribution' }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: title,
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#D1D5DB', // Light gray for better readability on dark background
          font: {
            family: 'Nunito, Arial, sans-serif',
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: '#D1D5DB', // Light gray for better readability on dark background
        font: {
          family: 'Nunito, Arial, sans-serif',
          size: 18,
        },
      },
      tooltip: {
        backgroundColor: '#1F2937', // Dark background for tooltip
        titleColor: '#D1D5DB', // Light title color in tooltip
        bodyColor: '#D1D5DB', // Light body color in tooltip
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-6">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChartComponent;
