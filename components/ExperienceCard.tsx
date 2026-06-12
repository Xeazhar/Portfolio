import React from "react";

type Experience = {
  id: string;
  title: string;
  description: string[];
  tech: string[];
  year: string;
};

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div
      className="
    cursor-target
    p-2
    relative
    after:absolute
    after:left-0
    after:top-0
    after:h-[2px]
    after:w-full
    after:origin-left
    after:scale-x-0
    after:bg-[var(--accent-dark)]
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
  "
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <span className="text-sm text-gray-500 shrink-0">{experience.year}</span>
      </div>

      <ul className="list-disc list-outside pl-5 text-gray-400 mb-4 space-y-1.5">
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-500/40 text-white py-1 px-3 rounded-full text-sm hover:bg-[rgba(var(--accent-rgb),0.2)] hover:shadow-[0_2px_8px_rgba(var(--accent-rgb),0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
