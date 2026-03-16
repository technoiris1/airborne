import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Hero() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="/hero.png"
        alt="Hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: 700,
            WebkitTextStroke: "2px black",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0 rgba(0,0,0,0.25)",
            margin: 0,
          }}
          className={`${pressStart2P.className}`}
        >
          AIRBORNE
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.35,
            maxWidth: "42rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.55)",
            margin: 0,
          }}
        >
          Design a flying machine, get a grant to build it
        </p>
      </div>
    </section>
  );
}
