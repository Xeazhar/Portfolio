import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { BriefcaseBusiness, Mail } from "lucide-react";

export function FloatingDockUI() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#hero",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contacts",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />

      ),
      href: "mailto:jazpera.bustria@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jazper-bustria/",
    },
  
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Xeazhar",
    },
  ];
  return (
    // fixed at bottom-center, hidden on small screens (mobile)
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
