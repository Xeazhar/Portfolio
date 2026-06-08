import Image from "next/image";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FloatingDockUI } from "../ui_block/FloatingDock"

export default function Home() {
  return (
    
    <div className="min-h-screen text-white overflow-hidden">
    
     <NavBar />
      <Hero />
          {/* <Projects />
          <Skills />
          <Contact />
          <Footer /> */}
        
      <FloatingDockUI/>
    
    </div>
  
  );
}
