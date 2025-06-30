"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/images/jeeimg1.jpg',
    '/images/jeeimg2.jpg',
    '/images/jeeimg3.jpg',
];


export default function Eapcethero() {
      const [currentIndex, setCurrentIndex] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(interval);
      }, []);
  return (
    <div className="relative py-25 px-6 md:px-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Indigo overlay */}
        <div className="absolute inset-0 bg-indigo-100 opacity-70 mix-blend-lighten"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">
            Crack EAPCET with Vector
          </h1>
          <p className="text-lg md:text-xl mb-6 text-indigo-900">
            Get expert coaching, structured materials, and personal guidance at Vector Academy.
          </p>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-900 transition inline-block"
          >
            Call us
          </a>
        </div>

        <div className="flex flex-col items-center my-1 px-4">
                    {/* <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6">Our Results</h2> */}
                    <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            width={700}
                            height={700}  // keep these as is or adjust slightly
                            className="w-full h-[360px] md:h-[200px] lg:h-[340px] object-cover rounded-xl transition-all duration-500"
                        />
        
                    </div>
                </div>
      </div>
    </div>
  );
}
