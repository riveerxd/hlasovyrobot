"use client";

import { Button } from "@/components/ui/button";
import { ReactTyped } from "react-typed";
import { ArrowRight, Bot, MessageSquare, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";
import { Link } from "react-scroll";
export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-32 md:pt-40 pb-16">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Umělá inteligence v praxi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Váš virtuální</span>
              <span className="text-primary">
                <ReactTyped
                  strings={["operátor", "asistent", "prodejce", "konzultant", "recepční"]}
                  typeSpeed={120}
                  backSpeed={80}
                  loop
                />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
            Zvyšte svůj obrat s inteligentními voiceboty. Efektivní komunikace, vyšší zisky, spokojenější
            zákazníci!            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="try" smooth={true} duration={500} offset={-100} className="w-full">
              <Button size="lg" className="group">
                Vyzkoušet zdarma
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Link to="samples" smooth={true} duration={500} offset={-100} className="w-full">
                  Ukázky voicebota
                </Link>
              </Button>
            </div>
            {/* react-animated-numbers implementation */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Spokojených klientů", value: 3500, suffix: "+" },
                { label: "Hovorů měsíčně", value: 50000, suffix: "+" },
                { label: "Úspěšnost", value: 95, suffix: "%" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-bold flex flex-row ">
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={stat.value}
                      transitions={() => ({
                        mass: 1,
                        tension: 100,
                        friction: 10
                      })}
                    />
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border bg-card p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Voicey</p>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2 items-start">
                    <MessageSquare className="w-4 h-4 mt-1 text-primary" />
                    <p className="text-sm bg-muted rounded-lg p-3">
                      Dobrý den, jak vám mohu pomoci?
                    </p>
                  </div>
                  <div className="flex gap-2 items-start justify-end">
                    <p className="text-sm bg-primary/10 rounded-lg p-3">
                      Zajímá mě více informací o hlasových robotech...
                    </p>
                  </div>
                </div>

                <Link to="try" smooth={true} duration={500} offset={-100} className="w-full gap-2 flex flex-row items-center bg-black rounded-lg p-3 text-white cursor-pointer">
                  <Phone className="w-4 h-4" />
                  Vyzkoušet hovor s hlasovým robotem
              
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 