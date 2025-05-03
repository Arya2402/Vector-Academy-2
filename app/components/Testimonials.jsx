"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    image: "/images/1p.png",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Vinayak",
    position: "Vector Student",
  },
  {
    image: "/images/2p.png",
    text: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/3p.png",
    text: "korem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/4p.png",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Vinayak Joshi",
    position: "Vector Student",
  },
  {
    image: "/images/5p.png",
    text: "lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ",
    name: "Srikari",
    position: "Vector Student",
  },
  {
    image: "/images/6p.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",
    name: "David Kim",
    position: "Vector Student",
  },
];

export default function TestimonialSlider() {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = testimonialsRef.current;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Members Say
        </h2>
        <div
          ref={testimonialsRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-80 transition-transform duration-500 hover:scale-105"
            >
              <figure className="p-4 text-center bg-white rounded-2xl shadow-lg ring-1 ring-blue-100 drop-shadow-xl hover:drop-shadow-[0_10px_20px_rgba(173,216,230,0.5)]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover mx-auto mb-4 rounded-full border-4 border-blue-200 shadow-md"
                />
                <blockquote className="italic text-gray-700 mb-3 h-24 overflow-hidden">
                  "{testimonial.text}"
                </blockquote>
                <figcaption>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
