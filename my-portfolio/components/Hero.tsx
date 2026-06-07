"use client";
import { ChevronDown, ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {codeExamples} from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { floatingCards } from "../data/CodeExamples";

export default function Hero() {
//  This is where the Mouse is being tracked to add an interactive effect to the cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
  
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({x: e.clientX, y: e.clientY})
    }
   
      window.addEventListener("mousemove", handleMouseMove);
   
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },  []);

const currentFloatingCard = floatingCards[activeTab];

  return(
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(221, 221, 221, 0.15), transparent 90%)`,
            }}
          />
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
          

        <div>
          <div>

         


          {/*This is the card that has the coding effect card*/}
        <div className="relative order-2 w-full">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border border-white/5">
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
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 animate-bounce" />
              </div>
                 
                 <div className="p-3 sm:p-4 relative h-full">
                        {/*File tabs*/}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button 
                    onClick={() => setActiveTab("README.md")}
                    className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab == "README.md" 
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                       : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10" }
                         transition-all duration-200 whitespace-nowrap`}>
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
                  <div className="relative overflow-hidden flex-grow">
                      <SyntaxHighlighter 
                      language={getLanguageForTab(activeTab)} 
                      style={nightOwl} 
                      customStyle={{
                        margin:0, borderRadius: "8px",
                        fontSize:"11", lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                     
                     >
                        {codeExamples[activeTab as keyof typeof codeExamples]}
                      </SyntaxHighlighter>            
                  </div>
                </div>
              </div>
              {/*Floating Cards */}

              <div 
              className = {`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-35 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  
                  <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>{currentFloatingCard.title}</span>
                </div>
                
                <div>
                  <span className={`text-sm text-left ${currentFloatingCard.contentColor}`}>{currentFloatingCard.content}</span>
                </div>
              </div> 

            </div>
          </div>
           </div>
        </div>
        </section>
  );
}