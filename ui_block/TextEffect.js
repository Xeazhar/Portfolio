"use client";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";
import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function CanvasTextEffect() {
  return (
    <div className="flex items-center justify-center animate-in slide-in-from-bottom duration-700 delay-100 transition-transform duration-200 hover:scale-110">
      <h2
        className={cn(
          "group relative mx-auto max-w-2xl text-left text-4xl leading-tight font-bold tracking-tight text-balance text-neutral-600 sm:text-5xl md:text-6xl xl:text-7xl dark:text-neutral-700"
        )}>
        
        <CanvasText
          text="Jazper Bustria"
          backgroundClassName="bg-blue-600 dark:bg-blue-700"
          colors={[
            "rgba(0, 153, 255, 1)",
            "rgba(0, 153, 255, 0.9)",
            "rgba(0, 153, 255, 0.8)",
            "rgba(0, 153, 255, 0.7)",
            "rgba(0, 153, 255, 0.6)",
            "rgba(0, 153, 255, 0.5)",
            "rgba(0, 153, 255, 0.4)",
            "rgba(0, 153, 255, 0.3)",
            "rgba(0, 153, 255, 0.2)",
            "rgba(0, 153, 255, 0.1)",
          ]}
          lineGap={4}
          animationDuration={20} />
      </h2>
    </div>
  );
}

export function EncryptedTextIntro() {
  return (
    <div className="mx-auto flex max-w-lg items-center justify-center">
      <p className="text-left">
        I learned how useful tailwind is XD.{" "}
        <EncryptedText text="Honestly this shit is so cool." />
      </p>
    </div>
  );
}

