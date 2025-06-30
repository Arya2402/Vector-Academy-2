import React from 'react';

export default function Slogan() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Gotu&display=swap"
        rel="stylesheet"
      />
      <section
        className="bg-white max-w-3xl mx-auto my-1 px-1 py-8 text-center"
        
      >
        <h2 className="text-3xl font-bold text-black mb-6">Vector's Slogan</h2>
        <p className="text-xl font-semibold text-[#5a4b00] leading-relaxed whitespace-pre-line mb-6">
          दृष्ट्वा ध्येयं दृढसंकल्पः परिश्रमेण न त्यजेत्।{'\n'}
          सत्येन विद्या समृद्धिः स्फुरति विजयसाधनम्॥
        </p>
        <p className="text-lg text-[#5a4b00] font-medium max-w-4xl mx-auto whitespace-normal">
          <strong className="font-bold text-black">Meaning: </strong>{' '}
          Clear goal, strong will, hard work.
Truth and knowledge bring success.
        </p>
      </section>
    </>
  );
}
