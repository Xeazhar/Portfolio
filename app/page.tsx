import Image from "next/image";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FloatingDockUI } from "../ui_block/FloatingDock"
import {FaultyTerminalBG} from "../ui_block/Background"
import {GradualBlurEffect} from "../ui_block/Background"

export default function Home() {
  return (
    


    
    <main className="min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <FaultyTerminalBG />
      </div>
          
          
          <NavBar />
          <Hero />
          <Projects />
          
        
         <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none">
          <GradualBlurEffect />
        </div>

         <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <FloatingDockUI />
        </div>
    </main>
    
  
  );
}
