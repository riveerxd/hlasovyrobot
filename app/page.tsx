import { Hero } from "@/components/sections/hero";
import { Samples } from "@/components/sections/samples";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <Hero />
      <Samples />
      <Features />
      <UseCases />
      <Process />
    </div>
  );
}
