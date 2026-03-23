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
    <section className="w-full min-h-screen relative flex flex-col items-center justify-between py-8 sm:py-10 md:py-12">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div
        className={`${outfit.className} relative z-10 w-full flex flex-col items-center justify-between px-3 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-10`}
      >
        <div className="text-center pt-2 sm:pt-4 md:pt-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
            Things you can make
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-amber-200 mx-auto rounded-full opacity-80" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 max-w-6xl w-full items-center justify-center flex-1">
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
        <div className="text-center pb-2 sm:pb-4 md:pb-8">
          <p className="text-xs sm:text-sm md:text-base text-white/80 drop-shadow-md max-w-2xl leading-relaxed font-medium">
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
