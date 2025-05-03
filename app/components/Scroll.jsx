"use client";

import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollText = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollText, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[48px] overflow-hidden bg-indigo-800">
      <div
        ref={scrollContainerRef}
        className="flex items-center space-x-6 h-full overflow-hidden whitespace-nowrap"
      >
        {[
          "Crack Your Dream College with Our Expert Guidance! Join the top-notch coaching platform.",
          "We provide a tailored roadmap for cracking entrance exams and securing your spot at your dream college.",
          "Start your journey with us today and pave the way for your future success!",
        ].map((text, index) => (
          <div
            key={index}
            className="text-white text-md font-bold flex-shrink-0"
          >
            <p className="mr-8">{text}</p>
          </div>
        ))}

        {[
          "Crack Your Dream College with Our Expert Guidance! Join the top-notch coaching platform.",
          "We provide a tailored roadmap for cracking entrance exams and securing your spot at your dream college.",
          "Start your journey with us today and pave the way for your future success!",
        ].map((text, index) => (
          <div
            key={index + 3}
            className="text-white text-md font-bold flex-shrink-0"
          >
            <p className="mr-8">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scroll;




