import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
          id: 1,
          name: "Student 1",
          physics: 90,
          chemistry: 85,
          math: 95
        },
        {
          id: 2,
          name: "Student 2",
          physics: 80,
          chemistry: 75,
          math: 85
        },
        {
          id: 3,
          name: "Student 3",
          physics: 85,
          chemistry: 90,
          math: 80
        },
        {
          id: 4,
          name: "Student 4",
          physics: 70,
          chemistry: 80,
          math: 75
        },
        {
          id: 5,
          name: "Student 5",
          physics: 95,
          chemistry: 92,
          math: 88
        },
        {
          id: 6,
          name: "Student 6",
          physics: 82,
          chemistry: 85,
          math: 90
        },
        {
          id: 7,
          name: "Student 7",
          physics: 88,
          chemistry: 76,
          math: 82
        },
        {
          id: 8,
          name: "Student 8",
          physics: 92,
          chemistry: 85,
          math: 78
        },
        {
          id: 9,
          name: "Student 9",
          physics: 75,
          chemistry: 80,
          math: 85
        },
        {
          id: 10,
          name: "Student 10",
          physics: 80,
          chemistry: 85,
          math: 90
        },
        {
          id: 11,
          name: "Student 11",
          physics: 85,
          chemistry: 90,
          math: 80
        },
        {
          id: 12,
          name: "Student 12",
          physics: 78,
          chemistry: 80,
          math: 75
        }
      ];

    return (
        <div>
            <LineChart 
            width={1000}
            height ={300}
            data={marksArray} 
            >
              <Line dataKey="physics" ></Line>
              <Line stroke="#8884d8" dataKey="math" ></Line>
              <Line dataKey="physics" ></Line>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;