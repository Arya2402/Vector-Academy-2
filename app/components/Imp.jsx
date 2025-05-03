"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/images/1.png", "/images/2.png", "/images/3.png"];

const Imp = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
    pauseAutoScroll();
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    pauseAutoScroll();
  };

  const pauseAutoScroll = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-[85%] sm:w-[90%] md:w-[70%] aspect-[3/1.5] mx-auto mt-8 mb-10 relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition duration-700"
      />

      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white z-10"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Imp;
