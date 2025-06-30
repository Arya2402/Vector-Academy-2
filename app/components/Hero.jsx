"use client";

import React, { useEffect, useState } from "react";
import { PhoneCall, Phone, MessageCircle } from "lucide-react";

const typeWords = [
  { text: "Succeed", color: "#fde047" },
  { text: "Grow", color: "#fde047" },
  { text: "Achieve", color: "#fde047" },
  { text: "Excel", color: "#fde047" },
];

const Carousel = () => {
  const images = ["/images/1.png", "/images/2.png", "/images/3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-[5px] mx-auto transition-all duration-700"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#4E71FF]" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentWord = typeWords[currentWordIndex].text;

    if (typing) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100);
      } else {
        setTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % typeWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing]);

  return (
    <section className="relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/1.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E3E62] opacity-80 mix-blend-multiply"></div>
      </div>

      <div className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-extrabold text-[2rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] text-white">
              <div>Shape Your Future with</div>
              <div className="text-yellow-300 mt-1">Vector Academy</div>
              <div className="text-white">
                and{" "}
                <span
                  style={{
                    color: typeWords[currentWordIndex].color,
                    minHeight: "1.5em",
                  }}
                  className="inline-block font-extrabold"
                >
                  {displayedText}
                  <span className="border-r-2 border-white animate-pulse ml-1"></span>
                </span>
              </div>
            </h1>

            <p className="text-white font-medium text-base md:text-lg mt-4 text-justify max-w-xl mx-auto lg:mx-0">
              At <strong>Vector Academy</strong>, our expert faculty and
              comprehensive study materials help you prepare effectively for{" "}
              <strong>JEE</strong> and <strong>NEET</strong>, ensuring you
              achieve your dream of success.
            </p>

            <div className="mt-5">
              <a href="tel:+919876543210">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-500 transition mx-auto lg:mx-0">
                  <PhoneCall size={20} />
                  Enquire Now
                </button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full mt-1 lg:mt-0">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <Phone size={20} />
          Call Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
