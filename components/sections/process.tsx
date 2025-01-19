"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageSquare, Sparkles, Server, PhoneOutgoing, CheckSquare } from "lucide-react";

const steps = [
  {
    title: "Úvodní setkání",
    subtitle: "Bereme to osobně!",
    description: "Seznámíme se s vašimi potřebami, představíme funkce voicebota, připravíme cenovou nabídku a naplánujeme další kroky spolupráce.",
    icon: CalendarDays,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Návrh scénáře",
    subtitle: "Jak to celé bude fungovat?",
    description: "Definujeme funkce, připravíme volací scénáře v systému a navrhneme integraci s API či jinými datovými zdroji.",
    icon: MessageSquare,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Integrace robota",
    subtitle: "Napojení na vaše systémy",
    description: "Propojíme voicebota s vaší ústřednou a implementujeme připojení k firemním systémům, jako jsou CRM, e-shop a další.",
    icon: Server,
    gradient: "from-pink-500/20 to-red-500/20"
  },
  {
    title: "Testování a schválení",
    subtitle: "Dvakrát měř, jednou řež!",
    description: "Provedeme testování všech funkcí, definujeme ideální průběh hovoru a doladíme finální nastavení služby. Nakonec schválí projekt zadavatel.",
    icon: CheckSquare,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Uvedení do provozu",
    subtitle: "Voicebot je připraven začít!",
    description: "Voicebot je plně funkční a dostupný na požadované lince nebo může telefonovat na vybrané kontakty podle vytvořené kampaně.",
    icon: PhoneOutgoing,
    gradient: "from-orange-500/20 to-yellow-500/20"
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
            <span className="text-sm font-medium">Jak na to</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kroky ke spolupráci</h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="container max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 -translate-x-1/2" />

          {/* Steps */}
          <div className="relative -space-y-8">
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