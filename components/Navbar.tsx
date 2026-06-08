"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] ax-w-5xl z-50 transition-all duration-300 bg-zinc-950/20 backdrop-blur-sm border-b rounded-xl border-white/10 px-4">
        <div className="max-w7-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                     
                    <span className="text-xl sm:text-xl font-medium">
                        <span className="bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent font-bold">Xeazhar</span>
                        
                    </span>
                </div>

                {/* Navigation Links */}
                    <div className="hidden " >   {/*md:flex items-center space-x-6 lg:space-x-8*/}
                      
                        <a 
                        href="#techStack" 
                        className="text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            About
                        </a>
                        <a 
                        href="#experience" 
                        className="text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Projects
                        </a>

                        <a 
                        href="#projects" 
                        className="text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Experience
                        </a>
                        <a 
                        href="#contact" 
                        className="text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Contact me
                        </a>
                    </div>
                    

                <button 
                    className="md:hidden p-2 text-gray-300 hover:text-white" 
                    onClick={() => setMobileMenuIsOpen(prev => !prev)}
                >
                    {mobileMenuIsOpen ? (
                        <X className="w-5 h-5 sm:w6 sm:h-6"/>
                    ) : (
                    <Menu className="w-5 h-5 sm:w6 sm:h-6"/>
                    )}
                </button>

            </div>
        </div>
        

        {/* Mobile Menu */}
        {mobileMenuIsOpen && (
            <div className="md:hidden bg-zinc-950/20 backdrop-blur-large border-t border-slate-800 animate-in slide-in-from-top duration-300"> 
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                        href="#techStack" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Tech Stack
                        </a>
                        <a 
                        href="#experience" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Experience
                        </a>

                        <a 
                        href="#projects" 
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Projects
                        </a>
                        <a 
                        href="#contact"
                        onClick={() => setMobileMenuIsOpen(false)} 
                        className="block text-gray-300 hover:text-white text-sm lg:text-base"
                        >
                            Contact me
                        </a>
                </div>
            </div>
        )}

    </nav>
    );
}