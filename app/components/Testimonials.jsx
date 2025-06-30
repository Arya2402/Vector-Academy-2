"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    image: "/images/1p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Vinayak",
    position: "Vector Student",
  },
  {
    image: "/images/2p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/3p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/4p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Vinayak Joshi",
    position: "Vector Student",
  },
  {
    image: "/images/5p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/6p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    name: "David Kim",
    position: "Vector Student",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (!isHovered.current && container) {
        container.scrollLeft += 0.5;

        // Reset scroll if halfway through (for looping effect)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Testimonials</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a metus vel sapien bibendum convallis in non quam.
      </p>

      <div
        className="overflow-hidden"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-4"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-80 bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
                />
                <p className="text-gray-600 text-base italic mb-4 w-full">
                  {item.text}
                </p>
                <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
