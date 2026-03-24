import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Description() {
  return (
    <section className="w-full min-h-screen relative flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-black/25 backdrop-blur-md" />
      <div
        className={`${outfit.className} text-lg sm:text-xl md:text-2xl relative z-10 max-w-4xl w-full py-8 sm:py-10 md:py-12 px-6 sm:px-8 md:px-10 text-white bg-black/50 backdrop-blur-md rounded-lg`}
      >
        <p className="mb-6">Hey there,</p>
        <p className="mb-6">
          Airplanes are genuinely incredible. They're in my top 10 list of the
          best things humans have ever created. I still remember my first
          flight- that sudden jerk before racing down the runway, then just like
          that... you're in the sky. You're{" "}
          <span className="italic">flying</span>. wow.
        </p>
        <p className="mb-6">
          Flying an actual plane sounds insane, right? And sure, it's expensive
          and pretty exclusive. But here's what we don't realize- building
          something that can fly is actually way more accessible than you'd
          think.
        </p>
        <p className="mb-6">
          You can build a functional RC plane for under $50. Let that sink in.
        </p>
        <p className="mb-12">
          So why not build something that flies? Something you designed.
          Something that would be airborne.
        </p>
        <p className="text-sm sm:text-base text-white/70 drop-shadow-sm">
          [Scroll down to see what you can build]
        </p>
      </div>
    </section>
  );
}
