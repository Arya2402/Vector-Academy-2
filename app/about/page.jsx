import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Vector Academy, we are dedicated to empowering students to achieve their academic and career goals. We offer a range of high-quality preparatory programs for JEE, NEET, and other competitive exams. Our mission is to provide a nurturing environment where students can excel and develop the skills necessary for success.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-700">
          We envision becoming the leading academic institution that helps students achieve their dreams through top-notch education, personalized attention, and innovative teaching methods. Our goal is to guide students to success, not just in exams, but in life.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-500">Experienced Faculty</h3>
            <p className="mt-4 text-gray-700">
              Our faculty members are experienced and have a deep understanding of their subjects, ensuring the best possible guidance for students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-500">Innovative Learning</h3>
            <p className="mt-4 text-gray-700">
              We incorporate innovative teaching methods, including technology-driven learning, to keep students engaged and motivated.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-500">Personalized Attention</h3>
            <p className="mt-4 text-gray-700">
              With small class sizes, we offer personalized attention to each student to ensure they get the support they need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Join Us Today</h2>
        <p className="mt-4 text-lg text-gray-700">
          Take the first step toward a successful future. Whether you are preparing for JEE, NEET, or other competitive exams, Vector Academy is here to help you achieve your dreams.
        </p>
      </section>
    </div>
  );
}
