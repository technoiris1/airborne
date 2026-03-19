import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Description() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" />
      <div
        className={`${outfit.className} text-2xl relative z-10 max-w-6xl mx-auto px-8 text-black`}
      >
        Hi, <br />
        Airplanes are amazing and they are easily among the top 10 ever things
        made by humans for me. I still remember the first time I sat in an
        airplane, the sudden jerk before it started racing on the runway and
        moments later I was in sky, I was flying. wow.
        <br />I can just tell how fun it must be to fly one, well not everyone
        can fly it tho :c it's expensive and pretty limited :(
        <br />
        BUT BUT BUT yk what? we don't realise how easy and cheap it is to build
        something which can fly :O <br />
        For example, you can make an rc plane under 50$! So, let's make a flying
        machine :yayayayay: <br />
        <br />
        <br />
        [Scroll down]
      </div>
    </section>
  );
}
