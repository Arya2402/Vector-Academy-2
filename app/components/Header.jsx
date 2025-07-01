"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VectorAcademyHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setCoursesOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <style>{`
        @keyframes dropdownFadeSlide {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .dropdown-animate {
          animation: dropdownFadeSlide 0.3s ease forwards;
        }
      `}</style>

      <header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-6xl bg-white border border-gray-200 rounded-3xl px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/LOGO.png"
            alt="Vector Academy"
            className="h-14 w-auto object-contain"
          />
          <span className="sr-only">Home</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-gray-700 font-medium items-center">
          <a
            href="/"
            className={`pb-1 transition ${
              isActive("/") ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-500"
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`pb-1 transition ${
              isActive("/about") ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-500"
            }`}
          >
            About
          </a>

          <div className="relative group inline-block">
            <button
              className={`pb-1 transition ${
                pathname.startsWith("/courses") ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-500"
              }`}
            >
              Courses
            </button>
            <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl p-3 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible dropdown-animate w-36 transition-all duration-200 z-50">
              <a href="/courses/jee" className="block px-2 py-2 text-gray-700 hover:text-blue-500 border-b border-gray-100">JEE</a>
              <a href="/courses/neet" className="block px-2 py-2 text-gray-700 hover:text-blue-500 border-b border-gray-100">NEET</a>
              <a href="/courses/eapcet" className="block px-2 py-2 text-gray-700 hover:text-blue-500">EAPCET</a>
            </div>
          </div>

          <a
            href="/contact"
            className={`pb-1 transition ${
              isActive("/contact") ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-500"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#333" viewBox="0 0 24 24">
            <path d="M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h20v2H2v-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="absolute top-full mt-3 right-6 w-60 bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 lg:hidden shadow-md dropdown-animate">
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>

            <div>
              <button
                onClick={() => setCoursesOpen(!isCoursesOpen)}
                className="w-full text-left text-gray-700 hover:text-blue-500"
              >
                Courses
              </button>
              {isCoursesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  <a href="/courses/jee" className="text-gray-700 hover:text-blue-500">JEE</a>
                  <a href="/courses/neet" className="text-gray-700 hover:text-blue-500">NEET</a>
                  <a href="/courses/eapcet" className="text-gray-700 hover:text-blue-500">EAPCET</a>
                </div>
              )}
            </div>

            <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        )}
      </header>
    </>
  );
}
