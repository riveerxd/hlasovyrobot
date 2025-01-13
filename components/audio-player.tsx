"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

export function AudioPlayer({ title, description, audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(audioUrl) : null);

  const togglePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded-md flex items-center justify-center">
          <div className="w-full max-w-[200px] h-2 bg-primary/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-200"
              style={{
                width: isPlaying ? "100%" : "0%",
                transition: "width 10s linear",
              }}
            />
          </div>
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button
          variant="outline"
          className="w-full h-10 gap-2"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4 shrink-0" />
              <span className="truncate">Pozastavit</span>
            </>
          ) : (
            <>
              <Play className="h-4 w-4 shrink-0" />
              <span className="truncate">Přehrát ukázku</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
} 