"use client";

export default function Neetstats() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Outstanding Results of our NEET Students
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Box 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">312</div>
          <p className="text-sm font-medium text-gray-700">
            Qualified in NEET UG
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">25</div>
          <p className="text-sm font-medium text-gray-700">
            Scored above 650 marks
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">18</div>
          <p className="text-sm font-medium text-gray-700">
            Top 500 All India Rank
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">46</div>
          <p className="text-sm font-medium text-gray-700">
            Government Medical Seats Secured
          </p>
        </div>
      </div>
    </section>
  );
}
