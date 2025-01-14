"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
}

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
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
    <div className="bg-background/50 rounded-lg p-4 shadow-sm">
      <div className="space-y-3">
        <div className="h-8 w-full bg-muted/50 rounded-md flex items-center justify-center">
          <div className="w-full max-w-[200px] h-1.5 bg-primary/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-200"
              style={{
                width: isPlaying ? "100%" : "0%",
                transition: "width 10s linear",
              }}
            />
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              Pozastavit ukázku
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Přehrát ukázku
            </>
          )}
        </Button>
      </div>
    </div>
  );
} 