"use client";

import { ReactNode, useState } from "react";

interface PlaneCardProps {
  name: string;
  info: string;
  modelComponent?: ReactNode;
}

export default function PlaneCard({
  name,
  info,
  modelComponent,
}: PlaneCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isHovered
            ? "bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-200"
            : "bg-white/40 backdrop-blur-md"
        }`}
      />

      {isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "200px",
            height: "200px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 30%, transparent 70%)",
            filter: "blur(40px)",
            mixBlendMode: "screen",
            zIndex: 20,
          }}
        />
      )}
      <div
        className={`absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 ${
          isHovered
            ? "border-2 border-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.6)]"
            : "border border-white/30"
        }`}
      />
      <div className="relative h-full flex flex-col p-6 z-10">
        <div className="flex-1 mb-4 rounded-md bg-black/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
          {modelComponent ? (
            <div className="w-full h-full flex items-center justify-center">
              {modelComponent}
            </div>
          ) : (
            <div className="text-white/60 text-sm text-center px-4 font-semibold">
              3D Model will appear here
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {/* Name */}
          <h3
            className={`text-2xl font-bold transition-all duration-300 drop-shadow-lg ${
              isHovered ? "text-yellow-900" : "text-white"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-sm leading-relaxed transition-all duration-300 drop-shadow-md font-medium ${
              isHovered ? "text-yellow-900/90" : "text-white/95"
            }`}
          >
            {info}
          </p>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-32 h-32 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent)",
        }}
      />
    </div>
  );
}
