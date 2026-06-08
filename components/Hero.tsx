"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {codeExamples} from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CanvasTextEffect } from "../ui_block/TextEffect"

export default function Hero() {
  type TabKey = "README.md" | "Skills.js" | "Config.json";
  const [activeTab, setActiveTab] = useState<TabKey>("README.md");

  const getLanguageForTab = (tab: string): string => {
    switch (tab) {
      case "README.md":
        return "markdown";
      case "Skills.js":
        return "javascript";
      case "Config.json":
        return "json";
      default:
        return "text";
    }
  };
  
  


  return(
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    
        <div className="max-w-7xl mx-auto text-center relative w-full">
          
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
            
            <div>
              
              <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className="text-white font-medium">
                  //Hello world
                </span>
                <span>
                  <CanvasTextEffect/>
                </span>
              </h1>

              <div className="text-md sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                <div className="mx-auto flex max-w-lg items-center justify-center">
                      <p className="text-left">
                        I learned how useful tailwind is XD.
                        Honestly this shit is so cool.
                      </p>
                    </div>
              </div>
             
            </div>

         


          {/*This is the card that has the coding effect card*/}
        <div className="relative order-2 w-full">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden min-h-[290px] sm:min-h-[350px] lg:min-h-[460px] border border-white/5 ">
              {/* IDE HEADER*/}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur border-b border-white/10">
                <div className="flex items-center sm:space-x-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    MyPortfolio
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </div>
                 
                 <div className="p-3 sm:p-4 relative h-full">
                        {/*File tabs*/}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto ">
                    <button 
                    onClick={() => setActiveTab("README.md")}
                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab == "README.md" 
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                       : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" }
                         transition-all duration-200 whitespace-nowrap `}>
                    README.md
                    </button>
                    <button 
                    onClick={() => setActiveTab("Skills.js")}
                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab == "Skills.js" 
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                       : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" }
                         transition-all duration-200 whitespace-nowrap`}>
                    Skills.js
                    </button>
                    <button 
                    onClick={() => setActiveTab("Config.json")}
                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab == "Config.json" 
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                       : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" }
                         transition-all duration-200 whitespace-nowrap`}>
                    Config.json
                    </button>
                  </div>
                  {/*The Code Content*/}
                  <div className="relative overflow-hidden flex-grow ">
                      <SyntaxHighlighter 
                      language={getLanguageForTab(activeTab)} 
                      style={nightOwl} 
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        border: "1px solid #3c3c3c",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                     
                     >
                        {codeExamples[activeTab as keyof typeof codeExamples]}
                      </SyntaxHighlighter>
                  </div>
                </div>
              </div>

            </div>
          </div>
           </div>
        </div>
        </section>
  );
}