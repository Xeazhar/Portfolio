import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

function hasValidLink(link?: string) {
  return Boolean(link && link !== "#");
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="
    cursor-target
    p-2
    relative
    after:absolute
    after:left-0
    after:top-0
    after:h-[3px]
    after:w-full
    after:origin-left
    after:scale-x-0
    after:bg-[var(--accent-dark)]
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
  ">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-1">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-500/40 text-white py-1 px-3 rounded-full text-sm hover:bg-[rgba(var(--accent-rgb),0.2)] hover:shadow-[0_2px_8px_rgba(var(--accent-rgb),0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {hasValidLink(project.link) && (
        <div className="flex justify-end items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--accent)] transition-colors my-4"
          >
            View Project →
          </a>
        </div>
      )}
    </div>
  );
}
