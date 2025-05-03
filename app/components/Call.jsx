"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // PhoneCall icon
import { IoLogoWhatsapp } from "react-icons/io"; // WhatsApp icon

const Call = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 bg-indigo-800 text-white text-xs sm:text-sm fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* For inquiries or Admissions text */}
        <div className="flex-1 text-left text-xs sm:text-sm">
          <p className="hidden sm:block">
            For inquiries or admissions, call now and take the first step towards success.
          </p>
          <p className="sm:hidden">
            For inquiries or admissions
          </p>
        </div>

        {/* Buttons for Call and WhatsApp */}
        <div className="flex space-x-4 justify-end sm:space-x-6 lg:space-x-8">
          <a
            href="tel:+1234567890"
            className="bg-green-500 text-white py-1.5 px-3 rounded-full text-xs sm:text-sm flex items-center space-x-2"
          >
            <FaPhoneAlt /> {/* Call icon */}
            <span className="hidden lg:inline">Call</span> {/* Show only on large screens */}
          </a>
          <a
            href="https://wa.me/+1234567890"
            className="bg-green-500 text-white py-1.5 px-3 rounded-full text-xs sm:text-sm flex items-center space-x-2"
          >
            <IoLogoWhatsapp /> {/* WhatsApp icon */}
            <span className="hidden lg:inline">WhatsApp</span> {/* Show only on large screens */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Call;

