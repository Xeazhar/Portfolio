import Image from "next/image";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <NavBar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

           
          <Hero />
          {/* <Projects />
          <Skills />
          <Contact />
          <Footer /> */}
        
      
        </div>
      </main>
    </div>
  );
}
