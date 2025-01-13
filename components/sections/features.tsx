"use client";

import { motion} from "framer-motion";
import { Phone, Clock, Languages, ArrowRightLeft, Database, ShoppingCart, Building2, MessageCircle, Bot, Sparkles } from "lucide-react";

const features = [
  {
    title: "Hromadné volání",
    description: "Uskuteční tisíce hovorů během pár minut. Šetří tím váš čas i peníze. Zvyšuje efektivitu podnikání.",
    details: "Voicebot zavolá zákazníkovi, předá potřebné informace a získá od něj zpětnou vazbu.",
    icon: Phone
  },
  {
    title: "Nepřetržitý provoz",
    description: "Pracuje 24/7. Rozumí problému zákazníka, vyřeší ho, nebo ho přepojí na živého operátora.",
    details: "Voicebot umí přijímat více hovorů najednou a ihned je vyřídit. Takže se nikdy nestane, že budete mít obsazeno.",
    icon: Clock
  },
  {
    title: "Inteligentní přepojování",
    description: "Voicebot v případě potřeby rozpozná dotaz a přepojí volajícího na živého operátora.",
    details: "Na operátora jsou z pravidla směrovány jen velmi složité dotazy, které Voicebot zatím nedokáže vyřešit.",
    icon: ArrowRightLeft
  },
  {
    title: "Vícejazyčnost",
    description: "Český, slovenský, anglický, německý či ukrajinský jazyk není problém.",
    details: "Na začátku telefonátu Voicebot nasměruje volajícího na správnou jazykovou verzi. Vše probíhá automaticky.",
    icon: Languages
  },
  {
    title: "Datová integrace",
    description: "Při hovoru dokáže využít informace o volajícím. Autonomně směřuje hovor dle nastavení v systému.",
    details: "Real-time datová komunikace s Vaším CRM systémem.",
    icon: Database
  }
];

const useCases = [
  {
    text: "Podpora prodeje",
    description: "Automatizace prodejních procesů a podpora zákazníků 24/7",
    icon: ShoppingCart,
    stat: "95%",
    statLabel: "Úspěšnost"
  },
  {
    text: "Virtuální recepce",
    description: "Profesionální první kontakt s vašimi klienty",
    icon: Building2,
    stat: "24/7",
    statLabel: "Dostupnost"
  },
  {
    text: "Pracuje nepřetržitě",
    description: "Nepřetržitá dostupnost pro vaše zákazníky",
    icon: Clock,
    stat: "0s",
    statLabel: "Čekací doba"
  },
  {
    text: "Zpětná vazba",
    description: "Automatický sběr hodnocení a připomínek",
    icon: MessageCircle,
    stat: "500+",
    statLabel: "Hovorů denně"
  },
  {
    text: "Virtuální asistentka",
    description: "Inteligentní řešení rutinních požadavků",
    icon: Bot,
    stat: "80%",
    statLabel: "Automatizace"
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
    <section id="features" className="relative w-full py-24 md:py-32 overflow-hidden">
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
                <span className="text-sm font-medium">Funkce voicebota</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trochu podrobněji</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <p className="text-sm text-muted-foreground">{feature.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Příklady využití Voicebota</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Virtuálního asistenta využijete všude, kde chcete být neustále online a poskytovat profesionální služby
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.text}
                  variants={{
                    hidden: { 
                      opacity: 0,
                      y: 20,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.1
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative w-full max-w-[280px] aspect-square"
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="relative h-full rounded-full border bg-card hover:bg-card/80 transition-colors p-8 flex flex-col items-center justify-center text-center">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <useCase.icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    <div className="space-y-1 mb-3">
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {useCase.text}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>
                    <motion.div 
                      className="mt-auto space-y-0.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-primary">
                        {useCase.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {useCase.statLabel}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 