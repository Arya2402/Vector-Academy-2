"use client";

import React, { useEffect, useState } from "react";

// Define the static image
const heroImage = "/images/hero.jpeg";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState("#328E6E");

  const words = ["Grow", "Excel", "Achieve", "Succeed"];
  const colors = ["#328E6E", "#EB5B00", "#D84040", "#3F51B5"];
  const typingSpeed = 180;
  const pauseTime = 1600;

  useEffect(() => {
    setCurrentColor(colors[wordIndex]);
  }, [wordIndex]);

  useEffect(() => {
    let typingTimeout;

    const typeWriter = () => {
      const word = words[wordIndex];

      if (currentWord.length < word.length) {
        typingTimeout = setTimeout(() => {
          setCurrentWord(word.substring(0, currentWord.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setTimeout(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
            setCurrentWord("");
          }, pauseTime);
        }, pauseTime);
      }
    };

    typeWriter();

    return () => clearTimeout(typingTimeout);
  }, [currentWord, wordIndex]);

  return (
    <section className="bg-white w-full py-10 lg:py-16 mt-12 sm:mt-20 md:mt-24">
      <div className="mx-auto w-[85%] max-w-screen-xl px-4 sm:px-6 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:px-8">
        
        {/* TEXT */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 leading-tight">
            Shape Your Future with Vector Academy and{" "}
            <span
              className="inline-block"
              style={{
                color: currentColor,
                minWidth: `${Math.max(...words.map(word => word.length))}ch`,
              }}
            >
              {currentWord || "     "} {/* placeholder spaces for layout stability */}
            </span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-2">
            At Vector Junior College, our expert faculty and comprehensive study materials
            help you prepare effectively for JEE and NEET, ensuring you achieve your dream of success.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="Vector Academy Hero"
            className="w-auto max-h-[460px] transition-opacity duration-700 ease-in-out object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
