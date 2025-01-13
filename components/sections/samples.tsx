"use client";

import { Button } from "@/components/ui/button";
import { Phone, Volume2, Calendar, Settings, FileEdit } from "lucide-react";
import { AudioPlayer } from "@/components/audio-player";
import { motion } from "framer-motion";

const samples = [
  {
    title: "Objednávka termínu",
    description: "Voicebot pomáhá klientovi s objednáním termínu prohlídky.",
    audioUrl: "/samples/sample1.mp3",
    icon: Calendar,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Technická podpora",
    description: "Voicebot řeší běžný technický problém s internetem.",
    audioUrl: "/samples/sample2.mp3",
    icon: Settings,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Změna údajů",
    description: "Voicebot asistuje při změně kontaktních údajů.",
    audioUrl: "/samples/sample3.mp3",
    icon: FileEdit,
    color: "from-orange-500/20 to-red-500/20"
  }
];

export function Samples() {
  const handleCall = () => {
    window.location.href = "tel:+420910128552";
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
    <section id="samples" className="relative w-full py-24 md:py-32 overflow-hidden">
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
              <span className="text-sm font-medium">Poslechněte si ukázky</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight">
              Voicebot v akci
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
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <sample.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{sample.title}</h3>
                      <p className="text-sm text-muted-foreground">{sample.description}</p>
                    </div>
                  </div>
                  <AudioPlayer
                    title={sample.title}
                    description={sample.description}
                    audioUrl={sample.audioUrl}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16 p-8 rounded-2xl border bg-card/50 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Vyzkoušejte si voicebota naživo</h3>
                <p className="text-muted-foreground">
                  Zavolejte na naše demo číslo a otestujte možnosti voicebota
                </p>
              </div>
              <Button 
                size="lg" 
                className="min-w-[200px] group"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                +420 910 128 552
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}