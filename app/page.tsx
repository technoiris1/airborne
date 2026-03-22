"use client";
import { useEffect, useState } from "react";
import Description from "./components/desc";
import Hero from "./components/hero";
import Machines from "./components/machines";

export default function Home() {
  const [descProgress, setDescProgress] = useState(0); // 0→1
  const [machProgress, setMachProgress] = useState(0); // 0→1

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight;
          const descStart = vh * 1;
          const descEnd = vh * 2;
          setDescProgress(
            Math.min(
              1,
              Math.max(0, (scrollY - descStart) / (descEnd - descStart)),
            ),
          );
          const machStart = vh * 3;
          const machEnd = vh * 4;
          setMachProgress(
            Math.min(
              1,
              Math.max(0, (scrollY - machStart) / (machEnd - machStart)),
            ),
          );

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const descTranslate = `${(1 - descProgress) * 100}%`;
  const machTranslate = `${(1 - machProgress) * 100}%`;

  return (
    <div className="relative overflow-x-hidden" style={{ height: "600vh" }}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Hero />
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 20,
          transform: `translateY(${descTranslate})`,
          transition: "transform 0.05s linear",
          willChange: "transform",
        }}
      >
        <Description />
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 30,
          transform: `translateY(${machTranslate})`,
          transition: "transform 0.05s linear",
          willChange: "transform",
        }}
      >
        <Machines />
      </div>
    </div>
  );
}
