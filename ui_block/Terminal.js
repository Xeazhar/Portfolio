"use client";

import { useState, useCallback } from "react";
import { Terminal } from "@/components/ui/terminal";

const SCENES = [
  {
    commands: ["whoami", "cat profile.md", "echo $MOTTO", "echo $STATUS", "clear"],
    outputs: {
      0: ["> Xeahzar"],
      1: ["> Full Stack Developer", "> AI Engineer", "> Data Analyst"],
      2: ["> innovate. analyze. improve."],
      3: ["> building the future with AI"],
    },
  },
  {
    commands: ["ls projects", "node focus.js", "echo $STATE", "clear"],
    outputs: {
      0: ["> AI Road Damage Detector", "> Portfolio System", "> Data Tools"],
      1: ["> running deep work mode"],
      2: ["> active"],
    },
  },
];

export function TerminalDemo() {
  const [index, setIndex] = useState(0);

  const handleComplete = useCallback(() => {
    setIndex((prev) => (prev + 1) % SCENES.length);
  }, []);

  return (
    <section className="w-full">
      <Terminal
        key={index}
        className="max-w-full"
        commands={SCENES[index].commands}
        outputs={SCENES[index].outputs}
        typingSpeed={45}
        delayBetweenCommands={1000}
        onComplete={handleComplete}
        enableSound={false}
      />
    </section>
  );
}