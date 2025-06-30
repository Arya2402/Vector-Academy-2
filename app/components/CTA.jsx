"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">We Provide</h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a metus vel sapien bibendum convallis in non quam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* JEE */}
        <Link href="/courses/jee">
          <div className="cursor-pointer bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between h-48">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800">JEE</h3>
              <p className="text-sm text-gray-600 mt-2">
                Prepare for the Joint Entrance Exam with our comprehensive materials and expert guidance.
              </p>
              <p
                className="text-sm font-bold flex items-center justify-end gap-1 mt-auto text-right"
                style={{ color: "#1f7fff" }}
              >
                View JEE Course <ArrowRight size={18} />
              </p>
            </div>
            <Image
              src="/images/jee.png"
              alt="JEE Course"
              width={120}
              height={120}
              className="object-contain ml-4"
            />
          </div>
        </Link>

        {/* NEET */}
        <Link href="/courses/neet">
          <div className="cursor-pointer bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between h-48">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800">NEET</h3>
              <p className="text-sm text-gray-600 mt-2">
                Ace the National Eligibility cum Entrance Test with our targeted preparation strategies.
              </p>
              <p
                className="text-sm font-bold flex items-center justify-end gap-1 mt-auto text-right"
                style={{ color: "#1f7fff" }}
              >
                View NEET Course <ArrowRight size={18} />
              </p>
            </div>
            <Image
              src="/images/neet.png"
              alt="NEET Course"
              width={120}
              height={120}
              className="object-contain ml-4"
            />
          </div>
        </Link>

        {/* EAPCET */}
        <Link href="/courses/eapcet">
          <div className="cursor-pointer bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between h-48">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800">EAPCET</h3>
              <p className="text-sm text-gray-600 mt-2">
                Master the Engineering, Agriculture & Pharmacy Common Entrance Test with our tailored courses.
              </p>
              <p
                className="text-sm font-bold flex items-center justify-end gap-1 mt-auto text-right"
                style={{ color: "#1f7fff" }}
              >
                View EAPCET Course <ArrowRight size={18} />
              </p>
            </div>
            <Image
              src="/images/eapcet.png"
              alt="EAPCET Course"
              width={120}
              height={120}
              className="object-contain ml-4"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
