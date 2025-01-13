"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { AudioPlayer } from "@/components/audio-player";

const samples = [
  {
    title: "Objednávka termínu",
    description: "Voicebot pomáhá klientovi s objednáním termínu prohlídky.",
    audioUrl: "/samples/sample1.mp3"
  },
  {
    title: "Technická podpora",
    description: "Voicebot řeší běžný technický problém s internetem.",
    audioUrl: "/samples/sample2.mp3"
  },
  {
    title: "Změna údajů",
    description: "Voicebot asistuje při změně kontaktních údajů.",
    audioUrl: "/samples/sample3.mp3"
  }
];

export function Samples() {
  const handleCall = () => {
    window.location.href = "tel:+420910128552";
  };

  return (
    <section id="samples" className="relative w-full py-24 md:pb-32">
      <div className="container relative max-w-5xl m-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ukázky</h2>
            <p className="text-lg text-muted-foreground">
              Poslechněte si ukázky našich voicebotů v akci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samples.map((sample) => (
              <AudioPlayer
                key={sample.title}
                title={sample.title}
                description={sample.description}
                audioUrl={sample.audioUrl}
              />
            ))}
          </div>

          <div className="pt-8 text-center">
            <div className="inline-flex flex-col items-center space-y-4">
              <p className="text-lg font-medium">
                Vyzkoušejte si voicebota naživo
              </p>
              <Button size="lg" className="gap-2 min-w-[200px]" onClick={handleCall}>
                <Phone className="h-4 w-4" />
                Zavolat na +420 910 128 552
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 