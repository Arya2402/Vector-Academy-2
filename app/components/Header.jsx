"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-white shadow-md fixed top-10 left-0 right-0 z-40">
      {/* Top Navigation for Large Devices */}
      <div className="hidden lg:flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold text-blue-600">Vector Academy</div>
        <nav className="space-x-4 flex items-center">
          <Link href="/about" className="text-gray-700 hover:text-blue-700">
            About
          </Link>

          {/* Dropdown for Courses */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              Courses
            </button>

            {dropdownOpen && (
              <div className="absolute top-10 w-56 rounded-md border bg-white shadow-lg z-50">
                <Link
                  href="/courses/jee"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  JEE
                </Link>
                <Link
                  href="/courses/neet"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  NEET
                </Link>
                <Link
                  href="/courses/eapcet"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  EAPCET
                </Link>
              </div>
            )}
          </div>

          <Link href="/admissions" className="text-gray-700 hover:text-blue-700">
            Admissions
          </Link>
          <Link href="/hostel" className="text-gray-700 hover:text-blue-700">
            Hostel
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <div className="text-xl font-bold text-blue-600">Vector Academy</div>
        <button onClick={toggleMenu} className="text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation for Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white px-4 pb-4`}>
        <nav className="space-y-2">
          <Link href="/about" className="block py-2 border-b border-gray-200">
            About
          </Link>

          {/* Dropdown Courses */}
          <div>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left py-2 text-gray-700 font-medium"
            >
              Courses
            </button>
            {dropdownOpen && (
              <div className="ml-4 space-y-2">
                <Link href="/courses/jee" className="block py-1 text-sm text-gray-600">
                  JEE
                </Link>
                <Link href="/courses/neet" className="block py-1 text-sm text-gray-600">
                  NEET
                </Link>
                <Link href="/courses/eapcet" className="block py-1 text-sm text-gray-600">
                  EAPCET
                </Link>
              </div>
            )}
          </div>

          <Link href="/admissions" className="block py-2 border-b border-gray-200">
            Admissions
          </Link>
          <Link href="/hostel" className="block py-2 border-b border-gray-200">
            Hostel
          </Link>
          <Link href="/contact" className="block py-2 border-b border-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
