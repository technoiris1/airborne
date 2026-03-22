"use client";

import { Outfit } from "next/font/google";
import { Suspense } from "react";
import PlaneCard from "./plane-card";
import ModelViewer from "./model-viewer";
import machinesData from "@/data/machines.json";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Machines() {
  return (
    <section className="w-full h-screen relative flex flex-col items-center justify-between py-12">
      <div className="absolute inset-0 bg-white/15 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" />
      <div
        className={`${outfit.className} relative z-10 w-full h-full flex flex-col items-center justify-between px-4 sm:px-6 md:px-8`}
      >
        <div className="text-center pt-4 md:pt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
            Things you can make
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-amber-200 mx-auto rounded-full opacity-80" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 max-w-6xl w-full items-center justify-center flex-1">
          {machinesData.map((machine) => (
            <div
              key={machine.id}
              className="w-full md:w-1/3 flex justify-center"
            >
              <PlaneCard
                name={machine.name}
                info={machine.description}
                modelComponent={
                  <Suspense
                    fallback={
                      <div className="text-white/40 text-xs">Loading...</div>
                    }
                  >
                    <ModelViewer
                      modelPath={machine.modelPath}
                      scale={(machine.scale as number) || 1}
                      position={
                        (machine.position as [number, number, number]) || [
                          0, 0, 0,
                        ]
                      }
                      rotation={
                        (machine.rotation as [number, number, number]) || [
                          0, 0, 0,
                        ]
                      }
                    />
                  </Suspense>
                }
              />
            </div>
          ))}
        </div>
        <div className="text-center pb-4 md:pb-8">
          <p className="text-xs sm:text-sm text-white/80 drop-shadow-md max-w-2xl leading-relaxed font-medium">
            If you wanna make something else, post about it in{" "}
            <span className="text-yellow-200">#airborne</span>, I'd{" "}
            <span className="text-amber-100">LOVE</span> to see new things and
            ideas. The core idea is just to make the thing{" "}
            <span className="text-yellow-100">fly</span> :o
          </p>
        </div>
      </div>
    </section>
  );
}
