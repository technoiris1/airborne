"use client";
import Description from "./components/desc";
import Hero from "./components/hero";
import Machines from "./components/machines";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        <Description />
        <Machines />
        <FAQ />
      </div>
    </>
  );
}
