import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AreaChartComponent = ({ data, title }) => {
  return (
    <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-6">
      <h3 className="text-center mb-4 text-white">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#9CA3AF', font: { family: 'Nunito', size: 18 } }} 
          />
          <YAxis 
            tick={{ fill: '#9CA3AF', font: { family: 'Nunito', size: 18 } }} 
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
            itemStyle={{ color: '#D1D5DB' }}
            labelStyle={{ color: '#D1D5DB' }}
            cursor={{ fill: 'rgba(55, 65, 81, 0.2)' }}
          />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#D1D5DB' }} />
          <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
