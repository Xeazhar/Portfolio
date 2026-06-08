import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="cursor-target p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-zinc-500/40 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a href={project.link ?? "#"} className="text-gray-400 hover:text-blue-300 transition-colors my-4">
          View Project →
        </a>
      </div>
    </div>
  );
}
