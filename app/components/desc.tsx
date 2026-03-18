import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Description() {
  return (
    <section className="w-full h-screen relative z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" />
      <div
        className={`${outfit.className} text-2xl relative z-10 max-w-6xl mx-auto px-8 text-black`}
      >
        Hi, <br />
        Airplanes are amazing and they are easily among the top 10 ever things
        made by humans for me. I still remember the first time I sat in an
        airplane, the sudden jerk before it started racing on the runway and
        moments later I was in sky, I was flying. wow.
      </div>
    </section>
  );
}
