"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeTextEffectProps = {
  words: string[];
  className?: string;
};

export default function FadeTextEffect(props: FadeTextEffectProps) {
  const { words, className } = props;
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <div className="flex items-center justify-center bg-[#F5F7FA] w-fit p-1 rounded-md border-2 border-[#E2E8F0]">
      <div className={cn("text-2xl font-bold", className)}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
