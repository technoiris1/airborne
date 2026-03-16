"use client";
import { Outfit } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { useState, type CSSProperties } from "react";

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
  "/clouds/cloud1.png", // ← replace with your image path
  "/clouds/cloud2.png", // ← replace with your image path
  "/clouds/cloud3.png", // ← replace with your image path
  "/clouds/cloud4.png", // ← replace with your image path
  "/clouds/cloud5.png", // ← replace with your image path
];

// Behind the text — denser, more opaque
const backClouds: CloudStyle[] = [
  {
    "--i": 6,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.55,
    "--timing": "linear",
    width: "170vw",
    bottom: "0",
    animationDelay: "-2s",
  },
  {
    "--i": 3.5,
    "--cloud-image": `url("${cloudImageUrls[1]}")`,
    "--opacity": 0.45,
    "--timing": "ease-in",
    width: "130vw",
    bottom: "0",
    animationDelay: "-18s",
  },
  {
    "--i": 8,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.6,
    "--timing": "linear",
    width: "195vw",
    bottom: "0",
    animationDelay: "-5s",
  },
  {
    "--i": 2.5,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.35,
    "--timing": "ease-out",
    width: "115vw",
    bottom: "0",
    animationDelay: "-28s",
  },
  {
    "--i": 5,
    "--cloud-image": `url("${cloudImageUrls[3]}")`,
    "--opacity": 0.5,
    "--timing": "cubic-bezier(0.4,0,0.6,1)",
    width: "160vw",
    bottom: "0",
    animationDelay: "-11s",
  },
  {
    "--i": 7,
    "--cloud-image": `url("${cloudImageUrls[4]}")`,
    "--opacity": 0.4,
    "--timing": "ease-in",
    width: "180vw",
    bottom: "0",
    animationDelay: "-22s",
  },
  {
    "--i": 4,
    "--cloud-image": `url("${cloudImageUrls[1]}")`,
    "--opacity": 0.55,
    "--timing": "linear",
    width: "145vw",
    bottom: "0",
    animationDelay: "-38s",
  },
  {
    "--i": 1.8,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.3,
    "--timing": "cubic-bezier(0.25,0.1,0.25,1)",
    width: "200vw",
    bottom: "0",
    animationDelay: "-7s",
  },
];

// In front of the text — subtler so the heading stays readable
const frontClouds: CloudStyle[] = [
  {
    "--i": 3,
    "--cloud-image": `url("${cloudImageUrls[3]}")`,
    "--opacity": 0.2,
    "--timing": "ease-in",
    width: "120vw",
    bottom: "0",
    animationDelay: "-15s",
  },
  {
    "--i": 4.5,
    "--cloud-image": `url("${cloudImageUrls[4]}")`,
    "--opacity": 0.16,
    "--timing": "linear",
    width: "105vw",
    bottom: "0",
    animationDelay: "-33s",
  },
  {
    "--i": 6.5,
    "--cloud-image": `url("${cloudImageUrls[0]}")`,
    "--opacity": 0.18,
    "--timing": "ease-out",
    width: "140vw",
    bottom: "0",
    animationDelay: "-8s",
  },
  {
    "--i": 2.2,
    "--cloud-image": `url("${cloudImageUrls[2]}")`,
    "--opacity": 0.14,
    "--timing": "linear",
    width: "110vw",
    bottom: "0",
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
    <section className="airborne-hero">
      <div className="airborne-hero-bg" aria-hidden="true" />

      <button
        type="button"
        className={`airborne-cloud-toggle ${cloudsVisible ? "" : "airborne-cloud-toggle-off"}`}
        onClick={() => setCloudsVisible((current) => !current)}
        aria-pressed={!cloudsVisible}
        aria-label={cloudsVisible ? "Hide clouds" : "Show clouds"}
      >
        <span className="airborne-cloud-toggle-icon" aria-hidden="true">
          <span className="airborne-cloud-glyph">☁</span>
        </span>
      </button>

      <div
        className={`airborne-clouds airborne-clouds-back ${cloudsVisible ? "" : "airborne-clouds-hidden"}`}
        aria-hidden="true"
      >
        {backClouds.map((cloudStyle, index) => (
          <div key={index} className="airborne-cloud" style={cloudStyle} />
        ))}
      </div>

      <div className="airborne-overlay">
        <h1 className={`${pressStart2P.className} airborne-title`}>AIRBORNE</h1>
        <p className={`${outfit.className} airborne-tagline`}>
          Design a machine which flies, get a grant to build it!
        </p>
      </div>

      <div
        className={`airborne-clouds airborne-clouds-front ${cloudsVisible ? "" : "airborne-clouds-hidden"}`}
        aria-hidden="true"
      >
        {frontClouds.map((cloudStyle, index) => (
          <div key={index} className="airborne-cloud" style={cloudStyle} />
        ))}
      </div>
    </section>
  );
}
