"use client";

import { Button } from "@/components/ui/button";
import { ReactTyped, Typed } from "react-typed";

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-32 md:pt-48">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight lg:text-6xl">
            <ReactTyped strings={["hlasovyrobot.cz"]} typeSpeed={120} backSpeed={100} loop />
          </h1>
          <p className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground lg:text-3xl">
            Zvyšte svůj obrat s inteligentními Voiceboty.
            <span className="hidden md:inline">
              <br />
            </span>
            {" "}Efektivní komunikace, vyšší zisky.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Tvoříme Voiceboty, kteří pracují 24/7, rozumí volajícím
            <span className="hidden md:inline">
              <br />
            </span>
            {" "}a řeší jejich problémy autonomně a bez čekání.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button size="lg" className="min-w-[200px] h-12 text-base">
              Chci vlastního voicebota
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 