import React from "react";

type Experience = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
};

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="cursor-target p-5 rounded-xl hover:-translate-y-1 hover:border-blue-500/30 hover:shadow shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
      <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
      <p className="text-gray-400 mb-4">{experience.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {experience.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-500/40 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}
