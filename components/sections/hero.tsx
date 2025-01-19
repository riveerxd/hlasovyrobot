"use client";

import { Button } from "@/components/ui/button";
import { ReactTyped } from "react-typed";
import { ArrowRight, Phone, Sparkles, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-16 md:pt-20 pb-8">
      {/* Background Elements */}
      

      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Umělá inteligence v praxi</span>
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block mb-2">Váš virtuální</span>
              <span className="text-primary">
                <ReactTyped
                  strings={["operátor", "asistent", "prodejce", "konzultant", "recepční"]}
                  typeSpeed={120}
                  backSpeed={80}
                  loop
                />
              </span>
            </h1>

            <p className="text-xl text-muted-foreground font-bold max-w-[50rem] mx-auto">
              Zvyšte svůj obrat s inteligentními voiceboty. Efektivní komunikace, vyšší zisky, spokojenější zákazníci!
            </p>
          </motion.div>

          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-2xl mx-auto pt-8 grid grid-cols-3 gap-8 border-t"
          >
            {[
              { label: "Spokojených klientů", value: 3500, suffix: "+" },
              { label: "Hovorů měsíčně", value: 50000, suffix: "+" },
              { label: "Úspěšnost", value: 95, suffix: "%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-2xl font-bold flex justify-center items-baseline gap-1">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={stat.value}
                    transitions={() => ({
                      mass: 1,
                      tension: 100,
                      friction: 10
                    })}
                  />
                  <span>{stat.suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 