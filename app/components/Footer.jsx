"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Vector Academy</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering students to achieve success in JEE, NEET, and EAPCET through expert
            guidance, quality materials, and a result-oriented approach.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Hyderabad, Telangana, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@vectoracademy.in
            </li>
          </ul>
        </div>

        {/* Social & Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h2>
          <div className="flex gap-4 mb-6">
            <a href="#" className="hover:text-yellow-300"><Facebook /></a>
            <a href="#" className="hover:text-yellow-300"><Instagram /></a>
            <a href="#" className="hover:text-yellow-300"><Youtube /></a>
          </div>
          <h2 className="text-sm font-medium mb-2 text-gray-400">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="/courses/jee" className="hover:text-yellow-300">JEE</a></li>
            <li><a href="/courses/neet" className="hover:text-yellow-300">NEET</a></li>
            <li><a href="/courses/eapcet" className="hover:text-yellow-300">EAPCET</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Vector Academy. All rights reserved.
      </div>
    </footer>
  );
}
