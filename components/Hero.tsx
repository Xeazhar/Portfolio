"use client";

import { useState } from "react";
import { socialLinks } from "../data/Links";
import techStack from "../data/techStack";
import { CanvasTextEffect, MorphingTextDemo, CanvasSectionTitle } from "../ui_block/TextEffect";
import { TerminalDemo } from "../ui_block/Terminal";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import { ColorChanger } from "../ui_block/ColorChanger";
import { useTheme } from "../context/ThemeContext";

const CARD =
  "bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden";



const TECH_TAG =

  "bg-zinc-500/40 text-white py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-[rgba(var(--accent-rgb),0.2)] hover:shadow-[0_2px_8px_rgba(var(--accent-rgb),0.1)] transition-all";



type Tab = "projects" | "experience" | "education";



export default function Hero() {

  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const { themes, themeId } = useTheme();
  const profileImage = themes[themeId].profileImage;



  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-x-hidden"
    >

      <div className="max-w-7xl mx-auto w-full my-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[auto_auto] gap-4 sm:gap-6 items-stretch">
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <div className={`${CARD} p-4 sm:p-5`}>
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img

                  key={profileImage}
                  src={profileImage}
                  alt="Profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shrink-0 object-cover"

                />

                <div className="min-w-0">
                  <CanvasTextEffect />
                  <MorphingTextDemo />
                </div>
              </div>



              <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed pt-4">
              Hi! I'm Jazper, someone who enjoys working with data, AI, and emerging te chnologies to better 
              understand the world and solve real-world challenges.
              </p>



              <div className="flex justify-end pt-4 mt-4">
                <a
                  href="/Jazper Bustria - Resume.pdf"
                  className="cursor-target text-sm text-[var(--muted-fg)] hover:text-[var(--accent)]"
                  download="Jazper Bustria-Resume.pdf"
                
                >
                  Resume →
                </a>
              </div>
            </div>
          </div>



          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-2 min-h-0">
            <div className={`${CARD} flex flex-col min-h-0`}>
              <nav
                aria-label="Content sections"
                className="flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-base shrink-0"

              >

                <span className="text-[var(--muted-fg)]">/Home</span>
                <span className="text-[var(--muted-fg)]/60">/</span>

                <button
                  type="button"
                  onClick={() => setActiveTab("projects")}
                  className={`cursor-target transition-colors hover:text-[var(--page-fg)] ${
                    activeTab === "projects" ? "text-[var(--page-fg)]" : "text-[var(--muted-fg)]"
                  }`}

                >
                  Projects
                </button>

                <span className="text-[var(--muted-fg)]/60">/</span>
                <button

                  type="button"
                  onClick={() => setActiveTab("experience")}
                  className={`cursor-target transition-colors hover:text-[var(--page-fg)] ${
                    activeTab === "experience" ? "text-[var(--page-fg)]" : "text-[var(--muted-fg)]"

                  }`}

                >

                  Experience
                </button>

                <span className="text-[var(--muted-fg)]/60">/</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("education")}
                  className={`cursor-target transition-colors hover:text-[var(--page-fg)] ${
                    activeTab === "education" ? "text-[var(--page-fg)]" : "text-[var(--muted-fg)]"
                  }`}
                >
                  Education
                </button>
              </nav>



              <div className="px-2 sm:px-4 py-2 min-h-0 flex-1">
                {activeTab === "projects" && <Projects />}
                {activeTab === "experience" && <Experience />}
                {activeTab === "education" && <Education />}
              </div>
            </div>
          </div>



          <aside className="order-4 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col gap-3 min-h-0">
            <div className={`${CARD} p-4 sm:p-5`}>
              <CanvasSectionTitle lines={["TECH", "STACK."]} />
              <div className="flex flex-col gap-4 pt-2">
                {techStack.map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-xs uppercase tracking-wider text-[var(--muted-fg)] mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span key={item} className={TECH_TAG}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>



            <div className="flex justify-end">
              <ColorChanger />
            </div>
          </aside>



          <aside className="order-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:row-span-2 flex flex-col gap-3 items-start min-h-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
              <CanvasSectionTitle lines={["LIN", "KS."]} className="pb-0 shrink-0" />

              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-fit">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={name}
                    className="group aspect-square w-full max-w-16 sm:max-w-none sm:w-16 sm:h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--muted-fg)] group-hover:text-[var(--page-fg)]" />
                  </a>
                ))}
              </div>
            </div>
            <TerminalDemo />
          </aside>
        </div>
      </div>
    </section>

  );

}


