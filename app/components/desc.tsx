import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Description() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div
        className={`${outfit.className} text-2xl relative z-10 max-w-6xl mx-auto px-8 text-black`}
      >
        <p className="mb-6">Hey there,</p>
        <p className="mb-6">
          Airplanes are genuinely incredible. They're in my top 10 list of the
          best things humans have ever created. I still remember my first
          flight—that sudden push before racing down the runway, then just like
          that... you're in the sky. You're{" "}
          <span className="italic">flying</span>. It hits different.
        </p>
        <p className="mb-6">
          Flying an actual plane sounds insane, right? And sure, it's expensive
          and pretty exclusive. But here's what most people don't
          realize—building something that can fly? That's actually way more
          accessible than you'd think.
        </p>
        <p className="mb-6">
          You can build a functional RC plane for under $50. Let that sink in.
        </p>
        <p className="mb-12">
          So why not build something that flies? Something you designed.
          Something that's uniquely yours. That's what AIRBORNE is all about.
        </p>
        <p className="text-base text-black/60">
          [Scroll down to see what you can build]
        </p>
      </div>
    </section>
  );
}
