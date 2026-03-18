"use client";
import { Outfit } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { useState, type CSSProperties } from "react";
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
// back clouds
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
// front coulds
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

  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <Banner />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero.png")' }}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`fixed top-4 right-4 max-md:top-3 max-md:right-3 z-999 w-[4.15rem] h-[4.15rem] max-md:w-14 max-md:h-14 border-[3px] rounded-full text-white grid place-items-center cursor-pointer backdrop-blur-[3px] transition-[transform,background-color,border-color,box-shadow] duration-140 ease-in-out hover:-translate-y-px ${
          cloudsVisible
            ? "border-white/98 bg-[rgba(6,8,12,0.9)] shadow-[0_14px_34px_rgba(0,0,0,0.55)] hover:bg-[rgba(4,6,10,0.95)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.62)]"
            : "border-[rgba(255,130,130,0.98)] bg-[rgba(64,16,16,0.9)] shadow-[0_14px_34px_rgba(0,0,0,0.55)] hover:bg-[rgba(64,16,16,0.95)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.62)]"
        }`}
        onClick={() => setCloudsVisible((current) => !current)}
        aria-pressed={!cloudsVisible}
        aria-label={cloudsVisible ? "Hide clouds" : "Show clouds"}
        suppressHydrationWarning
      >
        <span
          className="text-[2rem] leading-none relative inline-flex"
          suppressHydrationWarning
        >
          <span className="inline-block">☁</span>
          {!cloudsVisible && (
            <span
              className="absolute w-[155%] h-0.75 bg-[#ff7f7f] top-1/2 left-[-14%] -rotate-34"
              aria-hidden="true"
            />
          )}
        </span>
      </button>
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
      <div className="absolute inset-0 z-2 flex flex-col justify-center items-center text-center gap-[0.9rem] p-4">
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
            textShadow: "0 2px 10px rgba(0,0,0,0.55)",
          }}
        >
          Design a machine which flies, get a grant to build it!
        </p>
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
    </section>
  );
}
