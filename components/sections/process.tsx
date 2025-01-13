"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageSquare, Plug, TestTube2, PlayCircle, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Úvodní setkání",
    subtitle: "Bereme to osobně",
    description: "Seznámení se s potřebami klienta, představení funkcí robota, příprava cenové nabídky a naplánování následné spolupráce.",
    icon: CalendarDays,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Návrh scénáře",
    subtitle: "Jak to bude celé fungovat ?",
    description: "Definice funkcí voicebota, příprava volacích scénářů v systému, návrh napojení na API, či jiné datové zdroje.",
    icon: MessageSquare,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Integrace robota",
    subtitle: "Napojení na systémy",
    description: "Propojení s ústřednou, implementace připojení na firemní systémy (CRM, e-shop, ... ).",
    icon: Plug,
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    title: "Testování a schválení",
    subtitle: "Dvakrát měř, jednou řež",
    description: "Testování jednotlivých funkcí robota, definice ideální cesty robota hovorem, finální nastavení služby a schválení projektu zadavatelem.",
    icon: TestTube2,
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Uvedení do provozu",
    subtitle: "Voicebot může začít!",
    description: "Voicebot je uveden do provozu - dostupný na požadované lince nebo telefonuje na zvolené kontakty dle vytvořené kampaně.",
    icon: PlayCircle,
    gradient: "from-yellow-500/20 to-green-500/20"
  }
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-24 md:py-32">
      {/* Header */}
      <div className="container max-w-5xl mx-auto px-4 mb-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Jak to probíhá</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Postup spolupráce</h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="container max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 -translate-x-1/2" />

          {/* Steps */}
          <div className="relative space-y-">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative p-6 md:p-8 rounded-2xl border bg-card/50 backdrop-blur-sm group hover:bg-card/80 transition-colors ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                    
                    {/* Content */}
                    <div className="relative space-y-3">
                      <div className="flex items-center gap-4">
                        {/* Icon - Left side */}
                        {index % 2 === 0 && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="hidden md:flex"
                          >
                            <div className="w-16 h-16 rounded-full border-4 border-background bg-gradient-to-br from-primary/10 to-primary/20 shadow-lg flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-primary" />
                            </div>
                          </motion.div>
                        )}
                        <div className="flex-1">
                          <span className="inline-block text-sm font-medium text-muted-foreground">Krok {index + 1}</span>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{step.title}</h3>
                        </div>
                        {/* Icon - Right side */}
                        {index % 2 === 1 && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="hidden md:flex"
                          >
                            <div className="w-16 h-16 rounded-full border-4 border-background bg-gradient-to-br from-primary/10 to-primary/20 shadow-lg flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-primary" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <p className="font-medium text-primary">{step.subtitle}</p>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>

                  {/* Mobile Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 md:hidden"
                  >
                    <div className="w-16 h-16 rounded-full border-4 border-background bg-gradient-to-br from-primary/10 to-primary/20 shadow-lg flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;