"use client";

import { useState, useEffect } from "react";
import { Trophy, Medal, Hourglass } from "lucide-react";

const Stats = () => {
  const [students, setStudents] = useState(0);
  const [ranks, setRanks] = useState(0);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const incrementValue = (target, setState) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / 100);
          setState(count);
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    incrementValue(1500, setStudents);
    incrementValue(350, setRanks);
    incrementValue(2500, setSessions);
  }, []);

  return (
    <div className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-6">
          Our Achievements
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-8">
          Empowering success through quality education and expert mentorship.
          Join thousands of students achieving their dreams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Enrolled Students */}
          <div className="bg-[#F4F6FF] rounded-xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-2">
              <Trophy size={32} className="text-indigo-500" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {students}+
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Enrolled Students
            </h3>
            <p className="text-xs text-gray-600">
              Thousands of students learning and growing with us.
            </p>
          </div>

          {/* Top Ranks */}
          <div className="bg-[#F4F6FF] rounded-xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-2">
              <Medal size={32} className="text-yellow-500" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {ranks}+
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Top Ranks
            </h3>
            <p className="text-xs text-gray-600">
              Consistently achieving the top positions in all exams from every stream.
            </p>
          </div>

          {/* Expert Sessions */}
          <div className="bg-[#F4F6FF] rounded-xl p-6 text-center shadow-md">
            <div className="flex justify-center mb-2">
              <Hourglass size={32} className="text-teal-500" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {sessions}+
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Expert Sessions
            </h3>
            <p className="text-xs text-gray-600">
              Learn directly from our industry level leaders and experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
