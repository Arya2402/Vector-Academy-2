'use client';

import React from 'react';

const CTA = () => {
  const messages = [
    {
      id: 1,
      name: 'Chairman',
      message: `"We don’t just teach subjects—we prepare young minds for challenges and excellence."`,
    },
    {
      id: 2,
      name: 'Chairman',
      message: `"Discipline, focus, and the right guidance create miracles. Let us help your child shine."`,
    },
    {
      id: 3,
      name: 'Chairman',
      message: `"Parents, your trust is our responsibility. We nurture brilliance with care and commitment."`,
    },
  ];

  return (
    <section className="bg-[#F3F8FF] px-4 sm:px-6 py-6 sm:py-8 mt-6 mb-8 rounded-lg font-poppins">

      {/* Small & Medium Devices Only */}
      <div className="block lg:hidden">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Chairman's Message
        </h2>

        <div className="overflow-x-auto flex gap-4 pb-4 -mx-2 px-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="min-w-[320px] max-w-[90%] bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  alt="Chairman"
                  src="/images/4.png"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="text-md font-medium text-gray-900">{msg.name}</h3>
              </div>
              <p className="text-base text-gray-800">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Large and Above Devices Only */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center gap-8 mt-8">
        <div className="text-left max-w-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Empower Your Child’s Future with Expert Guidance
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            At our academy, we provide a growth-oriented and result-driven environment specifically designed to help students excel in JEE and NEET.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Our experienced faculty offer personalized coaching, ensuring each student is equipped with tools and confidence to succeed in competitive exams and beyond.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Focused on both academic excellence and holistic development, we help your child build strong problem-solving skills, critical thinking, and discipline—key to success at IITs and medical colleges.
          </p>
        </div>

        <div>
          <img
            src="/images/4.png"
            alt="Campus"
            className="w-full h-80 object-cover rounded-lg transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;

