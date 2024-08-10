import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = ({ data, title }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1'],
        hoverBackgroundColor: ['#2563eb', '#059669', '#d97706', '#dc2626', '#4f46e5'],
        borderWidth: 1,
        borderColor: '#ffffff', // White border to make the segments pop
        cutout: '50%' // Adjust this value to make the donut thicker or thinner
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
          color: '#4A4A4A', // Dark gray for better readability
          font: {
            family: 'Nunito, Arial, sans-serif',
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: '#4A4A4A',
        font: {
          family: 'Nunito, Arial, sans-serif',
          size: 18,
        },
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
    <div className="w-full h-full">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChartComponent;
