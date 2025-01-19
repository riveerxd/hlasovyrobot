"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Languages, ArrowRightLeft, Database, Sparkles, User } from "lucide-react";

const features = [
  {
    title: "Hromadné volání",
    description: "Během pár minut uskuteční tisíce hovorů, čímž šetří váš čas i peníze. Výrazně zvyšuje efektivitu vašeho podnikání.",
    details: "Voicebot zavolá vašim zákazníkům, sdělí klíčové informace a získá od nich zpětnou vazbu.",
    icon: Phone
  },
  {
    title: "Inteligentní přepojování",
    description: "Hlasový robot dokáže rozpoznat dotaz a v případě potřeby přepojit volajícího na živého operátora.",
    details: "Na operátory jsou směrovány pouze náročné případy, které aktuálně nezvládne vyřešit.",
    icon: ArrowRightLeft
  },
  {
    title: "Datová integrace",
    description: "Voicebot inteligentně pracuje s informacemi o volajícím a směřuje hovor podle nastavení vašeho systému.",
    details: "Díky real-time integraci s vaším CRM systémem má vždy aktuální data a dokáže okamžitě reagovat.",
    icon: Database
  },
  {
    title: "Nepřetržitý provoz",
    description: "Voicebot pracuje 24/7. Rozumí problémům zákazníků, okamžitě je řeší, nebo je přesměruje na živého operátora.",
    details: "Zvládne zpracovat více hovorů současně. Už nikdy se nemusíte obávat, že by linka byla obsazena.",
    icon: Clock
  },
  {
    title: "Vícejazyčnost",
    description: "Hlasový robot bez problémů komunikuje česky, slovensky, anglicky, německy nebo ukrajinsky.",
    details: "Hned na začátku hovoru rozpozná jazyk volajícího a automaticky ho nasměruje na správnou jazykovou verzi.",
    icon: Languages
  },
  {
    title: "Personalizace hovorů",
    description: "Voicebot oslovuje zákazníky jménem a přizpůsobuje konverzaci podle jejich historie interakcí nebo preferencí uložených ve vašem CRM systému.",
    "details": "Tím vytváří individuální a efektivní komunikaci, která zlepšuje zákaznický zážitek.",
    "icon": User
  }
  
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="relative w-full py-12 md:py-16 overflow-hidden">
      <div className="container relative max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Main Features */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mx-auto">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Funkce</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hlavní funkce našeho voicebota</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full p-6 rounded-2xl border bg-card/50 backdrop-blur-sm space-y-4 flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-3">{feature.description}</p>
                      <p className="text-muted-foreground">{feature.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 