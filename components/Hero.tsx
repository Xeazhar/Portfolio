"use client";
import { useState } from "react";
import { CanvasTextEffect } from "../ui_block/TextEffect"
import { TerminalDemo } from "../ui_block/Terminal";
import Projects from "./Projects";
import Experience from "./Experience";


export default function Hero() {  
const [activeTab, setActiveTab] = useState("projects");
  return(
   
        <section id="hero" className="relative h-screen flex items-start justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-6 overflow-hidden">
    
          <div className="max-w-7xl mx-auto relative w-full">
            
            <div className="max-w-7xl mx-auto h-full flex flex-col lg:grid lg:grid-cols-[1fr_2.5fr_1fr] gap-6 items-stretch">
              
                  <div className="gap-3">
                    
                    <div className="relative order-1 flex flex-col gap-6">
                      <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden p-3 sm:p-4 shadow-2xl border border-white/10">
                        <div>
                          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                              <p>Tech Stack</p>
                          </h1>
                        </div>
                        <div>
                          <p>Frontend:</p>
                        </div>
                        <div>
                          <p>Backend:</p>
                        </div>
                        <div>
                          <p>Database:</p>
                        </div>
                        <div>
                          <p>Devops:</p>
                        </div>

                      </div>


                        

                    </div>
                    
                  
                  </div>

              

                  <div className="relative order-2 w-100% flex flex-col gap-6 h-full min-h-0">
                    
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
                      <div className="flex items-center gap-3">
                        <img
                          src="./favicon.ico"
                          alt="Profile"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col leading-tight">
                        <CanvasTextEffect />
                          <p className="text-sm text-zinc-400">@xeazhar</p>
                        </div>
                      </div>


                     
                      <div className="pt-3 mx-auto flex max-w-lg items-start justify-center">
                            <p className="text-left">
                              I learned how useful tailwind is XD.
                              Honestly this shit is so cool.
                            </p>
                      </div>

                         <div className="text-right pt-10">
                             <a
                              className="p-2 border border-transparent
                              transition-transform transition-colors duration-200 ease-out
                              transform
                              hover:-translate-y-1
                              hover:border-blue-500/30
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                              >
                              Resume →
                            </a>
                      </div>
                   
                    </div>
                      
                      
                  
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 flex flex-col min-h-0 h-full">
                      
                     <div className="p-3 flex items-center text-sm min-h-0 ">
  
                        <span
                          className="text-zinc-400 hover:text-white cursor-default transition-colors"
                        >
                          /Home
                        </span>

                        <span className="text-zinc-600">/</span>

                        <button
                          onClick={() => setActiveTab("projects")}
                          className={`transition-colors hover:text-white ${
                            activeTab === "projects" ? "text-white" : "text-zinc-400"
                          }`}
                        >
                          Projects
                        </button>

                        <span className="text-zinc-600">/</span>

                        <button
                          onClick={() => setActiveTab("experience")}
                          className={`transition-colors hover:text-white ${
                            activeTab === "experience" ? "text-white" : "text-zinc-400"
                          }`}
                        >
                          Experience
                        </button>

                      </div>
                      {activeTab === "projects" && <Projects />}
                      {activeTab === "experience" && <Experience />}
                    </div>
                  
                  
                  
                  
                  </div>

               


                 <div className="relative order-3 flex flex-col gap-6">
                      
                        <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
                            <div>
                              <p>Links</p>
                            </div>

                             <div>
                              <p>Links</p>
                            </div>
                        
                        </div>
                      
                      
                      <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl sm:p-4 shadow-2xl border border-white/10 ">
                        <TerminalDemo/>
                      </div>
                      
                </div>
        
            </div>
          </div>
        </section>
  );
}