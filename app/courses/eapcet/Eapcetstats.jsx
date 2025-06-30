"use client";

export default function Eapcetstats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">
          Outstanding Results of our students
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Box 1 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">430</div>
          <p className="text-sm font-medium text-gray-700">
            Qualified in EAPCET (Engineering)
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">58</div>
          <p className="text-sm font-medium text-gray-700">
            Below 10,000 Rank
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">18</div>
          <p className="text-sm font-medium text-gray-700">
            Below 1,000 Rank in Engineering
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow">
          <div className="text-4xl font-bold text-indigo-700 mb-2">12</div>
          <p className="text-sm font-medium text-gray-700">
            Top ranks in Agriculture & Pharmacy
          </p>
        </div>
      </div>
    </section>
  );
}
