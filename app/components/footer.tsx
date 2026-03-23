"use client";

import { Outfit } from "next/font/google";
import { useState, useEffect } from "react";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMounted, setIsMounted] = useState(false);

  if (!isMounted) {
    return null;
  }

  return (
    <footer
      className={`${outfit.className} relative w-full bg-cover bg-center overflow-hidden py-8 md:py-12`}
      style={{
        backgroundImage: 'url("/hero.png")',
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        minHeight: "auto",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg mb-2">
              AIRBORNE
            </h3>
            <p className="text-xs md:text-sm text-white/80 text-center md:text-left">
              Design a machine which flies, get a grant to build it!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold text-white drop-shadow-lg mb-3">
              Community
            </h4>
            <ul className="flex flex-col gap-2 text-center">
              <li>
                <a
                  href=""
                  className="text-xs md:text-sm text-white/70 hover:text-yellow-200 transition-colors duration-300"
                >
                  #airborne
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs md:text-sm text-white/70 hover:text-yellow-200 transition-colors duration-300"
                >
                  Hack Club
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold text-white drop-shadow-lg mb-3">
              Resources
            </h4>
            <ul className="flex flex-col gap-2 text-center md:text-right">
              <li>
                <a
                  href=""
                  className="text-xs md:text-sm text-white/70 hover:text-yellow-200 transition-colors duration-300"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xs md:text-sm text-white/70 hover:text-yellow-200 transition-colors duration-300"
                >
                  Submit Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
      </div>
    </footer>
  );
}
