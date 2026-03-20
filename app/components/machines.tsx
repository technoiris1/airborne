import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Machines() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" />
      <div className="z-2000">
        <div className="h-120 w-80 border border-white/90 flex justify-center p-4 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <div className="h-40 w-80 border border-white/80"></div>
        </div>
      </div>
    </section>
  );
}
