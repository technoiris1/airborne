import Description from "./components/desc";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <div className="h-screen" />
      <Description />
    </div>
  );
}
