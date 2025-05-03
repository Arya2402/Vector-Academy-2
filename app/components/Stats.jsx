"use client"; // Ensure it's a client-side component

import { useState, useEffect } from "react";

const Stats = () => {
  const [students, setStudents] = useState(0);
  const [ranks, setRanks] = useState(0);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const incrementValue = (target, setState) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / 100); // Increment fast but controlled
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
    <div className="py-16" style={{ backgroundColor: "#FFFFFF" }}> {/* Increased top and bottom padding, white background */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center"> {/* Increased gap */}
          {/* Students Stat */}
          <div className="stat shadow-2xl rounded-lg bg-white p-6 text-center transition-all duration-300 mx-4"> {/* Added horizontal margin */}
            <div className="stat-figure text-blue-400">
              {/* Students Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path d="M15 13a3 3 0 1 0-6 0" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </div>
            <div className="stat-title text-lg text-black">Enrolled Students</div>
            <div className="stat-value text-4xl font-semibold text-black">{students}+</div>
            <div className="stat-desc text-sm text-gray-500">Total students enrolled in the academy</div>
          </div>

          {/* Top Ranks Stat */}
          <div className="stat shadow-2xl rounded-lg bg-white p-6 text-center transition-all duration-300 mx-4"> {/* Added horizontal margin */}
            <div className="stat-figure text-yellow-400">
              {/* Medal Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                <path d="M11 12 5.12 2.2" />
                <path d="m13 12 5.88-9.8" />
                <path d="M8 7h8" />
                <circle cx="12" cy="17" r="5" />
                <path d="M12 18v-2h-.5" />
              </svg>
            </div>
            <div className="stat-title text-lg text-black">Top Ranks Achieved</div>
            <div className="stat-value text-4xl font-semibold text-black">{ranks}+</div>
            <div className="stat-desc text-sm text-gray-500">Top ranks in JEE/NEET exams</div>
          </div>

          {/* Expert Sessions Stat */}
          <div className="stat shadow-2xl rounded-lg bg-white p-6 text-center transition-all duration-300 mx-4"> {/* Added horizontal margin */}
            <div className="stat-figure text-indigo-400">
              {/* Hourglass Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
            <div className="stat-title text-lg text-black">Expert Sessions Conducted</div>
            <div className="stat-value text-4xl font-semibold text-black">{sessions}+</div>
            <div className="stat-desc text-sm text-gray-500">Interactive sessions with industry experts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

