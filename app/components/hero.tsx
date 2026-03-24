"use client";
import { Outfit } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { useState, type CSSProperties, useEffect } from "react";
import Banner from "./hack-club-banner";

const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

type CloudStyle = CSSProperties & {
  "--i": number;
  "--cloud-image": string;
  "--opacity"?: number;
  "--timing"?: string;
};

const cloudImageUrls = [
  "/clouds/cloud1.png",
  "/clouds/cloud2.png",
  "/clouds/cloud3.png",
  "/clouds/cloud4.png",
  "/clouds/cloud5.png",
];

const backClouds: CloudStyle[] = [
  {
    "--i": 6,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.55,
    "--timing": "linear",
    width: "170vw",
    bottom: "-2%",
    animationDelay: "-2s",
  },
  {
    "--i": 3.5,
    "--cloud-image": `url("${cloudImageUrls[1]}")`,
    "--opacity": 0.45,
    "--timing": "ease-in",
    width: "130vw",
    bottom: "0%",
    animationDelay: "-18s",
  },
  {
    "--i": 8,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.6,
    "--timing": "linear",
    width: "195vw",
    bottom: "-5%",
    animationDelay: "-5s",
  },
  {
    "--i": 2.5,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.35,
    "--timing": "ease-out",
    width: "115vw",
    bottom: "0%",
    animationDelay: "-28s",
  },
  {
    "--i": 5,
    "--cloud-image": `url("${cloudImageUrls[3]}")`,
    "--opacity": 0.5,
    "--timing": "cubic-bezier(0.4,0,0.6,1)",
    width: "160vw",
    bottom: "-3%",
    animationDelay: "-11s",
  },
  {
    "--i": 7,
    "--cloud-image": `url("${cloudImageUrls[4]}")`,
    "--opacity": 0.4,
    "--timing": "ease-in",
    width: "180vw",
    bottom: "-1%",
    animationDelay: "-22s",
  },
  {
    "--i": 4,
    "--cloud-image": `url("${cloudImageUrls[1]}")`,
    "--opacity": 0.55,
    "--timing": "linear",
    width: "145vw",
    bottom: "-4%",
    animationDelay: "-38s",
  },
  {
    "--i": 1.8,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.3,
    "--timing": "cubic-bezier(0.25,0.1,0.25,1)",
    width: "200vw",
    bottom: "-2%",
    animationDelay: "-7s",
  },
];

const frontClouds: CloudStyle[] = [
  {
    "--i": 3,
    "--cloud-image": `url("${cloudImageUrls[3]}")`,
    "--opacity": 0.2,
    "--timing": "ease-in",
    width: "120vw",
    bottom: "-3%",
    animationDelay: "-15s",
  },
  {
    "--i": 4.5,
    "--cloud-image": `url("${cloudImageUrls[4]}")`,
    "--opacity": 0.16,
    "--timing": "linear",
    width: "105vw",
    bottom: "0%",
    animationDelay: "-33s",
  },
  {
    "--i": 6.5,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.18,
    "--timing": "ease-out",
    width: "140vw",
    bottom: "-4%",
    animationDelay: "-8s",
  },
  {
    "--i": 2.2,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.14,
    "--timing": "linear",
    width: "110vw",
    bottom: "-1%",
    animationDelay: "-45s",
  },
];

export default function Hero() {
  const [cloudsVisible, setCloudsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return !window.matchMedia("(max-width: 768px)").matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.3) {
        setCloudsVisible(false);
      } else {
        setCloudsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero.png")' }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 pointer-events-none overflow-hidden z-1 transition-[opacity,visibility] duration-240 ease-in-out ${
            cloudsVisible ? "" : "opacity-0 invisible"
          }`}
          aria-hidden="true"
          suppressHydrationWarning
        >
          {backClouds.map((cloudStyle, index) => (
            <div
              key={index}
              className={`airborne-cloud absolute bottom-0 bg-no-repeat bg-contain bg-bottom ${
                !cloudsVisible ? "[animation-play-state:paused]" : ""
              }`}
              style={cloudStyle}
            />
          ))}
        </div>
        <div
          className={`absolute inset-0 pointer-events-none overflow-hidden z-3 transition-[opacity,visibility] duration-240 ease-in-out ${
            cloudsVisible ? "" : "opacity-0 invisible"
          }`}
          aria-hidden="true"
          suppressHydrationWarning
        >
          {frontClouds.map((cloudStyle, index) => (
            <div
              key={index}
              className={`airborne-cloud absolute bottom-0 bg-no-repeat bg-contain bg-bottom ${
                !cloudsVisible ? "[animation-play-state:paused]" : ""
              }`}
              style={cloudStyle}
            />
          ))}
        </div>
      </div>

      <section className="w-full h-screen relative flex flex-col overflow-hidden pointer-events-auto">
        <Banner />
        <a
          href={"https://forms.fillout.com/t/9nCHqw7onVus"}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-4 right-4 max-md:top-2 max-md:right-2 z-50 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-all duration-300 ease-out hover:scale-105 pointer-events-auto group"
          aria-label="RSVP to Airborne"
        >
          <img
            src="/heli.gif"
            alt="Airborne Helicopter"
            className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
          />
        </a>
        <div className="absolute inset-0 z-2 flex flex-col justify-center items-center text-center gap-[0.9rem] p-4 pointer-events-none">
          <h1
            className={`${pressStart2P.className} m-0 text-white font-bold max-sm:[--stroke:2px] max-md:[--stroke:3px] [--stroke:4.75px]`}
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              WebkitTextStroke: "var(--stroke) #000",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0 rgba(0,0,0,0.25)",
            }}
          >
            AIRBORNE
          </h1>
          <p
            className={`${outfit.className} m-0 max-w-176 text-white font-bold leading-[1.35] tracking-[0.02em]`}
            style={{
              fontSize: "clamp(1.05rem, 2.3vw, 1.65rem)",
              textShadow: "0 5px 10px rgba(0,0,0,0.75)",
            }}
          >
            Design a machine which flies, get a grant to build it!
          </p>
        </div>
      </section>
    </>
  );
}
