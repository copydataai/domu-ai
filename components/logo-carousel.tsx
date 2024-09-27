"use client";
import { useState, useEffect } from "react";

const logos = [
  {
    id: 1,
    src: "/images/d.png",
    alt: "SBS",
  },
  {
    id: 2,
    src: "/images/BBVA.png",
    alt: "BBVA",
  },
  {
    id: 3,
    src: "/images/Cardiff.png",
    alt: "Cardiff",
  },
  {
    id: 4,
    src: "/images/Santander.png",
    alt: "Santander",
  },
  {
    id: 5,
    src: "/images/Skandia.png",
    alt: "Skandia",
  },
  {
    id: 6,
    src: "/images/Microsoft.png",
    alt: "Microsoft",
  },
];

export default function LogoCarousel() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-8 bg-blue-300">
      <h2 className="text-2xl font-bold text-center mb-6">
        Tons of corporates use Domu to automate their sales and debt collection
        calls.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 pointer-events-none sparkle-container">
              <div className="sparkle top-0 left-0"></div>
              <div className="sparkle top-0 right-0"></div>
              <div className="sparkle bottom-0 left-0"></div>
              <div className="sparkle bottom-0 right-0"></div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-20 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
