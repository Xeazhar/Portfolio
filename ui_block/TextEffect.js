"use client";

import { cn } from "@/lib/utils";

import { CanvasText } from "@/components/ui/canvas-text";

import React from "react";

import { FlipWords } from "../components/ui/flip-words";

import { MorphingText } from "@/components/ui/liquid-text";

import { CommitsGrid } from "@/components/ui/commits-grid";

import { accentColors, useTheme } from "../context/ThemeContext";



function ThemedCanvasText({ text, className, textClassName }) {

  const { themes, themeId } = useTheme();

  const theme = themes[themeId];



  return (

    <span className={cn("relative inline-block text-left", className)}>

      <CanvasText

        key={`${themeId}-${text}`}

        text={text}

        backgroundClassName="bg-[var(--accent-dark)]"

        colors={accentColors(theme.accentRgb)}

        lineGap={3}

        animationDuration={20}

        className={textClassName}

      />

    </span>

  );

}



export function CanvasSectionTitle({ lines, className = "" }) {

  return (

    <h2

      className={cn(

        "text-2xl sm:text-3xl font-bold leading-none pb-6 cursor-target p-2 relative",

        "after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0",

        "after:bg-[var(--accent-dark)] after:transition-transform after:duration-300 hover:after:scale-x-100",

        className

      )}

    >

      {lines.map((line) => (

        <span key={line} className="block">

          <ThemedCanvasText text={line} textClassName="text-2xl sm:text-3xl" />

        </span>

      ))}

    </h2>

  );

}



export function CanvasTextEffect() {

  const { themes, themeId } = useTheme();

  const theme = themes[themeId];



  return (

    <div className="flex items-center justify-center animate-in slide-in-from-bottom duration-700 delay-100 transition-transform duration-200">

      <h2

        className={cn(

          "relative w-full text-left text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-600 dark:text-neutral-700"

        )}

      >

        <CanvasText

          key={themeId}

          text="Jazper Bustria"

          backgroundClassName="bg-[var(--accent-dark)]"

          colors={accentColors(theme.accentRgb)}

          lineGap={4}

          animationDuration={20}

        />

      </h2>

    </div>

  );

}



export function FlipWordsDemo() {

  const words = ["Data Analyst", "Machine Learning Enthusiast", "Problem Solver", "Tech Explorer", "Lifelong Learner"];



  return (

    <div className="pb-1">

      <div className="text-sm sm:text-base mx-auto text-zinc-600 dark:text-zinc-400 text-left">

        I am a

        <FlipWords words={words} /> <br />

      </div>

    </div>

  );

}



const texts = ["Data Analyst", "Machine Learning Enthusiast", "Problem Solver", "Tech Explorer", "Lifelong Learner"];



export function MorphingTextDemo() {

  return (

    <div className="flex items-center gap-x-1.5 text-sm leading-normal sm:text-base text-[var(--muted-fg)]">

      <span className="shrink-0">I am a</span>

      <MorphingText texts={texts} className="text-[var(--page-fg)]" />

    </div>

  );

}



export function CommitsGridDemo() {

  return <CommitsGrid text="21st" />;

}


