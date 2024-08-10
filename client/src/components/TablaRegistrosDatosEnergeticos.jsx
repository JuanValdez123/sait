import React from 'react';
import DataTable from 'react-data-table-component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DataTableComponent = ({ data }) => {
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true, // Wrapping text in the cell
      style: {
        fontWeight: 'bold', // Bold text for emphasis
      },
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
      wrap: true,
      style: {
        fontStyle: 'italic', // Italic text for description
      },
    },
    {
      name: 'Date',
      selector: row => row.date ? new Date(row.date).toLocaleDateString() : '',
      sortable: true,
      center: true, // Center-align text
    },
    {
      name: 'Completed',
      selector: row => row.completed ? 'Yes' : 'No',
      sortable: true,
      center: true, // Center-align text
      style: {
        color: row => row.completed ? 'green' : 'red', // Conditional text color
      },
    },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Title', 'Description', 'Date', 'Completed']],
      body: data.map(task => [
        task.title,
        task.description,
        task.date ? new Date(task.date).toLocaleDateString() : '',
        task.completed ? 'Yes' : 'No',
      ]),
    });
    doc.save('tasks.pdf');
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-semibold">Task List</h2>
        <button onClick={downloadPDF} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
          Download as PDF
        </button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        dense
        highlightOnHover
        noDataComponent="No hay registros para mostrar"
        customStyles={{
          header: {
            style: {
              backgroundColor: '#2d3748', // Darker background for the header
              color: '#fff', // White text color
              fontSize: '16px', // Larger font size for header
            },
          },
          headRow: {
            style: {
              backgroundColor: '#4a5568', // Dark background for header row
              color: '#fff', // White text color
            },
          },
          rows: {
            style: {
              backgroundColor: '#2d3748', // Darker background for rows
              color: '#fff', // White text color
              '&:nth-of-type(odd)': {
                backgroundColor: '#4a5568', // Alternate row color
              },
              '&:hover': {
                backgroundColor: '#5a67d8', // Hover background color
              },
            },
          },
          pagination: {
            style: {
              backgroundColor: '#2d3748', // Dark background for pagination
              color: '#fff', // White text color
            },
          },
        }}
      />
    </div>
  );
};

export default DataTableComponent;
