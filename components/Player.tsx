"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface ButtonPlayerProps {
  track: string;
}

export default function ButtonPlayer({ track }: ButtonPlayerProps) {
  const [playerState, setPlayerState] = useState<"play" | "pause" | "replay">(
    "pause",
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track;
    }
  }, [track]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayerState("play");
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState("pause");
    }
  };

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlayerState("play");
    }
  };

  const handleClick = () => {
    switch (playerState) {
      case "play":
        handlePause();
        break;
      case "pause":
        handlePlay();
        break;
      case "replay":
        handleReplay();
        break;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setPlayerState("replay");
      audio.addEventListener("ended", handleEnded);
      return () => audio.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={handleClick}
        className="bg-gray-600 bg-opacity-30 hover:bg-opacity-40 transition-colors duration-200 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={
          playerState === "play"
            ? "Pause"
            : playerState === "pause"
              ? "Play"
              : "Replay"
        }
      >
        {playerState === "play" && (
          <Pause className="text-black" size={32} fill="black" />
        )}
        {playerState === "pause" && (
          <Play className="text-black" size={32} fill="black" />
        )}
        {playerState === "replay" && (
          <RotateCcw className="text-black" size={32} />
        )}
      </button>
      <audio ref={audioRef} />
    </div>
  );
}
