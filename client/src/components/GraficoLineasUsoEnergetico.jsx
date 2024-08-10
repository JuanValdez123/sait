// client/src/components/LineChartComponent.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = ({ data = [], title = 'Task Progress' }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: title,
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
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
          color: '#D1D5DB', // Color for the legend text
        },
      },
      title: {
        display: true,
        text: title,
        color: '#D1D5DB', // Color for the title
      },
      tooltip: {
        backgroundColor: '#1F2937', // Dark background for tooltip
        titleColor: '#D1D5DB', // Light title color in tooltip
        bodyColor: '#D1D5DB', // Light body color in tooltip
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#9CA3AF', // Color for the x-axis labels
        },
        grid: {
          color: '#374151', // Color for the x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9CA3AF', // Color for the y-axis labels
        },
        grid: {
          color: '#374151', // Color for the y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6" style={{ height: '100%', width: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChartComponent;
