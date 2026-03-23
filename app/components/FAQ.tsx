"use client";

import { Outfit } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import faqData from "@/data/faq.json";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [heights, setHeights] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const measureHeights = () => {
      const newHeights: Record<string, number> = {};
      faqData.forEach((item) => {
        const element = contentRefs.current[item.id];
        if (element) {
          newHeights[item.id] = element.scrollHeight;
        }
      });
      setHeights(newHeights);
    };

    measureHeights();

    const handleResize = () => {
      measureHeights();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="w-full relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div
          className={`${outfit.className} relative z-10 w-full flex flex-col items-center justify-center max-w-6xl`}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-amber-200 mx-auto rounded-full opacity-80" />
          </div>
          <div className="w-full max-w-4xl">
            {faqData.map((item: FAQItem) => (
              <div key={item.id} className="mb-2 sm:mb-3 md:mb-4">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-lg transition-all duration-300 ease-out group"
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300 break-words">
                      {item.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-yellow-300/20 transition-all duration-300 ${
                        openId === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white group-hover:text-yellow-200 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight:
                      openId === item.id ? `${heights[item.id] || 0}px` : "0px",
                  }}
                >
                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[item.id] = el;
                    }}
                    className="px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white/2 border border-t-0 border-white/15 rounded-b-lg backdrop-blur-sm"
                  >
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className={`${outfit.className} relative w-full bg-cover bg-center overflow-hidden py-16 md:py-24 lg:py-32`}
        style={{
          backgroundImage: 'url("/hero.png")',
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          minHeight: "auto",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-3">
                AIRBORNE
              </h3>
              <p className="text-sm md:text-base text-white/80 text-center md:text-left">
                Design a machine which flies, get a grant to build it!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-base md:text-lg font-semibold text-white drop-shadow-lg mb-4">
                Community
              </h4>
              <ul className="flex flex-col gap-3 text-center">
                <li>
                  <a
                    target="_blank"
                    href="https://hackclub.enterprise.slack.com/archives/C0AM7KUMPLL"
                    className="text-sm md:text-base text-white/70 hover:text-yellow-200 transition-colors duration-300"
                  >
                    #airborne
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://hackclub.com/"
                    className="text-sm md:text-base text-white/70 hover:text-yellow-200 transition-colors duration-300"
                  >
                    Hack Club
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-base md:text-lg font-semibold text-white drop-shadow-lg mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-3 text-center md:text-right">
                <li>
                  <a
                    href=""
                    className="text-sm md:text-base text-white/70 hover:text-yellow-200 transition-colors duration-300"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-sm md:text-base text-white/70 hover:text-yellow-200 transition-colors duration-300"
                  >
                    Submit Project
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8 md:mb-12" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6"></div>
        </div>
      </footer>
    </>
  );
}
