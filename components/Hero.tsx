"use client";

import { useState } from "react";
import { socialLinks } from "../data/Links";
import techStack from "../data/techStack";
import { CanvasTextEffect } from "../ui_block/TextEffect";
import { TerminalDemo } from "../ui_block/Terminal";
import Experience from "./Experience";
import Projects from "./Projects";

const CARD =
  "bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden";

const TECH_TAG =
  "bg-zinc-500/40 text-white py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all";

type Tab = "projects" | "experience";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg sm:text-xl font-bold text-white pb-3 mb-4 border-b border-white/10">
      {children}
    </h2>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full my-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[auto_auto] gap-4 sm:gap-6 items-stretch">
          {/* Profile — first on mobile, top-center on desktop */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <div className={`${CARD} p-4 sm:p-5`}>
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img
                  src="./favicon.ico"
                  alt="Profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0"
                />
                <div className="min-w-0">
                  <CanvasTextEffect />
                  <p className="text-sm text-zinc-400">@xeazhar</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-4">
                Hey, I'm Jazper!
              </p>

              <div className="flex justify-end pt-4 mt-4">
                <a
                  href="#"
                  className="cursor-target text-sm text-zinc-400 hover:text-blue-500"
                >
                  Resume →
                </a>
              </div>
            </div>
          </div>

          {/* Projects / Experience — second on mobile */}
          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-2 min-h-0">
            <div className={`${CARD} flex flex-col min-h-0`}>
              <nav
                aria-label="Content sections"
                className="flex flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-sm border-b border-white/10 shrink-0"
              >
                <span className="text-zinc-500">/Home</span>
                <span className="text-zinc-600">/</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("projects")}
                  className={`cursor-target transition-colors hover:text-white ${
                    activeTab === "projects" ? "text-white" : "text-zinc-400"
                  }`}
                >
                  Projects
                </button>
                <span className="text-zinc-600">/</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("experience")}
                  className={`cursor-target transition-colors hover:text-white ${
                    activeTab === "experience" ? "text-white" : "text-zinc-400"
                  }`}
                >
                  Experience
                </button>
              </nav>

              <div className="px-2 sm:px-4 py-2 min-h-0 flex-1">
                {activeTab === "projects" && <Projects />}
                {activeTab === "experience" && <Experience />}
              </div>
            </div>
          </div>

          {/* Tech Stack — fourth on mobile, left column on desktop */}
          <aside className="order-4 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 min-h-0">
            <div className={`${CARD} p-4 sm:p-5`}>
              <SectionTitle>Tech Stack</SectionTitle>
              <div className="flex flex-col gap-4">
                {techStack.map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
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
          </aside>

          {/* Links + Terminal — grouped, third on mobile, right column on desktop */}
          <aside className="order-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:row-span-2 flex flex-col gap-4 min-h-0">
            <div className="p-2 sm:px-4 sm:pt-4 sm:pb-0">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="text-white font-bold leading-none text-2xl sm:text-3xl shrink-0">
                  LIN
                  <br />
                  KS.
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 w-fit">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      title={name}
                      className="group aspect-square w-full max-w-16 sm:max-w-none sm:w-16 sm:h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-300 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-2 sm:px-4 sm:pb-4 min-h-0">
              <TerminalDemo />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
