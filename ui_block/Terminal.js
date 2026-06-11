"use client";
import { Terminal } from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <section className="w-full py-2">
      <Terminal
        commands={[
          "whoami",
          "cat profile.md",
          "echo $MOTTO",
          "echo $STATUS",
        ]}
        outputs={{
          0: ["> Xeahzar"],
          1: [
            "> Full Stack Developer",
            "> AI Engineer",
            "> Data Analyst",
          ],
          2: ["> innovate. analyze. improve."],
          3: ["> building the future with AI"],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000} />
    </section>
  );
}
