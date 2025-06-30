"use client";

import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1.5;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;

    const scrollText = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollText);
    };

    animationFrameId = requestAnimationFrame(scrollText);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const texts = [
    "Crack Your Dream College with Our Expert Guidance! Join the top-notch coaching platform.",
    "We provide a tailored roadmap for cracking entrance exams and securing your spot at your dream college.",
    "Start your journey with us today and pave the way for your future success!",
    "Join our community of successful students and achieve your academic goals with confidence!",
    "Unlock Your Potential with Our Comprehensive Coaching Programs!",
  ];

  return (
    <section className="relative w-full h-[48px] overflow-hidden bg-[#27548A] select-none pointer-events-none">
      <div
        ref={scrollContainerRef}
        className="flex items-center space-x-12 h-full overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {[...texts, ...texts].map((text, index) => (
          <div
            key={index}
            className="text-white text-sm sm:text-base font-semibold flex-shrink-0"
          >
            <p className="mr-8">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scroll;
