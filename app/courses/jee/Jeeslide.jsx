"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/images/jeeimg1.jpg',
    '/images/jeeimg2.jpg',
    '/images/jeeimg3.jpg',
];

export default function Jeeslide() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center my-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6">Our Results</h2>
            <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    width={700}
                    height={700}  // keep these as is or adjust slightly
                    className="w-full h-[360px] md:h-[400px] lg:h-[440px] object-cover rounded-xl transition-all duration-500"
                />

            </div>
        </div>
    );
}
