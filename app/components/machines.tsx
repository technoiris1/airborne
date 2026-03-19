import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Machines() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" />
      <div
        className={`${outfit.className} text-2xl relative z-10 max-w-6xl mx-auto px-8 text-black`}
      >
        HEYYY
      </div>
    </section>
  );
}
