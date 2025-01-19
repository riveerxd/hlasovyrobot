"use client";

import { Button } from "@/components/ui/button";
import { Phone, Volume2, Calendar, Settings, FileEdit, Bot, MessageSquare } from "lucide-react";
import { AudioPlayer } from "@/components/audio-player";
import { motion } from "framer-motion";

const samples = [
  {
    title: "Objednávka termínu",
    description: "Automatické plánování schůzek a prohlídek",
    details: [
      "Kontrola dostupnosti termínů",
      "Potvrzení a připomenutí schůzky",
      "Možnost přeplánování"
    ],
    audioUrl: "/samples/sample1.mp3",
    icon: Calendar,
    color: "from-blue-500/20 to-purple-500/20",
    stats: {
      value: "85%",
      label: "úspěšnost objednávek"
    }
  },
  {
    title: "Technická podpora",
    description: "Řešení běžných technických problémů",
    details: [
      "Diagnostika připojení",
      "Restart zařízení na dálku",
      "Eskalace složitějších případů"
    ],
    audioUrl: "/samples/sample2.mp3",
    icon: Settings,
    color: "from-green-500/20 to-emerald-500/20",
    stats: {
      value: "3min",
      label: "průměrná doba řešení"
    }
  },
  {
    title: "Změna údajů",
    description: "Bezpečná aktualizace klientských dat",
    details: [
      "Ověření identity volajícího",
      "Validace nových údajů",
      "Okamžitá aktualizace v systému"
    ],
    audioUrl: "/samples/sample3.mp3",
    icon: FileEdit,
    color: "from-orange-500/20 to-red-500/20",
    stats: {
      value: "99%",
      label: "přesnost zpracování"
    }
  }
];

export function Samples() {
  const handleCall = () => {
    window.location.href = "tel:+420910129305";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="samples" className="relative w-full py-20 md:py-24 overflow-hidden">
      <div className="container relative max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Volume2 className="w-4 h-4" />
              <span className="text-sm font-medium">Ukázky</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight">
              Hlasový robot v akci
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reálné ukázky našich voicebotů při řešení různých situací
            </motion.p>
          </div>

          {/* Samples Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {samples.map((sample) => (
              <motion.div
                key={sample.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${sample.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                      <sample.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{sample.title}</h3>
                      <p className="text-sm text-muted-foreground">{sample.description}</p>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {sample.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="text-sm text-muted-foreground">
                      {sample.stats.label}
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {sample.stats.value}
                    </div>
                  </div>

                  {/* Audio Player */}
                  <AudioPlayer
                    audioUrl={sample.audioUrl}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16 grid md:grid-cols-2 gap-8"
          >
            {/* Call Section */}
            <div className="relative p-8 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl" />
              <div id="try" className="relative space-y-4">
                <h3 className="text-2xl font-bold">Vyzkoušejte si hlasového robota naživo</h3>
                <p className="text-muted-foreground">
                  Zavolejte na naše demo číslo <span className="font-bold">zdarma</span> a zeptejte se Voicey na možnosti využití voicebota ve vaší profesi!
                </p>
                <Button 
                  size="lg" 
                  className="w-full group"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  +420 910 129 305
                </Button>
                <p>
                Pokud vám okolnosti neumožňují telefonovat, využijte náš chat – získáte všechny potřebné informace, jen místo mého hlasu budete číst text.
                </p>
              </div>
            </div>

            {/* Chat Section */}
            <div className="relative p-8 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-card rounded-2xl" />
              <div className="relative space-y-6 ">
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

                
                  <Button variant="outline" size="lg" className="w-full gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chatovat s Voicey
                  </Button>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}