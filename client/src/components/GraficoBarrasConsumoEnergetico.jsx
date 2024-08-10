// client/src/components/GraficoBarrasConsumoEnergetico.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoBarrasConsumoEnergetico = ({ data = [], title = 'Consumo Energético' }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: title,
        data: data.map(item => item.completed),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
          color: '#D1D5DB', // Texto en gris claro para mejor legibilidad
          font: {
            family: 'Nunito, Arial, sans-serif',
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: '#D1D5DB', // Texto en gris claro para mejor legibilidad
        font: {
          family: 'Nunito, Arial, sans-serif',
          size: 18,
        },
      },
      tooltip: {
        backgroundColor: '#1F2937', // Fondo oscuro para el tooltip
        titleColor: '#D1D5DB', // Color del título en tooltip
        bodyColor: '#D1D5DB', // Color del cuerpo en tooltip
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#D1D5DB', // Ticks en gris claro para mejor legibilidad
        },
      },
      x: {
        ticks: {
          color: '#D1D5DB', // Ticks en gris claro para mejor legibilidad
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
    <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-6">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default GraficoBarrasConsumoEnergetico;
