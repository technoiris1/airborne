"use client";
import { useEffect, useState } from "react";
import Description from "./components/desc";
import Hero from "./components/hero";
import Machines from "./components/machines";

export default function Home() {
  const [descFixed, setDescFixed] = useState(false);
  const [machFixed, setMachFixed] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const screenHeight = window.innerHeight;

          setDescFixed(scrollY >= screenHeight * 2);
          setMachFixed(scrollY >= screenHeight * 4);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div style={{ height: "100vh", width: "100%" }}>
        <Hero />
      </div>

      <div style={{ height: "150vh", width: "100%" }} />
      <div
        style={{
          position: descFixed ? "fixed" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: descFixed ? 20 : 5,
          transition: "position 0.3s ease-out, z-index 0.3s ease-out",
        }}
      >
        <Description />
      </div>

      <div style={{ height: "150vh", width: "100%" }} />
      <div
        style={{
          position: machFixed ? "fixed" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 30,
          transition: "position 0.3s ease-out",
        }}
      >
        <Machines />
      </div>

      <div style={{ height: "150vh", width: "100%" }} />
    </div>
  );
}
