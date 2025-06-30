'use client';

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2021', uv: 11 },
  { year: '2022', uv: 15 },
  { year: '2023', uv: 19 },
  { year: '2024', uv: 25 },
  { year: '2025', uv: 30 },
];

export default function Graph() {
  const [displayData, setDisplayData] = useState([{ year: '2021', uv: 0 }]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index >= data.length) {
        clearInterval(interval);
        return;
      }
      setDisplayData(data.slice(0, index + 1));
      index++;
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center bg-white px-6 py-12 md:py-20 gap-12 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={displayData} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#f97316" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/2 text-gray-800 text-justify max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Our Growth</h2>
        <p className="leading-relaxed">
          Over the past years, Vector Academy has consistently improved its top ranks, showcasing exceptional growth and dedication. From 11 in 2021 to a remarkable 30 in 2025, the upward trend highlights our commitment to excellence and the success of our students.
        </p>
      </div>
    </section>
  );
}
