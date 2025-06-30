"use client";

export default function Jeestats() {
  return (
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Outstanding Results of our JEE Students
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Box 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">245</div>
          <p className="text-sm font-medium text-gray-700">
            Qualified in JEE Mains-UG
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">12</div>
          <p className="text-sm font-medium text-gray-700">
            98+ Percentile
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">6</div>
          <p className="text-sm font-medium text-gray-700">
             Got top 10 IITs
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">15+</div>
          <p className="text-sm font-medium text-gray-700">
            Under 10,000 rank in JEE Advance
          </p>
        </div>
      </div>
    </section>
  );
}
