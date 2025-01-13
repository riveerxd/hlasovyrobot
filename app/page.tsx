import { Hero } from "@/components/sections/hero";
import { Samples } from "@/components/sections/samples";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      {/* Shared background */}
      <div className="absolute inset-0 -z-10">
        {/* First gradient */}
        <div className="absolute inset-x-0 top-0 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        {/* Second gradient */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
        {/* Middle gradient */}
        <div className="absolute inset-x-0 top-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+28rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      <Hero />
      <Samples />
      <Features />
      <Process />
    </div>
  );
}
