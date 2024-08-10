import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = ({ value, title }) => {
  return (
    <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-6">
      <h3 className="text-center mb-4 text-white">{title}</h3>
      <div style={{ width: '100%', height: '100%' }}>
        <GaugeChart 
          id="gauge-chart" 
          nrOfLevels={20} 
          percent={value} 
          colors={['#3b82f6', '#06b6d4']}
          arcWidth={0.3}
          textColor="#D1D5DB"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default GaugeChartComponent;
