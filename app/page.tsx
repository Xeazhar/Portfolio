import Hero from "../components/Hero";
import { ThemeProvider } from "../context/ThemeContext";
import { FaultyTerminalBG } from "../ui_block/Background";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-zinc-950 text-white overflow-hidden transition-colors duration-300">
        <div className="fixed inset-0 z-0">
          <FaultyTerminalBG />
        </div>

        <div className="relative z-20">
          <Hero />
        </div>
      </main>
    </ThemeProvider>
  );
}
